/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Wallet, WalletInterface } from "../Wallet";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "_customer",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "_balances",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_customeraddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "_customersname",
        type: "string",
      },
    ],
    name: "addtowallet",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "customer",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "customerlist",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    inputs: [
      {
        internalType: "address payable",
        name: "_customeraddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "_customersname",
        type: "string",
      },
    ],
    name: "removefromwallet",
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
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenname",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokensymbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totaltokenSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "transactionaddresslist",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferAmount",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_walletsender",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "walletlist",
    outputs: [
      {
        internalType: "address",
        name: "customeraddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "customername",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "walletlisthere",
    outputs: [
      {
        internalType: "address",
        name: "customeraddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "customername",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526040518060400160405280600b81526020017f426f6e7375546f6b656e730000000000000000000000000000000000000000008152506006908051906020019062000051929190620003e5565b506040518060400160405280600381526020017f42544b0000000000000000000000000000000000000000000000000000000000815250600790805190602001906200009f929190620003e5565b50620f4240600955348015620000b457600080fd5b50604051620030e4380380620030e48339818101604052810190620000da9190620004c3565b60068054620000e9906200054c565b80601f016020809104026020016040519081016040528092919081815260200182805462000117906200054c565b8015620001685780601f106200013c5761010080835404028352916020019162000168565b820191906000526020600020905b8154815290600101906020018083116200014a57829003601f168201915b5050505050600780546200017c906200054c565b80601f0160208091040260200160405190810160405280929190818152602001828054620001aa906200054c565b8015620001fb5780601f10620001cf57610100808354040283529160200191620001fb565b820191906000526020600020905b815481529060010190602001808311620001dd57829003601f168201915b5050505050816003908051906020019062000218929190620003e5565b50806004908051906020019062000231929190620003e5565b50505081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600d60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600954600b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050620005e5565b828054620003f3906200054c565b90600052602060002090601f01602090048101928262000417576000855562000463565b82601f106200043257805160ff191683800117855562000463565b8280016001018555821562000463579182015b828111156200046257825182559160200191906001019062000445565b5b50905062000472919062000476565b5090565b5b808211156200049157600081600090555060010162000477565b5090565b600081519050620004a681620005b1565b92915050565b600081519050620004bd81620005cb565b92915050565b60008060408385031215620004d757600080fd5b6000620004e78582860162000495565b9250506020620004fa85828601620004ac565b9150509250929050565b600062000511826200052c565b9050919050565b600062000525826200052c565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600060028204905060018216806200056557607f821691505b602082108114156200057c576200057b62000582565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b620005bc8162000504565b8114620005c857600080fd5b50565b620005d68162000518565b8114620005e257600080fd5b50565b612aef80620005f56000396000f3fe6080604052600436106101665760003560e01c80637f8bb1aa116100d1578063a64b6e5f1161008a578063d7081e0311610064578063d7081e03146105ca578063dd62ed3e146105fa578063e4348fc214610637578063fd4004751461067457610166565b8063a64b6e5f14610527578063a9059cbb14610550578063c9d7dbf31461058d57610166565b80637f8bb1aa146103ee578063890f93d3146104195780638da5cb5b146104575780639381e48d1461048257806395d89b41146104bf578063a457c2d7146104ea57610166565b806339509351116101235780633950935114610291578063420527bb146102ce57806348075cec146102f957806358708c2b146103365780636ebcf6071461037457806370a08231146103b157610166565b806306fdde031461016b578063095ea7b31461019657806318160ddd146101d357806323b872dd146101fe5780632804b2c01461023b578063313ce56714610266575b600080fd5b34801561017757600080fd5b5061018061069f565b60405161018d9190612248565b60405180910390f35b3480156101a257600080fd5b506101bd60048036038101906101b89190611ee6565b610731565b6040516101ca919061222d565b60405180910390f35b3480156101df57600080fd5b506101e861074f565b6040516101f5919061242a565b60405180910390f35b34801561020a57600080fd5b5061022560048036038101906102209190611e97565b610759565b604051610232919061222d565b60405180910390f35b34801561024757600080fd5b50610250610851565b60405161025d91906121e2565b60405180910390f35b34801561027257600080fd5b5061027b610877565b6040516102889190612445565b60405180910390f35b34801561029d57600080fd5b506102b860048036038101906102b39190611ee6565b610880565b6040516102c5919061222d565b60405180910390f35b3480156102da57600080fd5b506102e361092c565b6040516102f0919061242a565b60405180910390f35b34801561030557600080fd5b50610320600480360381019061031b9190611d53565b610932565b60405161032d919061242a565b60405180910390f35b34801561034257600080fd5b5061035d60048036038101906103589190611f22565b61094a565b60405161036b9291906121fd565b60405180910390f35b34801561038057600080fd5b5061039b60048036038101906103969190611d53565b610a26565b6040516103a8919061242a565b60405180910390f35b3480156103bd57600080fd5b506103d860048036038101906103d39190611d53565b610a3e565b6040516103e5919061242a565b60405180910390f35b3480156103fa57600080fd5b50610403610a87565b6040516104109190612248565b60405180910390f35b34801561042557600080fd5b50610440600480360381019061043b9190611d53565b610b15565b60405161044e9291906121fd565b60405180910390f35b34801561046357600080fd5b5061046c610be1565b60405161047991906121e2565b60405180910390f35b34801561048e57600080fd5b506104a960048036038101906104a49190611d53565b610c07565b6040516104b691906121e2565b60405180910390f35b3480156104cb57600080fd5b506104d4610c3a565b6040516104e19190612248565b60405180910390f35b3480156104f657600080fd5b50610511600480360381019061050c9190611ee6565b610ccc565b60405161051e919061222d565b60405180910390f35b34801561053357600080fd5b5061054e60048036038101906105499190611d7c565b610db7565b005b34801561055c57600080fd5b5061057760048036038101906105729190611ee6565b610f2a565b604051610584919061222d565b60405180910390f35b34801561059957600080fd5b506105b460048036038101906105af9190611dcb565b610f48565b6040516105c191906121e2565b60405180910390f35b6105e460048036038101906105df9190611e1f565b6112d5565b6040516105f1919061222d565b60405180910390f35b34801561060657600080fd5b50610621600480360381019061061c9190611e5b565b6113e5565b60405161062e919061242a565b60405180910390f35b34801561064357600080fd5b5061065e60048036038101906106599190611dcb565b61146c565b60405161066b91906121e2565b60405180910390f35b34801561068057600080fd5b50610689611650565b6040516106969190612248565b60405180910390f35b6060600380546106ae906125dc565b80601f01602080910402602001604051908101604052809291908181526020018280546106da906125dc565b80156107275780601f106106fc57610100808354040283529160200191610727565b820191906000526020600020905b81548152906001019060200180831161070a57829003601f168201915b5050505050905090565b600061074561073e6116de565b84846116e6565b6001905092915050565b6000600954905090565b60006107668484846118b1565b6000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006107b16116de565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610831576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108289061236a565b60405180910390fd5b6108458561083d6116de565b8584036116e6565b60019150509392505050565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006012905090565b600061092261088d6116de565b84846001600061089b6116de565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461091d91906124dd565b6116e6565b6001905092915050565b60095481565b600c6020528060005260406000206000915090505481565b6010818154811061095a57600080fd5b90600052602060002090600202016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010180546109a3906125dc565b80601f01602080910402602001604051908101604052809291908181526020018280546109cf906125dc565b8015610a1c5780601f106109f157610100808354040283529160200191610a1c565b820191906000526020600020905b8154815290600101906020018083116109ff57829003601f168201915b5050505050905082565b600b6020528060005260406000206000915090505481565b6000600b60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60068054610a94906125dc565b80601f0160208091040260200160405190810160405280929190818152602001828054610ac0906125dc565b8015610b0d5780601f10610ae257610100808354040283529160200191610b0d565b820191906000526020600020905b815481529060010190602001808311610af057829003601f168201915b505050505081565b600a6020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001018054610b5e906125dc565b80601f0160208091040260200160405190810160405280929190818152602001828054610b8a906125dc565b8015610bd75780601f10610bac57610100808354040283529160200191610bd7565b820191906000526020600020905b815481529060010190602001808311610bba57829003601f168201915b5050505050905082565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600d6020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606060048054610c49906125dc565b80601f0160208091040260200160405190810160405280929190818152602001828054610c75906125dc565b8015610cc25780601f10610c9757610100808354040283529160200191610cc2565b820191906000526020600020905b815481529060010190602001808311610ca557829003601f168201915b5050505050905090565b60008060016000610cdb6116de565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610d98576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d8f9061240a565b60405180910390fd5b610dac610da36116de565b858584036116e6565b600191505092915050565b8173ffffffffffffffffffffffffffffffffffffffff16600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610e48576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e3f9061230a565b60405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff16600a60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610f19576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f10906123ea565b60405180910390fd5b610f24838383610759565b50505050565b6000610f3e610f376116de565b84846118b1565b6001905092915050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610fda576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fd19061238a565b60405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff16600a60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146110aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110a1906122ca565b60405180910390fd5b82600a60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600a60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001019080519060200190611181929190611b3c565b5060405180604001604052808473ffffffffffffffffffffffffffffffffffffffff16815260200183815250600e60008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001019080519060200190611212929190611b3c565b509050506010600e90806001815401808255809150506001900390600052602060002090600202016000909190919091506000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060018201816001019080546112be906125dc565b6112c9929190611bc2565b50505082905092915050565b60008060009050829050600a831015611323576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161131a9061234a565b60405180910390fd5b6000808573ffffffffffffffffffffffffffffffffffffffff168360405161134a906121cd565b60006040518083038185875af1925050503d8060008114611387576040519150601f19603f3d011682016040523d82523d6000602084013e61138c565b606091505b509150915060011515821515146113d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113cf9061228a565b60405180910390fd5b6001935050505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146114fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114f59061238a565b60405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff16600a60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146115ce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115c59061232a565b60405180910390fd5b600a60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160006116459190611c4f565b505082905092915050565b6007805461165d906125dc565b80601f0160208091040260200160405190810160405280929190818152602001828054611689906125dc565b80156116d65780601f106116ab576101008083540402835291602001916116d6565b820191906000526020600020905b8154815290600101906020018083116116b957829003601f168201915b505050505081565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611756576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161174d906123ca565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156117c6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117bd906122aa565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516118a4919061242a565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611921576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611918906123aa565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611991576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119889061226a565b60405180910390fd5b61199c838383611b32565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015611a22576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a19906122ea565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611ab591906124dd565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051611b19919061242a565b60405180910390a3611b2c848484611b37565b50505050565b505050565b505050565b828054611b48906125dc565b90600052602060002090601f016020900481019282611b6a5760008555611bb1565b82601f10611b8357805160ff1916838001178555611bb1565b82800160010185558215611bb1579182015b82811115611bb0578251825591602001919060010190611b95565b5b509050611bbe9190611c8f565b5090565b828054611bce906125dc565b90600052602060002090601f016020900481019282611bf05760008555611c3e565b82601f10611c015780548555611c3e565b82800160010185558215611c3e57600052602060002091601f016020900482015b82811115611c3d578254825591600101919060010190611c22565b5b509050611c4b9190611c8f565b5090565b508054611c5b906125dc565b6000825580601f10611c6d5750611c8c565b601f016020900490600052602060002090810190611c8b9190611c8f565b5b50565b5b80821115611ca8576000816000905550600101611c90565b5090565b6000611cbf611cba84612485565b612460565b905082815260208101848484011115611cd757600080fd5b611ce284828561259a565b509392505050565b600081359050611cf981612a74565b92915050565b600081359050611d0e81612a8b565b92915050565b600082601f830112611d2557600080fd5b8135611d35848260208601611cac565b91505092915050565b600081359050611d4d81612aa2565b92915050565b600060208284031215611d6557600080fd5b6000611d7384828501611cea565b91505092915050565b600080600060608486031215611d9157600080fd5b6000611d9f86828701611cff565b9350506020611db086828701611cea565b9250506040611dc186828701611d3e565b9150509250925092565b60008060408385031215611dde57600080fd5b6000611dec85828601611cff565b925050602083013567ffffffffffffffff811115611e0957600080fd5b611e1585828601611d14565b9150509250929050565b60008060408385031215611e3257600080fd5b6000611e4085828601611cff565b9250506020611e5185828601611d3e565b9150509250929050565b60008060408385031215611e6e57600080fd5b6000611e7c85828601611cea565b9250506020611e8d85828601611cea565b9150509250929050565b600080600060608486031215611eac57600080fd5b6000611eba86828701611cea565b9350506020611ecb86828701611cea565b9250506040611edc86828701611d3e565b9150509250925092565b60008060408385031215611ef957600080fd5b6000611f0785828601611cea565b9250506020611f1885828601611d3e565b9150509250929050565b600060208284031215611f3457600080fd5b6000611f4284828501611d3e565b91505092915050565b611f5481612533565b82525050565b611f6381612557565b82525050565b6000611f74826124b6565b611f7e81856124cc565b9350611f8e8185602086016125a9565b611f97816126cc565b840191505092915050565b6000611faf6023836124cc565b9150611fba826126dd565b604082019050919050565b6000611fd2601d836124cc565b9150611fdd8261272c565b602082019050919050565b6000611ff56022836124cc565b915061200082612755565b604082019050919050565b6000612018602d836124cc565b9150612023826127a4565b604082019050919050565b600061203b6026836124cc565b9150612046826127f3565b604082019050919050565b600061205e6014836124cc565b915061206982612842565b602082019050919050565b6000612081601b836124cc565b915061208c8261286b565b602082019050919050565b60006120a46012836124cc565b91506120af82612894565b602082019050919050565b60006120c76028836124cc565b91506120d2826128bd565b604082019050919050565b60006120ea6013836124cc565b91506120f58261290c565b602082019050919050565b600061210d6025836124cc565b915061211882612935565b604082019050919050565b60006121306000836124c1565b915061213b82612984565b600082019050919050565b60006121536024836124cc565b915061215e82612987565b604082019050919050565b60006121766034836124cc565b9150612181826129d6565b604082019050919050565b60006121996025836124cc565b91506121a482612a25565b604082019050919050565b6121b881612583565b82525050565b6121c78161258d565b82525050565b60006121d882612123565b9150819050919050565b60006020820190506121f76000830184611f4b565b92915050565b60006040820190506122126000830185611f4b565b81810360208301526122248184611f69565b90509392505050565b60006020820190506122426000830184611f5a565b92915050565b600060208201905081810360008301526122628184611f69565b905092915050565b6000602082019050818103600083015261228381611fa2565b9050919050565b600060208201905081810360008301526122a381611fc5565b9050919050565b600060208201905081810360008301526122c381611fe8565b9050919050565b600060208201905081810360008301526122e38161200b565b9050919050565b600060208201905081810360008301526123038161202e565b9050919050565b6000602082019050818103600083015261232381612051565b9050919050565b6000602082019050818103600083015261234381612074565b9050919050565b6000602082019050818103600083015261236381612097565b9050919050565b60006020820190508181036000830152612383816120ba565b9050919050565b600060208201905081810360008301526123a3816120dd565b9050919050565b600060208201905081810360008301526123c381612100565b9050919050565b600060208201905081810360008301526123e381612146565b9050919050565b6000602082019050818103600083015261240381612169565b9050919050565b600060208201905081810360008301526124238161218c565b9050919050565b600060208201905061243f60008301846121af565b92915050565b600060208201905061245a60008301846121be565b92915050565b600061246a61247b565b9050612476828261260e565b919050565b6000604051905090565b600067ffffffffffffffff8211156124a05761249f61269d565b5b6124a9826126cc565b9050602081019050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b60006124e882612583565b91506124f383612583565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156125285761252761263f565b5b828201905092915050565b600061253e82612563565b9050919050565b600061255082612563565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b82818337600083830152505050565b60005b838110156125c75780820151818401526020810190506125ac565b838111156125d6576000848401525b50505050565b600060028204905060018216806125f457607f821691505b602082108114156126085761260761266e565b5b50919050565b612617826126cc565b810181811067ffffffffffffffff821117156126365761263561269d565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f436865636b2074686520616d6f756e742073656e742061732077656c6c000000600082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f437573746f6d6572206164647265737320616c7265616479206578697374206960008201527f6e2077616c6c6574206865726500000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f43616e6e6f742073656e6420746f206f776e6572000000000000000000000000600082015250565b7f437573746f6d6572206973206e6f7420696e20746865206c6973740000000000600082015250565b7f416d6f756e74206e6f7420656e6f756768200000000000000000000000000000600082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206160008201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000602082015250565b7f5265766f6b65205472616e73616374696f6e7300000000000000000000000000600082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b50565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f43616e6e6f742073656e6420616d6f756e7420746f20796f7572206f776e207760008201527f616c6c657420616464726573732073746f726564000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b612a7d81612533565b8114612a8857600080fd5b50565b612a9481612545565b8114612a9f57600080fd5b50565b612aab81612583565b8114612ab657600080fd5b5056fea264697066735822122037c5ec0f282e62b8a4072f24542739f9ebb9c0e0b2df3361081aec9f1ceb1d3e64736f6c63430008020033";

export class Wallet__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _owner: string,
    _customer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Wallet> {
    return super.deploy(_owner, _customer, overrides || {}) as Promise<Wallet>;
  }
  getDeployTransaction(
    _owner: string,
    _customer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_owner, _customer, overrides || {});
  }
  attach(address: string): Wallet {
    return super.attach(address) as Wallet;
  }
  connect(signer: Signer): Wallet__factory {
    return super.connect(signer) as Wallet__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WalletInterface {
    return new utils.Interface(_abi) as WalletInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Wallet {
    return new Contract(address, _abi, signerOrProvider) as Wallet;
  }
}
