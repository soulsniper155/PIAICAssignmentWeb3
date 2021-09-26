var Tx = require('ethereumjs-tx').Transaction;
const Web3 = require('web3');
const web3 = new Web3("https://rinkeby.infura.io/v3/4b50f31332534b0f82c03a67607e0518");

const account1 = "0xd53D5E5deD11f04E0DCdB24ea643D98fd580104d";
const account2 = "0xbbFFCb9CaC6E0ebA0AFAE6041B7F85bfa95092CA";

const privateKey1 = Buffer.from('18079866f08745c2080026b768d739f03860baac8b44a74a8ef3266ef1cf7ebb', 'hex')
const privateKey2 = Buffer.from('0ecfb7f8b65d81452f8806358a35bcd7f5409456eae79a5e7a0051e6ab286e03', 'hex')

const SignTransaction = async() =>{
    
await web3.eth.getTransactionCount(account1,(err,txCount) =>{
    const txObject = {
        nonce:    web3.utils.toHex(txCount),
        to:       account2,
        value:    web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
        gasLimit: web3.utils.toHex(21000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
      }
const tx = new Tx(txObject, {"chain":"rinkeby"})
tx.sign(privateKey1)

const serializedTx = tx.serialize();
const raw = '0x' + serializedTx.toString('hex')

web3.eth.sendSignedTransaction(raw, (err,txHash)=>{
    console.log("Transcation Hash is: ",txHash)
})
} )}
SignTransaction()