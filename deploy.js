const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
    'coast brave ahead peanut guide dial toe session earth obscure work soul',
    'https://rinkeby.infura.io/v3/e18127b443c145158b66ec3fb6640283'
);

const web3 = new Web3(provider);

const deploy = async ()=>{

    const accounts = await web3.eth.getAccounts();
    console.log('account to be used is : ',accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode})
    .send({gas:'1000000',from: accounts[0]});

    console.log('Contract Deployed to : ',result.options.address);


};

deploy();