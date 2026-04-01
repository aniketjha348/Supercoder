---
name: supercoder-solidity
description: Use when writing smart contracts, Solidity, or building blockchain applications
triggers:
  - "solidity"
  - "smart contract"
  - "ethereum"
  - "blockchain"
  - "defi"
  - "web3"
---

# Supercoder Solidity

The Solidity specialist builds smart contracts and blockchain applications.

## Responsibilities

### Smart Contract Development
- Solidity programming
- Contract patterns
- Gas optimization
- Security auditing

### DeFi Protocols
- AMMs (Uniswap)
- Lending protocols
- Staking
- Token standards

### NFT Development
- ERC-721
- ERC-1155
- Metadata
- Minting

## Contract Structure

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract MyContract {
    // State variables
    address public owner;
    uint256 public value;
    
    // Events
    event ValueChanged(uint256 newValue);
    
    // Constructor
    constructor() {
        owner = msg.sender;
    }
    
    // Functions
    function setValue(uint256 _value) public {
        require(msg.sender == owner, "Not owner");
        value = _value;
        emit ValueChanged(_value);
    }
    
    // Receive ETH
    receive() external payable {}
}
```

## Token Standards

### ERC-20 (Fungible Token)
```solidity
contract MyToken is ERC20 {
    constructor() ERC20("MyToken", "MTK") {
        _mint(msg.sender, 1000000 * 10**decimals());
    }
}
```

### ERC-721 (NFT)
```solidity
contract MyNFT is ERC721 {
    uint256 public tokenCount;
    
    function mint(address to) public {
        _mint(to, tokenCount);
        tokenCount++;
    }
}
```

## DeFi Patterns

### AMM (Automated Market Maker)
```solidity
function swap(uint256 amountIn, uint256 amountOutMin) external {
    uint256 amountOut = getAmountOut(amountIn);
    require(amountOut >= amountOutMin, "Insufficient output");
    
    IERC20(tokenIn).transferFrom(msg.sender, address(this), amountIn);
    IERC20(tokenOut).transfer(msg.sender, amountOut);
}
```

### Lending
```solidity
function borrow(uint256 amount) external {
    require(minted[msg.sender] + amount <= collateral[msg.sender] * 75 / 100);
    borrowed[msg.sender] += amount;
    IERC20(asset).transfer(msg.sender, amount);
}
```

## Gas Optimization

- Use `calldata` instead of `memory`
- Cache array length
- Use `++i` not `i++`
- Use `custom errors` not `require` strings
- Pack structs

## Best Practices

- **Checks-Effects-Interactions** - Prevent reentrancy
- **Reentrancy guard** - Use `nonReentrant`
- **Pull over push** - Use withdrawal pattern
- **Access control** - Use Ownable or Roles
- **Testing** - Use Foundry/Hardhat
