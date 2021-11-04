import "dotenv/config";
import { ethers } from "hardhat";
import { Signer } from "ethers";
import { getWallet } from "../utils/helpers";

import {HardhatRuntimeEnvironment} from 'hardhat/types'; 
import {DeployFunction} from 'hardhat-deploy/types'; 
import hre from "hardhat";
import "@nomiclabs/hardhat-etherscan";
// @dev Contract Factory and Contracts imported from typechain
import {
  Challenge,
  Challenge__factory,
  Incrementor,
  Incrementor__factory,
} from "../../solidity-challenge-main2/typechain";

import "@nomiclabs/hardhat-etherscan";


// @dev dotenv for setting environmental keys
require("dotenv").config();
const DEV_ADDRESS=process.env.DEV_ADDRESS;
const RINKEBY_API_KEY = process.env.RINKEBY_API_KEY;
const RINKEBY_MNEUMONIC = process.env.RINKEBY_MNEUMONIC;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const RINKEBY_NETWORK = process.env.RINKEBY_NETWORK;
const RINKEBY_API = process.env.RINKEBY_API;
 
 

// @dev hardhat environment
const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) { // 部署函数把hardhat运行时作为参数
  const {deployments, getNamedAccounts,getChainId} = hre; 
  const {deploy} = deployments; 

  const {deployer, tokenOwner} = await getNamedAccounts();

// @dev ether.js signer for deployment to network, could be local or a necessary provider

 const signer = await ethers.getSigner("YOUR ADDRESS");
 await deploy('Challenge', { 
    from: deployer,
   
    log: true, 
      });
 

};


export default func;
func.tags = ['Challenge']; 

