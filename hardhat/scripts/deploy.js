const { ethers } = require("hardhat");

async function main() {
  const whitelistedContract = await ethers.getContractFactory("Whitelist");
  const deployedContract = await whitelistedContract.deploy(10);
  await deployedContract.deployed();

  console.log("Whitelisted Address:", deployedContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
