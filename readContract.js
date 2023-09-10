import {Web3} from "web3";
import {ABI} from './abi.js'

const web3=new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
// As we know that if we want to communicate with a smart contract which is deployed on the ethereum blockchain then we need the ABI (Abstract Binary Interface) of the contract.

const readcontract=async()=>{
    const ContractAddress="0x8D043cB49C734C396c370DF62693DEadd6709Ffe"
    const instanceOfContract=new web3.eth.Contract(ABI,ContractAddress)
    // call(): we noly use call() when we are reading the state variable or not performing any write operations
    const num=await instanceOfContract.methods.getStateVar().call()
    console.log(num.toString())


}
readcontract()