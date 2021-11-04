import { ethers } from "hardhat";
import { Signer, BigNumber, ContractFactory, Contract } from "ethers";
import {SignerWithAddress} from '@nomiclabs/hardhat-ethers/signers';
import { expect } from "chai";
import chai   from "chai";
import chaiaspromised from "chai-as-promised";
import { Wallet } from "ethers";

import assert from 'assert';
  // @dev hardhat runtime environment

import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

chai.use(require('chai-bignumber')());

// @dev importing custom utility functions  from helpers 
import {
  getInfuraProvider,
getInfuraListedAccounts,
getInfuraWebSocketProvider,
getInfuraApiKey,
getInfuraUrl,
getEtherscanProvider,
getEtherscanNetwork,
getEtherscanUrl,
getEtherscanTransactionReceipt,
getEtherscanPostUrl,
getEtherscanDetectedNetwork,
getEtherscanFetchedUrl,
getEtherscanHistory,
getAlchemyProvider,
getAlchemyWebSocketProvider,
getAlchemySigner,
getAlchemyListedAccounts,
getAlchemyTransaction,
getWallet,
getSignerForWallet,
PopulateWalletTransaction,
SignWalletTransaction,
signWalletMessage,
setWalletWithMnemonic,
getWalletBalanceWithMnemonic,
getWalletWithPrivateKey,
getWalletWithPublicKey,
ConnectToContract,
getContract,
DeployContract,
getContractDeployed,
getConnectContract,
AttachContractToAddress,
getSignerForContract,
getProviderInfoForTheContract,
getDeployedTransationInf,
getContractEventWithListener,
getContractEmmittedWithListener,
getDeployedTransactionForContractFactory,
getWalletForInfura
} from "../utils/helpers";
import { TransactionRequest } from "@ethersproject/abstract-provider";


// @dev hardhat runtime enviroment
const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments, getNamedAccounts} = hre;
  const {deploy} = deployments;

  const {deployer, tokenOwner} = await getNamedAccounts();
}
let transfertest;
let txhash = CUSTOM HASHES;
let contractaddress = CONTRACT ADDRESS;
let contractaddressstring: string = String(CONTRACT ADDRESS STRING);
let gas = 589509;

// @dev essential variables
// @dev includes contract factories, contracts, and various signing addresses

  let Token:ContractFactory;
  let hardhatToken:Contract;
  let owner:SignerWithAddress;
  let addr1:SignerWithAddress;
  let addr2:SignerWithAddress;
  let addrs:SignerWithAddress[];
  let Challenge: ContractFactory;
  let Incrementor: ContractFactory;
  let  hardhatChallenge: Contract;
  let   hardhatIncrementor:Contract;
  let RockPaperScissorshere:ContractFactory;
  let rockpaperscissorshere:Contract;
  let rockpaperaddress:string;
    let playeraddress:string;
  let amount:BigNumber;
  let gameid:BigNumber;
  let totalSupply:number;
  amount = BigNumber.from(13);
  playeraddress = "YOUR ADDRESS";
  gameid = BigNumber.from(3);
  totalSupply = 1000000;
  let ethereumwallet: Wallet;
  let walletaddress: string 


// @dev dotenv for picking environment keys
require("dotenv").config();
const DEV_ADDRESS=process.env.DEV_ADDRESS;



const  ROPSTEN_NETWORK = process.env.ROPSTEN_NETWORK;
const ROPSTEN_API = process.env.ROPSTEN_API;

const RINKEBY_NETWORKCODE  =process.env.RINKEBY_NETWORK;

const RINKEBY_API_KEYCODE =  process.env.RINKEBY_API_KEY;

const RINKEBYPRIVATEKEYCODE = process.env.PRIVATE_KEY;
const PREFIXEDPRIVATEKEY = process.env.PRIVATE_KEYWITHPREFIX;
const _RINKEBY_API = process.env.RINKEBY_API;
const RINKEBY_API_KEY= process.env.RINKEBY_API_KEY;
const RINKEBY_MNEUMONIC=process.env.RINKEBY_MNEUMONIC;




let txhash_chall = CUSTOM TRANSACTION HASH;
let contractaddress_chall = CONTRACT ADDRESS CHALLENGE;
let contractaddressstring_chall: string = String(CONTRACT ADDRESS STRING );
let gas_chall = 1163137;
let useraccount = "USER ACCOUNT";
let thechallengeaddress: string;
let theincrementoraddress:string;
 theincrementoraddress = "INCREMENT ADDRESS";
let one_chall: BigNumber;
one_chall  = BigNumber.from(1);
//CHAI


  let signers: Signer[],
    admin: Signer,
    adminAddress:string,
    challengeFactory: ContractFactory,
    challenge: Contract, 
    incrementorFactory: ContractFactory,
    incrementor: Contract;
    
 

  const nums: BigNumber[] = [1, 2, 3].map((num) => BigNumber.from(num)),
    weth: string = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    tokens: string[] = [
      "0x514910771AF9Ca656af840dff83E8264EcF986CA", // LINK
      "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984", // UNI
      "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599", // WBTC
      "0x6B175474E89094C44Da98b954EedeAC495271d0F", // DAI
      "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", // USDC
    ],
    tokensAsBigNumbers: BigNumber[] = [
      BigNumber.from("464057641162257223597913127019930606481545201354"),
      BigNumber.from("180374059643543449999388718682590567161426737540"),
      BigNumber.from("196268403159008932410419402999721616371951519129"),
      BigNumber.from("611382286831621467233887798921843936019654057231"),
      BigNumber.from("917551056842671309452305380979543736893630245704"),
    ],
    numsAsAddresses: string[] = [
      "0x0000000000000000000000000000000000000001",
      "0x0000000000000000000000000000000000000002",
      "0x0000000000000000000000000000000000000003",
    ],
    pairsCorrect: string[] = [
      "0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974",
      "0xd3d2e2692501a5c9ca623199d38826e513033a17",
      "0xbb2b8038a1640196fbe3e38816f3e67cba72d940",
      "0xa478c2975ab1ea89e8196811f51a7b7ade33eb11",
      "0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc",
      "0xae461ca67b15dc8dc81ce7615e0320da1a9ab8d5",
    ].map((pair) => ethers.utils.getAddress(pair));

describe("Token contract", function () {
  


  beforeEach(async function () {
    // @dev contract factory specifications 
    RockPaperScissorshere = await ethers.getContractFactory("RockPaperScissors");
    Token = await ethers.getContractFactory("Token");
    Challenge = await ethers.getContractFactory("Challenge");
    Incrementor = await ethers.getContractFactory("Incrementor");
 
    // @dev signers from ether.js
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

   
    // @dev wallet from infura
    // @params private key, network and api key from infura 
    ethereumwallet =  getWalletForInfura(String(RINKEBYPRIVATEKEYCODE),String(RINKEBY_NETWORKCODE),String(RINKEBY_API_KEY) ); 
    
     // @dev contracts to deploy with wallet address
    hardhatToken = await Token.deploy(ethereumwallet.address);
    hardhatChallenge = await Challenge.deploy();
    hardhatIncrementor = await Incrementor.deploy();
    rockpaperscissorshere = await   RockPaperScissorshere.deploy(ethereumwallet.address);
                                   
   
    rockpaperaddress = rockpaperscissorshere.address;
   

     
    signers = await ethers.getSigners();
    
  
       // @dev pick a signer 
    admin = signers[0];
    
    
    // get admin's address
    adminAddress = await admin.getAddress();
    hardhatToken.attach(ethereumwallet.address);

        // @dev get attach to pass wallet or signer to contract  constructor
        // @dev can also be used as contract owner 
    rockpaperscissorshere.attach(ethereumwallet.address);
    console.log("Wallet Address" + ethereumwallet.address);

    
      
      
      });
    
  // @dev testing of Token contract here
        
  describe("Deployment", function () {
    
// @dev testing of owners and supplies
    
    it("Should set the right owner", async function () {
     
      expect(await hardhatToken.owner()).to.equal(ethereumwallet.address);
      console.log(await hardhatToken.owner());
      console.log(await hardhatToken.balanceOf(ethereumwallet.address));
      console.log(await hardhatToken.totalSupply());
    });
        // @dev setting of total ssupply to owner, using expect and .eql instead of .equal for 
        // deeply equal tests
    it("Should assign the total supply of tokens to the owner", async function () {
                
       let _totalsupply = await hardhatToken.totalSupply();
       let _owner = await hardhatToken.balanceOf(ethereumwallet.address);
    
        expect(_owner).to.eql(_totalsupply);
    });
  });

  // @dev transfer of tokens and confirming of transaction using ether.js
        //@dev we use expect and .eql for  deeply equal tests
        //@we can use assert as well
  describe("Transactions", function () {
    it("Should transfer tokens between accounts", async function () {
     
   let transfertransaction =   await hardhatToken.connect(ethereumwallet).transfer(ethereumwallet.address,addr1.address,BigNumber.from(50));
    console.log(transfertransaction);

 let txobject= {
     from:ethereumwallet.address,
     to: transfertransaction.to,
     value:transfertransaction.value,
 
}  
 
 // @dev using sendTransaction to deploy txobject to the block
        //@dev we use expect and .eql for  deeply equal tests
        //@we can use assert as well
    let transactionsend = await ethereumwallet.sendTransaction(txobject);
    console.log(transactionsend);
   
    
    let addr1Balance = await hardhatToken.balanceOf(addr1.address);
    console.log(addr1Balance);
 
   expect(addr1Balance).to.eql(transfertransaction.value);
 
    
      });


 


// @dev testing for token transfer from transfer here
        //@dev we use expect and .eql for  deeply equal tests
        //@we can use assert as well
it("Should check if balance has been subtracted from to owner", async function () {
      let  initialOwnerBalance = await hardhatToken.balanceOf(ethereumwallet.address);
       
        console.log("initial owner balance" +initialOwnerBalance);
   
    let thebignumber: any = BigNumber.from(1);
    let thenumber:any  = initialOwnerBalance - thebignumber ;
    let toBigNumber =  BigNumber.from(thenumber);
    console.log("initial balance" + initialOwnerBalance);

    let thenumbersubtracteddirectly:any = initialOwnerBalance -1;
    console.log(initialOwnerBalance);
   
     console.log("the number " +thenumber);
     console.log("the number subtracted directly " + thenumbersubtracteddirectly);
   let transferthetokens =   await hardhatToken.transfer(ethereumwallet.address,addr1.address,BigNumber.from(1));
     
 let  balanceaftertransfer = await hardhatToken.balanceOf(ethereumwallet.address);
 
    
// @dev checking balance after
        //@dev we use expect and .eql for  deeply equal tests
        //@we can use assert as well
      console.log("balance after transfer" + balanceaftertransfer);
     let bigintbalanceaftertransefer = BigNumber.from(balanceaftertransfer);
        console.log("bigint number after transfer " + bigintbalanceaftertransefer);
         
    

     expect(balanceaftertransfer).to.eql(
      toBigNumber);
    });

// @dev checking updates of the other address after token transfer
        //@dev we use expect and .eql for  deeply equal tests
        //@we can use assert as well
    it("Should update balances after transfers", async function () {
      let  initialOwnerBalance = await hardhatToken.balanceOf(ethereumwallet.address);
       
        console.log("initial owner balance" +initialOwnerBalance);
    
    let thebignumber: any = BigNumber.from(1);
    let thenumber:any  = initialOwnerBalance - thebignumber ;
    let toBigNumber =  BigNumber.from(thenumber);
    console.log("initial balance" + initialOwnerBalance);

    let thenumbersubtracteddirectly:any = initialOwnerBalance -1;
    console.log(initialOwnerBalance);
   
     console.log("the number " +thenumber);
     console.log("the number subtracted directly " + thenumbersubtracteddirectly);
   let transferthetokens =   await hardhatToken.transfer(ethereumwallet.address,addr1.address,BigNumber.from(1));
     
 let  balanceaftertransfer = await hardhatToken.balanceOf(ethereumwallet.address);
 
     
      console.log("balance after transfer" + balanceaftertransfer);
     let bigintbalanceaftertransefer = BigNumber.from(balanceaftertransfer);
        console.log("bigint number after transfer " + bigintbalanceaftertransefer);
     
      
    

     expect(balanceaftertransfer).to.eql(
      toBigNumber);

      let address1balance = await hardhatToken.balanceOf(addr1.address);
      console.log("Address 1 balance " +address1balance);
    });
   

   describe("Challenge", () => {
  

  // @dev testing of typecasted values from Challenge Contract
        //@dev we use expect and .eql for  deeply equal tests
        //@we can use assert as well
 it("it checks the uint to address", async () => {
 let uint256toaddress = await hardhatChallenge.uint256ToAddress(nums[0]);
 console.log(uint256toaddress);
  let uint256toaddress1 = await hardhatChallenge.uint256ToAddress(nums[1]);
 console.log(uint256toaddress1);
  let uint256toaddress2 = await hardhatChallenge.uint256ToAddress(nums[2]);
 console.log(uint256toaddress2);
  
 let checkifcontract = await hardhatChallenge.isContract(theincrementoraddress);
   console.log(checkifcontract);
  
 let contractvaluecheck = checkifcontract.value;
  console.log(contractvaluecheck);


let contracttypecheck = checkifcontract.type;
  console.log(contracttypecheck);


 let contractcontractconfirms = checkifcontract.confirmations;
  console.log(contractcontractconfirms);


  let contractuseradddresscheck = await hardhatChallenge.isContract(useraccount);
  console.log(contractuseradddresscheck);

  let contractTesting = await hardhatChallenge.TestifContract(theincrementoraddress);
  console.log(contractTesting);
let thebytes = 123;
 let bytestoaddresstest = await hardhatChallenge.bytesToAddress(thebytes);
 console.log(bytestoaddresstest);
  
  });




  // @dev testing if value address passed resolves to a contract
        //@dev we use expect and .eql for  deeply equal tests
        //@we can use assert as well
it("determines if an Ethereum account is a contract", async () => {

  let contractvaluetrue = await hardhatChallenge.isContract(theincrementoraddress);
   
  let thevalueofthecontract = contractvaluetrue.value;
  let _isaBigNumber = thevalueofthecontract._isBigNumber; 
  let contractcheckbytype = contractvaluetrue.type;
  let contractcheckbyconfirmation = contractvaluetrue.confirmations;


   
    expect(_isaBigNumber).to.eql(true);
    expect(contractcheckbytype).to.eql(0);
    expect(contractcheckbyconfirmation).to.eql(1);
  
  });


  it("converts address to uint256", async () => {

     
    let tokenaddresstouint = await hardhatChallenge.addressToUint256(tokens[0]);

    console.log(tokenaddresstouint);
    let tokenaddresstoBigNum = BigNumber.from(tokenaddresstouint);
     console.log(tokenaddresstoBigNum);
    
    expect(tokenaddresstoBigNum).to.eql(
      tokensAsBigNumbers[0]
    );
    expect(await hardhatChallenge.addressToUint256(tokens[1])).to.eql(
      tokensAsBigNumbers[1]
    );
    expect(await hardhatChallenge.addressToUint256(tokens[2])).to.eql(
      tokensAsBigNumbers[2]
    );
    expect(await hardhatChallenge.addressToUint256(tokens[3])).to.eql(
      tokensAsBigNumbers[3]
    );
    expect(await hardhatChallenge.addressToUint256(tokens[4])).to.eql(
      tokensAsBigNumbers[4]
    );
  });

 // @dev finally testing rock paper contract, we could test few function due to time
  // @dev but the principal idea behind remains the same for all contracts
        //@dev we use expect and .eql for  deeply equal tests
        //@we can use assert as well

describe("RockPaperScissors Contract", function () {
  
   
    it("Multiple assertions", async function () {
     

      expect(await rockpaperscissorshere.totalSupply()).to.eql(BigNumber.from(totalSupply));
      
    assert.equal(await rockpaperscissorshere.totalSupply(),totalSupply, "Not the same");
    
     let thepayfee = await rockpaperscissorshere.attach(ethereumwallet.address).payfee( ethereumwallet.address, addr1.address, BigNumber.from(13)) 
    
        console.log("ethereum wallet " + ethereumwallet.address);
        console.log("ethereum wallethere " + thepayfee);
        const [success, data ] = thepayfee;
        console.log(thepayfee.success);
        console.log(thepayfee.data);
    
        
        
        expect(await rockpaperscissorshere.owner()).to.equal(ethereumwallet.address);
            
    });

})

});


  

  });
  
  });
