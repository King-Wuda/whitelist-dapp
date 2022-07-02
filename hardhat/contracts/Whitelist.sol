//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Whitelist {
    uint8 public maxWhitelistedAddresses;
    uint8 public numAddressesWhitelisted;

    mapping(address => bool) public whitelistedAddress;

    constructor(uint8 _maxwhitelistedAddress) {
        maxWhitelistedAddresses = _maxwhitelistedAddress;
    }

    function addAddressToWhitelist() public {
        require(
            !whitelistedAddress[msg.sender],
            "Address has already been whitelisted"
        );
        require(
            numAddressesWhitelisted < maxWhitelistedAddresses,
            "No more spaces available"
        );
        whitelistedAddress[msg.sender] = true;
        numAddressesWhitelisted += 1;
    }
}
