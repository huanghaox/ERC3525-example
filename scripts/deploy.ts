import { ethers } from "hardhat";

async function main() {

  const GettingStarted = await ethers.getContractFactory("ERC3525GettingStarted");
  const gettingStarted = await GettingStarted.deploy('0xD4dF42EbD1e5EF6826101B3Ae5e650C4827755B2');
  await gettingStarted.deployed();
 
  console.log(`GettingStarted deployed to ${gettingStarted.address}`);
}
 
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});