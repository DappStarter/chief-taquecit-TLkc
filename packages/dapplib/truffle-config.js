require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drive flock slush struggle cost shift protect gloom entry army gift'; 
let testAccounts = [
"0x515e24854c4d956c451b11339efcfad192af8ed9cf52eaa0f7d841145a14bdbc",
"0x5abc9c00e3986851e20f99a27cb7d581924ec94fffc62dcdd2a55c28d1549486",
"0x2f202159326b254396bae5ad03029e85ba08fd1a0bcfe7be52cdb4696dd3b18f",
"0x16cd9bde85add7b1f3dd731cc8ce52afe06cc12a0de5b42ef250516797da2927",
"0xa5c770bdca0da5ef80c40932879410cf0dcab91b11358e7274edcb05a7d909f5",
"0x34aefba9186de310e8f50135f65a2f2f3be87ccab9be7a6fc9e6a8bc9109129e",
"0x6a1cce6cdfdedfe3cdb14b051ce88b05e8250ae1b4ae814e9ff31b7073b6ad5d",
"0xeaeb57778aafda78018f149d37ef73e80c1b55e0cdecb8eafc440464ca6d3356",
"0x7d45fee9c6e05161b31e509b898f867804c7b466f34e469e096d463733afb8e9",
"0xaf9a7525d0d176095cd44cbae9ebe8314cfc646597ea5f7632111f0c6b909055"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

