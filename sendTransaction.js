import Web3 from 'web3'
// This below line is for connecting to the blcokchain. 
// here i am connecting to the Ganache blcokchain so i have provided it's url.
const web3=new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"))
// Note : here we can't make transactions in ether because transaction is done in wei. that's why i am converting ether to wei.

const sendEth=async()=>{
     const Weibalance=web3.utils.toWei("9","ether")
    await web3.eth.sendTransaction({
        from:"0x20190abaDB540c9b552AFb44Fe2D790814B52729",
        to:"0xe2D8e340A9186b4024a5128dBBB7fB8F432d643f",
        value:Weibalance
    })
    console.log("Transaction successful")
}
// sendEth()