/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  CpFactory,
  CpFactoryInterface,
} from "../../../contracts/CampaignFactory_old.sol/CpFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_implementationCp",
        type: "address",
      },
      {
        internalType: "address",
        name: "_usdcx",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "cpAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "cpAdmin",
        type: "address",
      },
    ],
    name: "CpCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_cpAdmin",
        type: "address",
      },
      {
        internalType: "string",
        name: "_cpMetadata",
        type: "string",
      },
    ],
    name: "createCp",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "implementationCp",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "usdcx",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052734db26c973fae52f43bd96a8776c2bf1b0dc29556600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555034801561006557600080fd5b5060405161089638038061089683398181016040528101906100879190610172565b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050506101b2565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061013f82610114565b9050919050565b61014f81610134565b811461015a57600080fd5b50565b60008151905061016c81610146565b92915050565b600080604083850312156101895761018861010f565b5b60006101978582860161015d565b92505060206101a88582860161015d565b9150509250929050565b6106d5806101c16000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806305564124146100465780634e733281146100765780635606d5a814610094575b600080fd5b610060600480360381019061005b9190610491565b6100b2565b60405161006d91906104fc565b60405180910390f35b61007e6101d5565b60405161008b91906104fc565b60405180910390f35b61009c6101fb565b6040516100a991906104fc565b60405180910390f35b6000806100de60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1661021f565b90508073ffffffffffffffffffffffffffffffffffffffff16635c9a6d37600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1686866040518463ffffffff1660e01b815260040161013f939291906105f5565b600060405180830381600087803b15801561015957600080fd5b505af115801561016d573d6000803e3d6000fd5b505050508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f2f4fdb7f5b60eee84c4b71424ff16f77ffaa406eaccd9e03b19effc411df238360405160405180910390a38091505092915050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000763d602d80600a3d3981f3363d3d373d3d3d363d730000008260601b60e81c176000526e5af43d82803e903d91602b57fd5bf38260781b17602052603760096000f09050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036102d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102cb9061067f565b60405180910390fd5b919050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610318826102ed565b9050919050565b6103288161030d565b811461033357600080fd5b50565b6000813590506103458161031f565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61039e82610355565b810181811067ffffffffffffffff821117156103bd576103bc610366565b5b80604052505050565b60006103d06102d9565b90506103dc8282610395565b919050565b600067ffffffffffffffff8211156103fc576103fb610366565b5b61040582610355565b9050602081019050919050565b82818337600083830152505050565b600061043461042f846103e1565b6103c6565b9050828152602081018484840111156104505761044f610350565b5b61045b848285610412565b509392505050565b600082601f8301126104785761047761034b565b5b8135610488848260208601610421565b91505092915050565b600080604083850312156104a8576104a76102e3565b5b60006104b685828601610336565b925050602083013567ffffffffffffffff8111156104d7576104d66102e8565b5b6104e385828601610463565b9150509250929050565b6104f68161030d565b82525050565b600060208201905061051160008301846104ed565b92915050565b6000819050919050565b600061053c610537610532846102ed565b610517565b6102ed565b9050919050565b600061054e82610521565b9050919050565b600061056082610543565b9050919050565b61057081610555565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b838110156105b0578082015181840152602081019050610595565b60008484015250505050565b60006105c782610576565b6105d18185610581565b93506105e1818560208601610592565b6105ea81610355565b840191505092915050565b600060608201905061060a6000830186610567565b61061760208301856104ed565b818103604083015261062981846105bc565b9050949350505050565b7f455243313136373a20637265617465206661696c656400000000000000000000600082015250565b6000610669601683610581565b915061067482610633565b602082019050919050565b600060208201905081810360008301526106988161065c565b905091905056fea2646970667358221220588b0be1545aa5bfb9cb2882a741e2467f4b2b007558e53c7cd5fa3e609df9e764736f6c634300081b0033";

type CpFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CpFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CpFactory__factory extends ContractFactory {
  constructor(...args: CpFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _implementationCp: AddressLike,
    _usdcx: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _implementationCp,
      _usdcx,
      overrides || {}
    );
  }
  override deploy(
    _implementationCp: AddressLike,
    _usdcx: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_implementationCp, _usdcx, overrides || {}) as Promise<
      CpFactory & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): CpFactory__factory {
    return super.connect(runner) as CpFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CpFactoryInterface {
    return new Interface(_abi) as CpFactoryInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): CpFactory {
    return new Contract(address, _abi, runner) as unknown as CpFactory;
  }
}
