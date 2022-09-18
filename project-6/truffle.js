const HDWalletProvider = require("@truffle/hdwallet-provider");

const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();
const apiKey = fs.readFileSync(".apiKey").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/"+apiKey)
      },
      network_id: 4,
      gas: 5500000,
      gasprice: 20000000000,
    }
  },
  compilers: {
    solc: {
      version: "^0.4.24"
    }
  }
};