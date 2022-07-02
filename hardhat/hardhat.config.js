require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL;

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
