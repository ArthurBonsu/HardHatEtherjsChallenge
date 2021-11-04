//import { Signer, } from "@ethersproject/abstract-signer";
import { TransactionRequest } from "@ethersproject/abstract-provider";
import { Signer } from "crypto";
import "dotenv/config";
import { ethers } from "ethers";
import path from "path";
import { getSignatureForFn } from "typechain";



export function getInfuraProvider(
  network: string,  
  nodeProviderApiKey:string ): ethers.providers.BaseProvider {
  return new ethers.providers.InfuraProvider(network, nodeProviderApiKey);
}
export function getInfuraListedAccounts(
  network: string,  
  nodeProviderApiKey:string ): Promise<string[]>{
  return new ethers.providers.InfuraProvider(network, nodeProviderApiKey).listAccounts();
}

 //FOR INFURA PRODUCT STRUFFHERE
   
   
 export function getInfuraWebSocketProvider(
  network?: ethers.providers.Networkish | undefined, apiKey?: any ):ethers.providers.InfuraWebSocketProvider {
  return ethers.providers.InfuraProvider.getWebSocketProvider(network,apiKey);
 
}

export function getInfuraApiKey(
  network?: ethers.providers.Networkish, apiKey?: any ): any {
  return ethers.providers.InfuraProvider.getApiKey( apiKey);
}

export function getInfuraUrl(
  network: ethers.providers.Network, apiKey: any ): ethers.utils.ConnectionInfo {
  return ethers.providers.InfuraProvider.getUrl(network, apiKey);
}

// ETHERSCAN HELPERS
export function getEtherscanProvider(
network?: ethers.providers.Networkish, apiKey?: string): any {
  return new  ethers.providers.EtherscanProvider(network, apiKey);
}

export function getEtherscanNetwork(
  network?: ethers.providers.Networkish, apiKey?: string): any {
    return new  ethers.providers.EtherscanProvider(network, apiKey).getNetwork();
  }

export function getEtherscanUrl( module: string, params: Record<string, string>,
network?: ethers.providers.Networkish,apiKey?: string,) {
  return new  ethers.providers.EtherscanProvider(network, apiKey).getUrl(module,params);
}

   
export function getEtherscanTransactionReceipt(transactionHash: string | Promise<string>,
  network?: ethers.providers.Networkish, apiKey?: string, ): Promise<ethers.providers.TransactionReceipt> {
    return new  ethers.providers.EtherscanProvider(network, apiKey).getTransactionReceipt(transactionHash);
  }

  export function getEtherscanPostUrl(
    network?: ethers.providers.Networkish, apiKey?: string): any {
      return new  ethers.providers.EtherscanProvider(network, apiKey).getPostUrl();
    }

    export function getEtherscanDetectedNetwork(
      network?: ethers.providers.Networkish, apiKey?: string): any {
        return new  ethers.providers.EtherscanProvider(network, apiKey).detectNetwork();
      }


      export function getEtherscanFetchedUrl(module: string, params: Record<string, any>,
        network?: ethers.providers.Networkish, apiKey?: string, post?: boolean): Promise<any> {
          return new  ethers.providers.EtherscanProvider(network, apiKey).fetch(module, params, post);
        }

     
        export function getEtherscanHistory(
          addressOrName: string | Promise<string>,network?: ethers.providers.Networkish, apiKey?: string, startBlock?: ethers.providers.BlockTag, endBlock?: ethers.providers.BlockTag): Promise<any> {
            return new  ethers.providers.EtherscanProvider(network, apiKey).getHistory(addressOrName, startBlock, endBlock);
          }
       

export function getAlchemyProvider(
  network: string, 
  nodeProviderApiKey: string
): ethers.providers.BaseProvider {
  return new ethers.providers.AlchemyProvider(network, nodeProviderApiKey);
}
export function getAlchemyWebSocketProvider(
  network: string, 
  nodeProviderApiKey: string
): ethers.providers.AlchemyWebSocketProvider {
  return  ethers.providers.AlchemyProvider.getWebSocketProvider(network, nodeProviderApiKey);
}

export function getAlchemySigner(
  network: string, 
  nodeProviderApiKey: string,
  address?: string
): ethers.providers.JsonRpcSigner {
  return new ethers.providers.AlchemyProvider(network, nodeProviderApiKey).getSigner(address);
}
export function getAlchemyListedAccounts(
  network: string, 
  nodeProviderApiKey: string,
 
): Promise<string[]> {
  return new ethers.providers.AlchemyProvider(network, nodeProviderApiKey).listAccounts()
}
export function getAlchemyTransaction(
  transactionHash: string | Promise<string>,
  network: string, 
  nodeProviderApiKey: string,
 
): Promise<ethers.providers.TransactionResponse> {
  return new ethers.providers.AlchemyProvider(network, nodeProviderApiKey).getTransaction(transactionHash);
}


export function getWallet(network:string, nodeProviderApiKey: string ) {
  return (useInfura: boolean) => (pvtKey: string ): ethers.Wallet =>
    useInfura
      ? new ethers.Wallet(
          pvtKey,
          getInfuraProvider(network,nodeProviderApiKey) )
      : new ethers.Wallet(
          pvtKey,
          getAlchemyProvider(network, process.env.ALCHEMY_KEY as string)
        );
}

 
let pvtKey = process.env.PRIVATEKY;
      export async  function getSignerForWallet(network:string, nodeProviderApiKey: string ):Promise<string> {
        return (new ethers.Wallet(
                String(pvtKey),
                getInfuraProvider(network,nodeProviderApiKey) ).getAddress())
            
      }
      export function PopulateWalletTransaction(pvtKey:string,transaction: ethers.utils.Deferrable<ethers.providers.TransactionRequest> ){

        return new ethers.Wallet(pvtKey).populateTransaction(transaction);
      }
     
      export async function SignWalletTransaction(network:string, nodeProviderApiKey: string,transaction: TransactionRequest ) {
        return (new ethers.Wallet(
                String(pvtKey),
                getInfuraProvider(network,nodeProviderApiKey)).signTransaction(transaction));
  
                }
    

    export async function signWalletMessage(network:string, nodeProviderApiKey: string,message: string | ethers.utils.Bytes  ) {
      return (new ethers.Wallet(
              String(pvtKey),
              getInfuraProvider(network,nodeProviderApiKey)).signMessage(message));

              
  }
     export function setWalletWithMnemonic(mneumoic:string, path?:string ){

        return  ethers.Wallet.fromMnemonic(mneumoic, path); 
      }

      
      export function getWalletBalanceWithMnemonic(mnemonic: string) {

        return ethers.Wallet.fromMnemonic(mnemonic).getBalance();
      }
     
      export function getWalletWithPrivateKey(pvtKey: string ){
        return  (new ethers.Wallet(String(pvtKey)));
      }

      export function getWalletWithPublicKey(publickey: string ){
      return  (new ethers.Wallet(String(pvtKey)));
      }

      
// Getting the Contract
export function ConnectToContract(
  signerOrProvider: ethers.Signer | ethers.providers.Provider
) {
  return function ConnectToContracts(
    address: string,
    abi: ethers.ContractInterface, 
    network?:ethers.providers.Networkish,apiKey?: any
  ): ethers.Contract {
    return new ethers.Contract(address, abi, signerOrProvider).connect(new ethers.providers.InfuraProvider(network,apiKey ));
  };
}

//The signer is provided and the provider is also provided
export function getContract(
    address: string,
    abi: ethers.ContractInterface,
    signerOrProvider: ethers.Signer | ethers.providers.Provider 
   
  ): ethers.Contract {
    return new ethers.Contract(address, abi, signerOrProvider);
  };

 

  interface Libraries {
    [libraryName: string]: string;
  }
  
 interface FactoryOptions {
    signer?: ethers.Signer;
    libraries?: Libraries;
  }
  

  
  interface FactoryOptions {
    signer?: ethers.Signer;
    libraries?: Libraries;
  }
 
  export function DeployContract(contractInterface: ethers.ContractInterface, bytecode: ethers.BytesLike):Promise<ethers.Contract>{
    return new ethers.ContractFactory(contractInterface, bytecode).deploy();
  }
      

export function getContractDeployed(
  address: string,
  abi: ethers.ContractInterface,
  signerOrProvider: ethers.Signer | ethers.providers.Provider 
 
): Promise<ethers.Contract>  {
  return new ethers.Contract(address, abi, signerOrProvider).deployed();
};
  


export function getConnectContract(
  address: string,
  abi: ethers.ContractInterface,
  signerOrProvider: ethers.Signer | ethers.providers.Provider ,
  addressOrName: string,
  network:string, 
  nodeProviderApiKey: string
): ethers.Contract {
  return new ethers.Contract(address, abi, signerOrProvider).connect(getInfuraProvider(network, nodeProviderApiKey));
};

export function AttachContractToAddress(
  address: string,
  abi: ethers.ContractInterface,
  signerOrProvider: ethers.Signer | ethers.providers.Provider ,
  addressOrName: string
 
):ethers.Contract {
  return new ethers.Contract(address, abi, signerOrProvider).attach(address);
};

export function getSignerForContract(
  address: string,
  abi: ethers.ContractInterface,
  signerOrProvider: ethers.Signer | ethers.providers.Provider ,
  addressOrName: string
 
):ethers.Signer {
  return new ethers.Contract(address, abi, signerOrProvider).attach(address).signer;
};

export function getProviderInfoForTheContract(
  address: string,
  abi: ethers.ContractInterface,
  signerOrProvider: ethers.Signer | ethers.providers.Provider ,
  addressOrName: string
 
):ethers.providers.Provider {
  return new ethers.Contract(address, abi, signerOrProvider).attach(address).provider;
};

export function getDeployedTransationInf(
  address: string,
  abi: ethers.ContractInterface,
  signerOrProvider: ethers.Signer | ethers.providers.Provider ,
  addressOrName: string
  
):ethers.providers.TransactionResponse {
  return new ethers.Contract(address, abi, signerOrProvider).attach(address).deployTransaction;
};


export function getContractEventWithListener(
  address: string,
  abi: ethers.ContractInterface,
  signerOrProvider: ethers.Signer | ethers.providers.Provider ,

  event: ethers.EventFilter | string, listener: ethers.providers.Listener
):ethers.Contract {
  return new ethers.Contract(address, abi, signerOrProvider).on(event,listener);
};

export function getContractEmmittedWithListener(
  address: string,
  abi: ethers.ContractInterface,
  signerOrProvider: ethers.Signer | ethers.providers.Provider ,

  emit: ethers.EventFilter | string, listener: ethers.providers.Listener
):ethers.Contract {
  return new ethers.Contract(address, abi, signerOrProvider).on(emit, listener);
};



export function getDeployedTransactionForContractFactory(contractInterface: ethers.ContractInterface, bytecode: ethers.BytesLike, ...args:Array<any>){
  return new ethers.ContractFactory(contractInterface, bytecode).getDeployTransaction(...args);
}
  

      


