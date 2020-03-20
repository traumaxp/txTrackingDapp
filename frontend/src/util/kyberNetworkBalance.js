import Web3 from 'web3'

// knc
let tokenAddress = '0x0f5d2fb29fb7d3cfee444a200298f468908cc942'

let minABI = [
  {
    constant: true,
    inputs: [{ name: '_owner', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', type: 'uint256' }],
    type: 'function'
  },
  // decimals
  {
    constant: true,
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', type: 'uint8' }],
    type: 'function'
  }
]

// // Get ERC20 Token contract instance

// // Call balanceOf function

let kncBalance = new Promise(function (resolve, reject) {
  // Check for injected web3 (mist/metamask)
  var web3 = new Web3(window.web3.currentProvider)
  resolve(
    web3.eth.getAccounts()
      .then(result => {
        return new Promise(function (resolve, reject) {
          let contract = new web3.eth.Contract(minABI, tokenAddress)
          // Start
          contract.methods.balanceOf(result[0]).call().then(kncBalance => {
            contract.methods.decimals().call().then((decimals) => {
              kncBalance = kncBalance / (10 ** decimals)
              const result = Object.assign({}, kncBalance, { kncBalance })
              resolve(result)
            })
          })
        })
      })
  )
})

export default kncBalance
