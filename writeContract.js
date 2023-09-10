import {Web3} from "web3";
import {ABI} from './abi.js'

const web3=new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));

// When we are performing any write operations on a smart contract, then we use send() method and send() takes the address of the account which is performing the write operation.

const writeContract=async()=>{
    const ContractAddress="0x8D043cB49C734C396c370DF62693DEadd6709Ffe"
    const instanceOfContract=new web3.eth.Contract(ABI,ContractAddress)
    await instanceOfContract.methods.writeStateVar(20).send({
        from:"0x78D5F86a19a35F6B8e50f08d23CFb499337EA806"
    });
   
    


}
writeContract()