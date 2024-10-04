// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./Campaign.sol";
import "@openzeppelin/contracts/proxy/Clones.sol";
import {ISuperToken} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperToken.sol";

contract cpFactory {
    event CpCreated(address indexed cpAddress, address indexed cpAdmin);

    address public implementationCp;
    address public usdcx = 0x2bB0506C279D9F9709F39cBc9bCc3ac34A83918b; // Super USDC on Sepolia

    constructor(address _implementationCp) {
        implementationCp = _implementationCp;
    }

    // Updated createCp function to match new Campaign constructor
    function createCp(
        address _cpAdmin,
        string memory _cpMetadata
    ) external returns (address) {
        // Create a new instance of the campaign contract using Clones
        address newCp = Clones.clone(implementationCp);

        // Initialize the new campaign with the USDCx token address and metadata
        Campaign(newCp).init(ISuperToken(usdcx), _cpAdmin, _cpMetadata);

        emit CpCreated(newCp, _cpAdmin);
        return newCp;
    }
}
