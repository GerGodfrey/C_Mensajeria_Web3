
require("@nomicfoundation/hardhat-toolbox");


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
    solidity: "0.8.17",
    networks: {
      goerli: {
        url: "https://small-powerful-fire.ethereum-goerli.discover.quiknode.pro/9c90470d1b913f54ab59ba198a206e07173fa507/",
        accounts: ["5cf66d667e7cd9ac569ca06455f80985146adfffd97502d3f5b4e686e20a20bb"]
      },
    },
};