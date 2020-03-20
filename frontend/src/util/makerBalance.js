import Web3 from 'web3'

// maker
let tokenAddress = '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2'

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

let makerBalance = new Promise(function (resolve, reject) {
  // Check for injected web3 (mist/metamask)
  var web3 = new Web3(window.web3.currentProvider)
  resolve(
    web3.eth.getAccounts()
      .then(result => {
        return new Promise(function (resolve, reject) {
          let contract = new web3.eth.Contract(minABI, tokenAddress)
          // Start
          contract.methods.balanceOf(result[0]).call().then(makerBalance => {
            contract.methods.decimals().call().then((decimals) => {
              makerBalance = makerBalance / (10 ** decimals)
              const result = Object.assign({}, makerBalance, { makerBalance })
              resolve(result)
            })
          })
        })
      })
  )
})

export default makerBalance
