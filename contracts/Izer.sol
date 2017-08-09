pragma solidity ^0.4.11;

contract Izer {

  address owner;
  mapping (address => bool) public verified;

  function Izer() {
    owner = msg.sender;
    verified[msg.sender] = true;
  }

  function isVerified(address _user) returns (bool success) {
    if( verified[_user] == true ) {
      return true;
    }
    return false;
  }

}
