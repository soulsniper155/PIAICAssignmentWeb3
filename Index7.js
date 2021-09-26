const { BADFLAGS } = require("dns");
var Web3 = require("web3");
const web3 = new Web3("https://rinkeby.infura.io/v3/4b50f31332534b0f82c03a67607e0518");
const GetBlockDetial = async () => {
    await web3.eth.getBlockNumber((err, BlockNumber) => {
        console.log(BlockNumber)
    })

    await web3.eth.getBlock('latest', (err, BlockNumber) => {
        console.log(BlockNumber)
    })

    // Get the list of first 10 Blocks

    await web3.eth.getBlockNumber('latest', (err, block) => {
        for (i = 0; i < 10; i++) {
            web3.eth.getBlock(latest - i).then(console.log)
            // web3.eth.getBlock(block - i, (err, block) => {
            //     console.log(block);
            // })
        }
    })
    // get transaction from specific block
    const hash = '0x66b3fd79a49dafe44507763e9b6739aa0810de2c15590ac22b5e2f0a3f502073'
   await web3.eth.getTransactionFromBlock(hash, 2).then(console.log)
}

GetBlockDetial()

