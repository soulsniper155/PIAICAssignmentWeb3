// const { copyFileSync } = require("fs");
const  Web3 = require("web3");

let rpcUrl = "https://rinkeby.infura.io/v3/4b50f31332534b0f82c03a67607e0518";

const web3 = new Web3(rpcUrl);

const Account1 = "0xd53D5E5deD11f04E0DCdB24ea643D98fd580104d";
const GetBalance = async() =>{
   await web3.eth.getBalance(Account1,(err , wie) =>{
        console.log("Balance In wie" , wie);
        balance = web3.utils.fromWei(wie , 'ether') 
        console.log( "Balance in Ether", balance)
    })
    
}

GetBalance()
