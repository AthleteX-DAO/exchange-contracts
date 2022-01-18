require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "matic",
  solidity: {
    compilers: [
      {
        version: "0.5.15",
      },
      {
        version: "0.6.6",
        settings: {},
      },
    ],
  },
  networks: {
    matic: {
      url: "https://polygon-rpc.com",
      accounts: ["67ed1c4bb3301ad705c8f57b8a6894b470a971c790c81c238dbac8001c5f9236"],
    },
    ganache: {
      url: "127.0.0.1:7545",
    }
  },
  etherscan: {
    apiKey: "KSB2PD59D5D1IZQ4HY8AG72TR3NQ4XCIPS",
  },
};
