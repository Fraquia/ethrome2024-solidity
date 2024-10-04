/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../../../common";

export interface IERC777Interface extends Interface {
  getFunction(
    nameOrSignature:
      | "authorizeOperator"
      | "balanceOf"
      | "burn"
      | "defaultOperators"
      | "granularity"
      | "isOperatorFor"
      | "name"
      | "operatorBurn"
      | "operatorSend"
      | "revokeOperator"
      | "send"
      | "symbol"
      | "totalSupply"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AuthorizedOperator"
      | "Burned"
      | "Minted"
      | "RevokedOperator"
      | "Sent"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "authorizeOperator",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "burn",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "defaultOperators",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "granularity",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isOperatorFor",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "operatorBurn",
    values: [AddressLike, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "operatorSend",
    values: [AddressLike, AddressLike, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeOperator",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "send",
    values: [AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "authorizeOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "defaultOperators",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "granularity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isOperatorFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "operatorBurn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "operatorSend",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revokeOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "send", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
}

export namespace AuthorizedOperatorEvent {
  export type InputTuple = [operator: AddressLike, tokenHolder: AddressLike];
  export type OutputTuple = [operator: string, tokenHolder: string];
  export interface OutputObject {
    operator: string;
    tokenHolder: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BurnedEvent {
  export type InputTuple = [
    operator: AddressLike,
    from: AddressLike,
    amount: BigNumberish,
    data: BytesLike,
    operatorData: BytesLike
  ];
  export type OutputTuple = [
    operator: string,
    from: string,
    amount: bigint,
    data: string,
    operatorData: string
  ];
  export interface OutputObject {
    operator: string;
    from: string;
    amount: bigint;
    data: string;
    operatorData: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MintedEvent {
  export type InputTuple = [
    operator: AddressLike,
    to: AddressLike,
    amount: BigNumberish,
    data: BytesLike,
    operatorData: BytesLike
  ];
  export type OutputTuple = [
    operator: string,
    to: string,
    amount: bigint,
    data: string,
    operatorData: string
  ];
  export interface OutputObject {
    operator: string;
    to: string;
    amount: bigint;
    data: string;
    operatorData: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RevokedOperatorEvent {
  export type InputTuple = [operator: AddressLike, tokenHolder: AddressLike];
  export type OutputTuple = [operator: string, tokenHolder: string];
  export interface OutputObject {
    operator: string;
    tokenHolder: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SentEvent {
  export type InputTuple = [
    operator: AddressLike,
    from: AddressLike,
    to: AddressLike,
    amount: BigNumberish,
    data: BytesLike,
    operatorData: BytesLike
  ];
  export type OutputTuple = [
    operator: string,
    from: string,
    to: string,
    amount: bigint,
    data: string,
    operatorData: string
  ];
  export interface OutputObject {
    operator: string;
    from: string;
    to: string;
    amount: bigint;
    data: string;
    operatorData: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IERC777 extends BaseContract {
  connect(runner?: ContractRunner | null): IERC777;
  waitForDeployment(): Promise<this>;

  interface: IERC777Interface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  authorizeOperator: TypedContractMethod<
    [operator: AddressLike],
    [void],
    "nonpayable"
  >;

  balanceOf: TypedContractMethod<[owner: AddressLike], [bigint], "view">;

  burn: TypedContractMethod<
    [amount: BigNumberish, data: BytesLike],
    [void],
    "nonpayable"
  >;

  defaultOperators: TypedContractMethod<[], [string[]], "view">;

  granularity: TypedContractMethod<[], [bigint], "view">;

  isOperatorFor: TypedContractMethod<
    [operator: AddressLike, tokenHolder: AddressLike],
    [boolean],
    "view"
  >;

  name: TypedContractMethod<[], [string], "view">;

  operatorBurn: TypedContractMethod<
    [
      account: AddressLike,
      amount: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  operatorSend: TypedContractMethod<
    [
      sender: AddressLike,
      recipient: AddressLike,
      amount: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  revokeOperator: TypedContractMethod<
    [operator: AddressLike],
    [void],
    "nonpayable"
  >;

  send: TypedContractMethod<
    [recipient: AddressLike, amount: BigNumberish, data: BytesLike],
    [void],
    "nonpayable"
  >;

  symbol: TypedContractMethod<[], [string], "view">;

  totalSupply: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "authorizeOperator"
  ): TypedContractMethod<[operator: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "balanceOf"
  ): TypedContractMethod<[owner: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "burn"
  ): TypedContractMethod<
    [amount: BigNumberish, data: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "defaultOperators"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "granularity"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "isOperatorFor"
  ): TypedContractMethod<
    [operator: AddressLike, tokenHolder: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "name"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "operatorBurn"
  ): TypedContractMethod<
    [
      account: AddressLike,
      amount: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "operatorSend"
  ): TypedContractMethod<
    [
      sender: AddressLike,
      recipient: AddressLike,
      amount: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "revokeOperator"
  ): TypedContractMethod<[operator: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "send"
  ): TypedContractMethod<
    [recipient: AddressLike, amount: BigNumberish, data: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "symbol"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "totalSupply"
  ): TypedContractMethod<[], [bigint], "view">;

  getEvent(
    key: "AuthorizedOperator"
  ): TypedContractEvent<
    AuthorizedOperatorEvent.InputTuple,
    AuthorizedOperatorEvent.OutputTuple,
    AuthorizedOperatorEvent.OutputObject
  >;
  getEvent(
    key: "Burned"
  ): TypedContractEvent<
    BurnedEvent.InputTuple,
    BurnedEvent.OutputTuple,
    BurnedEvent.OutputObject
  >;
  getEvent(
    key: "Minted"
  ): TypedContractEvent<
    MintedEvent.InputTuple,
    MintedEvent.OutputTuple,
    MintedEvent.OutputObject
  >;
  getEvent(
    key: "RevokedOperator"
  ): TypedContractEvent<
    RevokedOperatorEvent.InputTuple,
    RevokedOperatorEvent.OutputTuple,
    RevokedOperatorEvent.OutputObject
  >;
  getEvent(
    key: "Sent"
  ): TypedContractEvent<
    SentEvent.InputTuple,
    SentEvent.OutputTuple,
    SentEvent.OutputObject
  >;

  filters: {
    "AuthorizedOperator(address,address)": TypedContractEvent<
      AuthorizedOperatorEvent.InputTuple,
      AuthorizedOperatorEvent.OutputTuple,
      AuthorizedOperatorEvent.OutputObject
    >;
    AuthorizedOperator: TypedContractEvent<
      AuthorizedOperatorEvent.InputTuple,
      AuthorizedOperatorEvent.OutputTuple,
      AuthorizedOperatorEvent.OutputObject
    >;

    "Burned(address,address,uint256,bytes,bytes)": TypedContractEvent<
      BurnedEvent.InputTuple,
      BurnedEvent.OutputTuple,
      BurnedEvent.OutputObject
    >;
    Burned: TypedContractEvent<
      BurnedEvent.InputTuple,
      BurnedEvent.OutputTuple,
      BurnedEvent.OutputObject
    >;

    "Minted(address,address,uint256,bytes,bytes)": TypedContractEvent<
      MintedEvent.InputTuple,
      MintedEvent.OutputTuple,
      MintedEvent.OutputObject
    >;
    Minted: TypedContractEvent<
      MintedEvent.InputTuple,
      MintedEvent.OutputTuple,
      MintedEvent.OutputObject
    >;

    "RevokedOperator(address,address)": TypedContractEvent<
      RevokedOperatorEvent.InputTuple,
      RevokedOperatorEvent.OutputTuple,
      RevokedOperatorEvent.OutputObject
    >;
    RevokedOperator: TypedContractEvent<
      RevokedOperatorEvent.InputTuple,
      RevokedOperatorEvent.OutputTuple,
      RevokedOperatorEvent.OutputObject
    >;

    "Sent(address,address,address,uint256,bytes,bytes)": TypedContractEvent<
      SentEvent.InputTuple,
      SentEvent.OutputTuple,
      SentEvent.OutputObject
    >;
    Sent: TypedContractEvent<
      SentEvent.InputTuple,
      SentEvent.OutputTuple,
      SentEvent.OutputObject
    >;
  };
}
