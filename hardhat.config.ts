import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";
import "@typechain/hardhat";
import "xdeployer";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "hardhat-contract-sizer";
import "@tenderly/hardhat-tenderly";
import "hardhat-abi-exporter";

dotenv.config();

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

task(
  "balances",
  "Prints the list of accounts and their balances",
  async (args, hre) => {
    const accounts = await hre.ethers.getSigners();

    for (const account of accounts) {
      console.log(
        account.address +
          " " +
          (await hre.ethers.provider.getBalance(account.address))
      );
    }
  }
);

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    hardhat: {
      initialBaseFeePerGas: 0,
    },
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    rinkeby: {
      url: process.env.RINKEBY_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    kovan: {
      url: process.env.KOVAN_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    ropsten: {
      url: process.env.ROPSTEN_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    goerli: {
      url: process.env.GOERLI_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    mainnet: {
      url: process.env.MAIN_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    bscTestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545", // Publicly known RPC
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    bscMain: {
      url: "https://bsc-dataseed.binance.org", // Publicly known RPC
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    optimismTestnet: {
      url: process.env.OPTIMISM_TESTNET_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    optimismMain: {
      url: process.env.OPTIMISM_MAIN_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    arbitrumTestnet: {
      url: process.env.ARBITRUM_TESTNET_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    arbitrumMain: {
      url: process.env.ARBITRUM_MAIN_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    mumbai: {
      url: process.env.MUMBAI_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    polygon: {
      url: process.env.POLYGON_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    hecoTestnet: {
      url: "https://http-testnet.hecochain.com", // Publicly known RPC
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    hecoMain: {
      url: "https://http-mainnet.hecochain.com", // Publicly known RPC
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    fantomTestnet: {
      url: "https://rpc.testnet.fantom.network", // Publicly known RPC
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    fantomMain: {
      url: "https://rpc.ftm.tools", // Publicly known RPC
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    fuji: {
      url: "https://api.avax-test.network/ext/bc/C/rpc", // Publicly known RPC
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    avalanche: {
      url: "https://api.avax.network/ext/bc/C/rpc", // Publicly known RPC
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    sokol: {
      url: "https://sokol.poa.network", // Publicly known RPC
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    gnosis: {
      url: "https://rpc.xdaichain.com", // Publicly known RPC
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    moonbaseAlpha: {
      url: "https://rpc.api.moonbase.moonbeam.network", // Publicly known RPC
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    moonriver: {
      url: "https://rpc.moonriver.moonbeam.network", // Publicly known RPC
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    alfajores: {
      url: "https://alfajores-forno.celo-testnet.org", // Publicly known RPC
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    celo: {
      url: "https://forno.celo.org", // Publicly known RPC
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    auroraTestnet: {
      url: "https://testnet.aurora.dev", // Publicly known RPC
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    auroraMain: {
      url: "https://mainnet.aurora.dev", // Publicly known RPC
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  },
  xdeploy: {
    contract: "Greeter",
    constructorArgsPath: "./deploy-args.ts",
    salt: "WAGMI",
    signer: process.env.PRIVATE_KEY,
    networks: ["hardhat", "rinkeby", "kovan"],
    rpcUrls: ["hardhat", process.env.RINKEBY_URL, process.env.KOVAN_URL],
    gasLimit: 1.2 * 10 ** 6,
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  contractSizer: {
    alphaSort: true,
    runOnCompile: true,
    disambiguatePaths: false,
    strict: true,
    only: [],
    except: [],
  },
  abiExporter: {
    path: "./abis",
    runOnCompile: true,
    clear: true,
    flat: true,
    only: [],
    spacing: 2,
    pretty: true,
  },
  etherscan: {
    apiKey: {
      // For Rinkeby, Ropsten, Kovan, Goerli, Mainnet
      mainnet: process.env.ETHERSCAN_API_KEY,
      ropsten: process.env.ETHERSCAN_API_KEY,
      rinkeby: process.env.ETHERSCAN_API_KEY,
      goerli: process.env.ETHERSCAN_API_KEY,
      kovan: process.env.ETHERSCAN_API_KEY,
      // For BSC testnet & mainnet
      bsc: process.env.BSC_API_KEY,
      bscTestnet: process.env.BSC_API_KEY,
      // For Heco testnet & mainnet
      heco: process.env.HECO_API_KEY,
      hecoTestnet: process.env.HECO_API_KEY,
      // For Fantom testnet & mainnet
      opera: process.env.FANTOM_API_KEY,
      ftmTestnet: process.env.FANTOM_API_KEY,
      // For Optimism testnet & mainnet
      optimisticEthereum: process.env.OPTIMISM_API_KEY,
      optimisticKovan: process.env.OPTIMISM_API_KEY,
      // For Polygon testnet & mainnet
      polygon: process.env.POLYGON_API_KEY,
      polygonMumbai: process.env.POLYGON_API_KEY,
      // For Arbitrum testnet & mainnet
      arbitrumOne: process.env.ARBITRUM_API_KEY,
      arbitrumTestnet: process.env.ARBITRUM_API_KEY,
      // For Avalanche testnet & mainnet
      avalanche: process.env.AVALANCHE_API_KEY,
      avalancheFujiTestnet: process.env.AVALANCHE_API_KEY,
      // For Moonbeam testnet & mainnet
      moonriver: process.env.MOONBEAM_API_KEY,
      moonbaseAlpha: process.env.MOONBEAM_API_KEY,
      // xdai and sokol don't need an API key, but you still need
      // to specify one; any string placeholder will work
      xdai: "wagmi",
      sokol: "wagmi",
    },
  },
  tenderly: {
    project: "MyAwesomeUsername",
    username: "super-awesome-project",
  },
};

export default config;
