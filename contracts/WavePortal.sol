// SPDX-License-Identifier: UNLICENSED
pragma solidity  ^0.8.17;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;

    constructor(){
        console.log("Esto es un SC");
    }

    function wave() public {
        totalWaves += 1;
        // msg.sender = Wallet address of the person who called the function
        console.log("%s has waved!", msg.sender);
    }

    function getTotalWaves() public view returns (uint256){
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }
}