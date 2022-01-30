import { ethers } from "hardhat";

async function main() {
  const Contract = await ethers.getContractFactory("Greeter");
  const contract = await Contract.deploy("Hello, Hardhat!");

  await contract.deployed();

  console.log("Greeter deployed to:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
