require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glimpse flame traffic black deliver remain mistake inner argue surge gather'; 
let testAccounts = [
"0x4df1eac77042fd76c07cc088e70d4c0b1c243157bff679bd38bf0902202e858f",
"0x09bffa11d1fd0d5139d3055bbd86c5c70408455d7ce27346ad74cf4fe4731103",
"0x31f54dc8b5c79d5a5807d3a31fd3c59f4009a8bf0134aae8810e1814ada105c3",
"0x791bc49b8c01321cccf6680f02a59e9dfe62531ee1fc48cd856d6ff7f17838e7",
"0xb390bc2bc0623ef7bc6ae93846b54977c1ea5132fc249b3994b90adf209cab77",
"0x83e30ad0acc1bf2240a6f86f76401e5eabecca86f4000c864c5c2c4622eb676b",
"0xe4f848b68f173df49466796ae78cce59c64828fcafa6e6715ecec41f4551b4eb",
"0x6327525bff56dc193a3ee511f298e54746fac915421ed29e74a404371e0167b7",
"0x9887c9fd6647565ccf3d5e32c160eac753e8f810b9107d647d30cd5b7bbc23fd",
"0x91f5c207cd98617c80623b1c8c82d481f97ff8d33e4096464fbee51ba57809be"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
