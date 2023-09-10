import {Web3} from "web3";

const web3=new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));


const connectToBlockchain=async()=>{
    const balanceWie=await web3.eth.getBalance("0x20190abaDB540c9b552AFb44Fe2D790814B52729")
    console.log("Balance in Wei: " + balanceWie)
    // const block=await web3.eth.getBlock("0x20190abaDB540c9b552AFb44Fe2D790814B52729")
    // It returns the total number of accounts on the ethereum blockchain.
     web3.eth.getAccounts().then((res)=>{
        console.log(res)
     })

    // converting the balance from wei to eth because getBalance() returns the balance in wei.
    // const balanceEth=web3.utils.fromWei(balanceWie,"ether")
    // console.log("Balance in eth: " + balanceEth)
}
connectToBlockchain()