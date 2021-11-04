import {HardhatUserConfig} from "hardhat/types";
import accounts from "./test/Accounts";
import { ethers } from "hardhat";
import dotenv from 'dotenv';
import {Signer} from 'ethers';

import "@nomiclabs/hardhat-ethers"

import "solidity-coverage";
import "hardhat-gas-reporter";
import "hardhat-deploy";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-etherscan";
dotenv.config()
//let signers;
//let  signer;
//async ()=> {
//signers =  await ethers.getSigners().g;
//signer = signers[0];
 


 
const PROJECTSECRET = process.env.PROJECTSECRET;

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: {
    version: "0.8.2",
    settings: {
      optimizer: {
        enabled: false
      }
    }
  },
  paths: {
    sources: "./contracts",
    artifacts: "./artifacts",
    tests: "./test",
    cache: "./cache",
    deploy: "./scripts"
  },
  mocha: {
    timeout: 20000
  },
  networks: {
    hardhat: {
      loggingEnabled: false,
      live: false,
      accounts: accounts,
       gas: 3000000,
      gasPrice: 3000000,
      gasMultiplier: 1.5
    },
   
    coverage: {
      url: 'http://127.0.0.1:5458'
    },
    localhost: {
      url: 'http://127.0.0.1:8545',
      live: true,
      loggingEnabled: true,
     gas: 3000000,
      gasPrice: 3000000,
      gasMultiplier: 1.5
    },
     goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts: {
        mnemonic: `${process.env.MNEMONIC}`
      },
      chainId: 5,
      loggingEnabled: true,
      gas: 3000000,
      gasPrice: 3000000,
      gasMultiplier: 1.5
    },
    rinkeby: {
      live: true,
      saveDeployments: true,
      tags: ["staging"],
       chainId: 4,
      url: `https://rinkeby.infura.io/v3/${process.env.RINKEBY_API_KEY}`,
    //  url: `https://rinkeby.infura.io/v3/`,
     
     /* accounts: {
         privatekey:   [RU], 
        mnemonic: `${process.env.RINKEBY_MNEUMONIC}`
    },*/
     //  accounts: [`0x${process.env.PRIVATE_KEY}`],
     accounts: {
        mnemonic: `${process.env.RINKEBY_MNEUMONIC}`
      },
       gas: 3000000,
      gasPrice: 3000000,
      gasMultiplier: 1.5
  },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts: {
        mnemonic: `${process.env.MAINNET_MNEMONIC}`
      }
    }
  },
  gasReporter: {
  //  coinmarketcap: process.env.COINMARKETCAP_API_KEY,
    enabled: !!(process.env.REPORT_GAS && process.env.REPORT_GAS != "false"),
  },
 
  typechain: {
    outDir: "typechain",
    target: "ethers-v5"
  },
  namedAccounts: {
    deployer: {
      default: 0,
      6: 0,
      1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
      4: String(process.env.DEV_ADDRESS), // but for rinkeby it will be a specific address
      "goerli": 'YOUR ADDRESS',
       //it can also specify a specific netwotk name (specified in hardhat.config.js)
    },
    tokenowner: String (process.env.DEV_ADDRESS)
  },

   etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: process.env.ETHERSCAN_API_KEY
  }
};
export default config;

