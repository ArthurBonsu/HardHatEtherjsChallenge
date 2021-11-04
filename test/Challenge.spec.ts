import { ethers } from "hardhat";
import { Signer, BigNumber } from "ethers";
import { expect } from "chai";
import { Wallet } from "ethers";
import {getInfuraProvider } from "../utils/helpers";
import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
import {
  Challenge,
  Challenge__factory,
  Incrementor,
  Incrementor__factory,
} from "../../solidity-challenge-main2/typechain";



const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments, getNamedAccounts} = hre;
  const {deploy} = deployments;

  const {deployer, tokenOwner} = await getNamedAccounts();

const  ROPSTEN_NETWORK = process.env.ROPSTEN_NETWORK;
const ROPSTEN_API = process.env.ROPSTEN_API;
let myprovider  = new ethers.providers.InfuraProvider(String(ROPSTEN_NETWORK),String(ROPSTEN_API) );

let provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');




let txhash = YOUR HASH
let contractaddress = YOUR CONTRACTADDRESS
let contractaddressstring: string = String(YOUR CONTRACT ADDRESS AS STRING);
let gas = 1163137;
let useraccount = "USER ACCOUNT ADDRESS";
let thechallengeaddress: string;
let theincrementoraddress:string;
 theincrementoraddress = "INCREMENT CONTRACT ADDRESS";
let one: BigNumber;
one  = BigNumber.from(1);



  let signers: Signer[],
    admin: Signer,
    adminAddress:string,
    challengeFactory: Challenge__factory,
    challenge: any, 
    incrementorFactory: Incrementor__factory,
    incrementor: Incrementor;
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

  beforeEach(async () => {
    // @dev signers from ether.js normally VoidSigners, you could work with hardhat node or any network

    signers = await ethers.getSigners();
    
  
    // @dev picks one of the signers, the first index
    admin = signers[0];
  
    adminAddress = await admin.getAddress();
    

     // @dev destructuring for contract factory
    [challengeFactory, incrementorFactory] = await Promise.all([
      ethers.getContractFactory(
        "Challenge",
        admin
      ) as Promise<Challenge__factory>,
      ethers.getContractFactory(
        "Incrementor",
        admin
      ) as Promise<Incrementor__factory>,
    ]);

     // @dev destructuring for contract and deployment
    [challenge, incrementor] = await Promise.all([
      challengeFactory.deploy(),
      incrementorFactory.deploy(),
    ]);
 // @dev picks up contract address
     thechallengeaddress = challenge.address;
     theincrementoraddress = incrementor.address;

  });   
describe("Challenge", () => {
 // @dev testing challenge functions
  it("delegates incrementing of storage variables", async () => {
    // increment x
    (await challenge.incrementX(theincrementoraddress,one).wait(6));
    expect(await challenge.x()).to.eql(one);
    // increment y
    (await challenge.incrementY(theincrementoraddress,one).wait(6));
    expect(await challenge.y()).to.eql(one);
    // increment z
    (await challenge.incrementZ(theincrementoraddress,one).wait(6));
    expect(await challenge.z()).to.eql(one);
  });

  

// @dev testing if it is a contract
  it("determines if an Ethereum account is a contract", async () => {
    expect(await challenge.isContract(theincrementoraddress)).to.be.true;
    expect(await challenge.isContract(useraccount)).to.be.false;
  });

  // @dev testing typecasting address to uint256
  it("converts address to uint256", async () => {
    expect(await challenge.addressToUint256(tokens[0])).to.eql(
      tokensAsBigNumbers[0]
    );
    expect(await challenge.addressToUint256(tokens[1])).to.eql(
      tokensAsBigNumbers[1]
    );
    expect(await challenge.addressToUint256(tokens[2])).to.eql(
      tokensAsBigNumbers[2]
    );
    expect(await challenge.addressToUint256(tokens[3])).to.eql(
      tokensAsBigNumbers[3]
    );
    expect(await challenge.addressToUint256(tokens[4])).to.eql(
      tokensAsBigNumbers[4]
    );
  });

    // @dev testing typecasting uint256 to address
  it("converts uint256 to address", async () => {
    expect(await challenge.uint256ToAddress(nums[0])).to.eql(numsAsAddresses[0]);
    expect(await challenge.uint256ToAddress(nums[1])).to.eql(numsAsAddresses[1]);
    expect(await challenge.uint256ToAddress(nums[2])).to.eql(numsAsAddresses[2]);
  });

})


};
