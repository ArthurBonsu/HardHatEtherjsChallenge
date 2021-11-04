/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Incrementor, IncrementorInterface } from "../Incrementor";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_x",
        type: "uint256",
      },
    ],
    name: "incrementX",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_y",
        type: "uint256",
      },
    ],
    name: "incrementY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_z",
        type: "uint256",
      },
    ],
    name: "incrementZ",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "incrementaddress",
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
];

const _bytecode =
  "0x608060405230600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555034801561005157600080fd5b50610279806100616000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063210d203114610051578063e1ec32e014610081578063e373f971146100b1578063fe145670146100e1575b600080fd5b61006b60048036038101906100669190610173565b6100ff565b60405161007891906101d5565b60405180910390f35b61009b60048036038101906100969190610173565b610112565b6040516100a891906101d5565b60405180910390f35b6100cb60048036038101906100c69190610173565b610125565b6040516100d891906101d5565b60405180910390f35b6100e9610138565b6040516100f691906101ba565b60405180910390f35b6000816001819055506001549050919050565b6000816000819055506000549050919050565b6000816002819055506002549050919050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008135905061016d8161022c565b92915050565b60006020828403121561018557600080fd5b60006101938482850161015e565b91505092915050565b6101a5816101f0565b82525050565b6101b481610222565b82525050565b60006020820190506101cf600083018461019c565b92915050565b60006020820190506101ea60008301846101ab565b92915050565b60006101fb82610202565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b61023581610222565b811461024057600080fd5b5056fea264697066735822122062dfb388968d5e393b1374ab564138b5abf8ba9e3def91a5a73735708da046c764736f6c63430008020033";

export class Incrementor__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Incrementor> {
    return super.deploy(overrides || {}) as Promise<Incrementor>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Incrementor {
    return super.attach(address) as Incrementor;
  }
  connect(signer: Signer): Incrementor__factory {
    return super.connect(signer) as Incrementor__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): IncrementorInterface {
    return new utils.Interface(_abi) as IncrementorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Incrementor {
    return new Contract(address, _abi, signerOrProvider) as Incrementor;
  }
}
