import "dotenv/config";
import { ethers } from "hardhat";
import { Signer } from "ethers";
import { getWallet } from "../utils/helpers";

import {HardhatRuntimeEnvironment} from 'hardhat/types'; 
import {DeployFunction} from 'hardhat-deploy/types';

// @dev Contract Factory and Contracts imported from typechain
import {
  Challenge,
  Challenge__factory,
  Incrementor,
  Incrementor__factory,
} from "../../solidity-challenge-main2/typechain";


// @dev dotenv for setting environmental keys
require("dotenv").config();


const ROPSTEN_NETWORK=process.env.ROPSTEN_NETWORK;
const ROPSTEN_API_KEY = process.env.ROPSTEN_API;
const PVTKEY = process.env.ROPSTEN_PRIVATE_KEY;
 
 


// @dev hardhat environment
const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) { // 部署函数把hardhat运行时作为参数
  const {deployments, getNamedAccounts} = hre; 
  const {deploy} = deployments; 

  const {deployer, tokenOwner} = await getNamedAccounts(); 

  await deploy('Challenge', { 
    from: deployer, 
 
  
    log: true, 
  });
};
export default func;
func.tags = ['Challenge']; 

