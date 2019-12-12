import Web3 from 'web3'

/*
* 1. Check for injected web3 (mist/metamask)
* 2. If metamask/mist create a new web3 instance and pass on result
* 3. Get networkId - Now we can check the user is connected to the right network to use our dApp
* 4. Get user account from metamask
* 5. Get user balance
*/

function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
let sendEtherPromise = new Promise(function (resolve, reject) {
    var web3 = new Web3(window.web3.currentProvider)
    return web3.eth.sendTransaction({
      from: '0xB74fc3B69f626226f7F1c53D9D6D340AC291d481',
      to: '0x1889ef49cdbaad420eb4d6f04066ca4093088bbd',
      value: 10017897970 // 10017897970
    })
  })

export default sendEtherPromise
