import Web3 from 'web3'

/*
* 1. Check for injected web3 (mist/metamask)
* 2. If metamask/mist create a new web3 instance and pass on result
* 3. Get networkId - Now we can check the user is connected to the right network to use our dApp
* 4. Get user account from metamask
* 5. Get user balance
*/

let getWeb3 = new Promise(function (resolve, reject) {
  // Check for injected web3 (mist/metamask)
  var web3js = window.web3
  window.ethereum.enable()
  if (typeof web3js !== 'undefined') {
    var web3 = new Web3(web3js.currentProvider)
    console.log('***WEB3.VERSION IS : ' + web3.version + '***')
    resolve({
      injectedWeb3: window.ethereum.isMetaMask,
      web3 () {
        return web3
      }
    })
  } else {
    // web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545')) GANACHE FALLBACK
    reject(new Error('Unable to connect to Metamask'))
  }
})
// .then(result => {
//   return new Promise(function (resolve, reject) {
//     const daiContract = web3.eth.Contract(contract_abi, '0x6b175474e89094c44da98b954eedeac495271d0f');
//     daiContract.methods.getName().call();
//     result.web3().eth.getBlockNumber((err, latestBlock) => { // DAI
//       if (err) {
//         // If we can't find a networkId keep result the same and reject the promise
//         reject(new Error('Unable to retrieve Dai Balance ID'))
//       } else {
//         // Assign the networkId property to our result and resolve promise
//         result = Object.assign({}, result, { balanceDai })
//         resolve(result)
//       }
//     })
//   })
// })

export default getWeb3
