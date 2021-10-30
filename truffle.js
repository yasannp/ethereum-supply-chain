require('dotenv').config();
import HDWalletProvider from 'truffle-hdwallet-provider';
var infuraUrl = 'https://rinkeby.infura.io/v3/' + process.env.INFURA_API_KEY;

export const networks = {
  development: {
    host: "127.0.0.1",
    port: 8545,
    network_id: "*" // Match any network id
  },
  rinkeby: {
    provider: function () {
      return new HDWalletProvider(process.env.MNEMONIC, infuraUrl);
    },
    network_id: 4,
    gas: 4500000,
    gasPrice: 10000000000,
  }
};
export const compilers = {
  solc: {
    version: "0.4.24",
    docker: false
  }
};