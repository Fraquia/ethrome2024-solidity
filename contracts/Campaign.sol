// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import {ISuperfluid, ISuperToken, IConstantFlowAgreementV1} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol";
import {SuperTokenV1Library} from "@superfluid-finance/ethereum-contracts/contracts/apps/SuperTokenV1Library.sol";

contract Campaign is ERC1155 {
    using SuperTokenV1Library for ISuperToken;

    // Superfluid-specific variables
    ISuperToken public usdcx; // SuperToken (USDCx)

    // Campaign status
    bool public isInitialized;
    bool public isPaused;

    // Campaign details
    address public cpAdmin;
    string public cpMetadata;

    modifier onlyAdmin() {
        require(
            msg.sender == cpAdmin,
            "Only campaign admin can call this function"
        );
        _;
    }

    constructor() ERC1155("") {}

    // Initialize the campaign
    function init(
        ISuperToken _usdcx,
        address _cpAdmin,
        string memory _cpMetadata
    ) public {
        _createCampaign(_usdcx, _cpAdmin, _cpMetadata);
    }

    // CP Admin functions
    // Function to pause the campaign
    function pauseCampaign() external onlyAdmin {
        isPaused = true;
    }

    // Function to resume the campaign
    function resumeCampaign() external onlyAdmin {
        isPaused = false;
    }

    // Function for the cpAdmin to withdraw and downgrade collected funds
    function withdrawFunds() external onlyAdmin {
        uint256 contractBalance = usdcx.balanceOf(address(this)); // Check contract's SuperToken balance
        require(contractBalance > 0, "No funds to withdraw");

        // Downgrade SuperToken to underlying ERC20 and transfer to the cpAdmin
        usdcx.downgradeTo(cpAdmin, contractBalance);
    }

    // Donor functions
    // Function to start donating via a Superfluid stream
    function donateViaStream(int96 flowRate) external {
        require(!isPaused, "Campaign is paused");

        // Create a Superfluid stream to the campaign contract
        usdcx.createFlowFrom(msg.sender, address(this), flowRate);

        // Mint an ERC1155 token representing the donation
        _mint(msg.sender, 1, 1, "");
    }

    // Function to stop the donation stream
    function stopDonationStream() external {
        // Stop the stream and refund the user their remaining balance
        usdcx.deleteFlow(msg.sender, address(this));

        // Burn the user's ERC1155 token representing their donation
        _burn(msg.sender, 1, 1);
    }

    // Internal functions
    // Internal function to create a campaign
    function _createCampaign(
        ISuperToken _usdcx,
        address _cpAdmin,
        string memory _cpMetadata
    ) internal {
        require(!isInitialized, "Campaign already initialized");
        require(_usdcx != ISuperToken(address(0)), "Invalid USDCx address");
        require(_cpAdmin != address(0), "Invalid campaign admin address");

        usdcx = _usdcx;
        cpAdmin = _cpAdmin;
        cpMetadata = _cpMetadata;

        isInitialized = true;
    }
}
