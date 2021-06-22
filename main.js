const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate("7f660fb0d0a500de2ece0f151c43aa1168b28d9144cfd489430818a636dba586");
const myWalletAddress = myKey.getPublic('hex');

const Metrona = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'address2', 10);
tx1.signTransaction(myKey);
Metrona.addTransaction(tx1);

console.log("\nStarting the miner...");
Metrona.minePendingTransactions(myWalletAddress);

console.log("\nBalance of miner is", Metrona.getBalanceOfAddress(myWalletAddress));

console.log('Blockchain valid?', Metrona.isChainValid() ? 'Yes' : 'No');