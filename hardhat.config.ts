import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from 'dotenv';
dotenv.config()
const privateKey = process.env.PRIVATE_KEY;
const providerUrl = process.env.ALCHEM_KEY;
 
const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url:process.env.SEPOLIA_URL || `https://sepolia.infura.io/v3/${process.env.INFURA_KEY}`,
      accounts:process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  }
};
 
export default config;