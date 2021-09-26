var Web3 = require("web3");
const web3 = new Web3("https://rinkeby.infura.io/v3/4b50f31332534b0f82c03a67607e0518");

const ContractIntraction = async () => {

    await web3.eth.getGasPrice((err, price) => {
        console.log(web3.utils.fromWei(price, 'ether'))
    })
    console.log(web3.utils.keccak256('PIAIC Assignment'))
    console.log(web3.utils.sha3("PIAIC Assignment"))
}
ContractIntraction()