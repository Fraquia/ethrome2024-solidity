/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
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
} from "../../common";

export interface CpFactoryInterface extends Interface {
  getFunction(
    nameOrSignature: "createCp" | "implementationCp" | "usdcx"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "CpCreated"): EventFragment;

  encodeFunctionData(
    functionFragment: "createCp",
    values: [AddressLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "implementationCp",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "usdcx", values?: undefined): string;

  decodeFunctionResult(functionFragment: "createCp", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "implementationCp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "usdcx", data: BytesLike): Result;
}

export namespace CpCreatedEvent {
  export type InputTuple = [cpAddress: AddressLike, cpAdmin: AddressLike];
  export type OutputTuple = [cpAddress: string, cpAdmin: string];
  export interface OutputObject {
    cpAddress: string;
    cpAdmin: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface CpFactory extends BaseContract {
  connect(runner?: ContractRunner | null): CpFactory;
  waitForDeployment(): Promise<this>;

  interface: CpFactoryInterface;

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

  createCp: TypedContractMethod<
    [_cpAdmin: AddressLike, _cpMetadata: string],
    [string],
    "nonpayable"
  >;

  implementationCp: TypedContractMethod<[], [string], "view">;

  usdcx: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "createCp"
  ): TypedContractMethod<
    [_cpAdmin: AddressLike, _cpMetadata: string],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "implementationCp"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "usdcx"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "CpCreated"
  ): TypedContractEvent<
    CpCreatedEvent.InputTuple,
    CpCreatedEvent.OutputTuple,
    CpCreatedEvent.OutputObject
  >;

  filters: {
    "CpCreated(address,address)": TypedContractEvent<
      CpCreatedEvent.InputTuple,
      CpCreatedEvent.OutputTuple,
      CpCreatedEvent.OutputObject
    >;
    CpCreated: TypedContractEvent<
      CpCreatedEvent.InputTuple,
      CpCreatedEvent.OutputTuple,
      CpCreatedEvent.OutputObject
    >;
  };
}
