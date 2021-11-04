pragma solidity 0.8.2;
// SPDX-License-Identifier: MIT
//import './UniswapV2Factory.sol';
//import './interfaces/IUniswapV2Factory.sol';
//import './UniswapV2Pair.sol';

import "hardhat/console.sol";







  // @dev base contract with private variables 

contract Incrementor {
 
  
  uint256 private y;
  uint256 private z;
  uint256 private x;
  
  
  address public incrementaddress = address(this);

  
  function incrementX(uint256 _x) external  returns(uint256) {
      x=_x;
     
   
    
    return(x);   
  }
 
  function incrementY(uint256 _y) external  returns (uint256) {
     y=_y;
    return(y);
  }
 
  function incrementZ(uint256 _z) external  returns (uint256) {
   
        z=_z;
    
    return(z);    
  }
}


contract Challenge is Incrementor  {
  
 
address   tokenowner = msg.sender;

 
  uint256 public y;
  uint256 public z;
  uint256 public x;
   constructor () {

   }
   Incrementor _inc = new Incrementor();
   
  address  Incrementoraddress = address(_inc); 
  
  address public factory;
  
  // @dev delegate incrementX to the Incrementor contract below
  // @param inc address to delegate increment call to
  
  function incrementX(address incaddress, uint256 _x) external returns(uint) {
   Incrementoraddress = incaddress;
   x=_x;
  // We pass in a delegate call to return a boolean value of success and a string of data
   
   bytes memory payload = abi.encodeWithSignature("incrementX(uint256)", x);
  
 
  (bool success, bytes memory returnData) = Incrementoraddress.delegatecall(payload);
   require(success);
 
     return(x);
  }
 
  // @dev delegate incrementY to the Incrementor contract below
  // @param inc address to delegate increment call to
  // Variable names just for comprehensive purpose
  
  function incrementY(address incaddress, uint _y) external returns(uint) {
    y= _y;
       Incrementoraddress = incaddress;
  // We pass in a delegate call to return a boolean value of success and a string of data
    (bool success, bytes memory data) = Incrementoraddress.delegatecall(
 
  // We encode the signature of the function
      abi.encodeWithSignature("incrementY(uint256)",y )
    );
    return(y);
  }
  

  // @dev delegate incrementZ to the Incrementor contract below
  // @param inc address to delegate increment call to

  function incrementZ(address incaddress, uint _z) external returns(uint returnz){
   z=_z;
   Incrementoraddress = incaddress;  
  
  // @dev We pass in a delegate call to return a boolean value of success and a string of data

    (bool success, bytes memory data) = Incrementoraddress.delegatecall(
  // @ dev We encode the signature of the function

      abi.encodeWithSignature("incrementZ(uint256)",z )
    );
    return(z);
  }
  

  // @dev determines if argument account is a contract or not
  // @param account address to evaluate
  // @return bool if account is contract or not
   // size of code on an address from the EVM returning an opcode   
  // assembly language for returning size of opcode  
  // if size is greater than 0 resolve contract
  // Need to pad size to 32
  function isContract(address account) external returns(bool) {
    bool trueorfalse;
    uint256 codeLength;

    assembly {codeLength := extcodesize(account)}
              if(codeLength == 0){
                trueorfalse = true;
                return(trueorfalse);

              }
              else{
                trueorfalse = false;
                return(trueorfalse);
              }
    } 
    
    function TestifContract(address account) external returns(uint256) {
    bool trueorfalse;
    uint256 codeLength;

    assembly {codeLength := extcodesize(account)}
              if(codeLength == 0){
                trueorfalse = true;
                return(codeLength);

              }
              else{
                trueorfalse = false;
                return(codeLength);
              }
    }




  // @dev converts address to uint256
  // @param account address to convert
  // @return uint256
  //from solidity 0.8.2 and above this method is used for typecasting
  function addressToUint256(address account) external pure returns (uint256) {
          uint256 num = 0;
           num =      uint256(uint160(address(account)));
          return(num);
 }
         



  // @dev converts uint256 to address
  // @param num uint256 number to convert
  // @return address
  // We return the value by abi.encoding address to byte
  // We then turn into an address to retrive address value
  function uint256ToAddress(uint256 num) public pure returns (address) {
              
       //  bytes32  bytenumber;
       uint _num = 0;
        _num = num;
             
        address addressnumber;
        
      //  uint integernum = 0;
      //  integernum = num;
        bytes memory addressbytes = abi.encodePacked(_num);
         addressnumber = bytesToAddress(addressbytes);

       
  // @dev  bytenumber = convertfromuinttobytes(num);
         
    return (addressnumber);
  }

  
  // @dev function set to change from uint to bytes32
function convertfromuinttobytes(uint256 n) public returns (bytes32) {
    return bytes32(n);
}

//@dev Function that allows you to convert an address into a payable address

    function _make_payable(address x) internal pure returns (address payable) {
        return payable(x);
    }


//@dev function for changing address to bytes memory
//@dev We use assembly language to turn into a sizeable array of bytes before we can operate with to address in future

function toBytes(address a) public pure returns (bytes memory b){
    assembly {
        let m := mload(0x40)
        a := and(a, 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF)
        mstore(add(m, 20), xor(0x140000000000000000000000000000000000000000, a))
        mstore(0x40, add(m, 52))
        b := m
   }
}

// @dev coverts from bytes to address, called in functions to help to typecast
 function bytesToAddress(bytes memory source) public pure returns(address) {
        address addr;
        assembly {
            
            addr := mload(add(source, 0x14))
        }
         return (addr);
    }

function isHuman(address addr) external returns(bool) {
    uint256 codeLength;

    assembly {codeLength := extcodesize(addr)}
    return (codeLength == 0 ? true : false);
  }

}



  


