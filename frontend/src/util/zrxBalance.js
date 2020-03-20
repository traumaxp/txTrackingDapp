import Web3 from 'web3'

// zrx
let tokenAddress = '0xe41d2489571d322189246dafa5ebde1f4699f498'

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

let zrxBalance = new Promise(function (resolve, reject) {
  // Check for injected web3 (mist/metamask)
  var web3 = new Web3(window.web3.currentProvider)
  resolve(
    web3.eth.getAccounts()
      .then(result => {
        return new Promise(function (resolve, reject) {
          let contract = new web3.eth.Contract(minABI, tokenAddress)
          // Start
          contract.methods.balanceOf(result[0]).call().then(zrxBalance => {
            contract.methods.decimals().call().then((decimals) => {
              zrxBalance = zrxBalance / (10 ** decimals)
              const result = Object.assign({}, zrxBalance, { zrxBalance })
              resolve(result)
            })
          })
        })
      })
  )
})

export default zrxBalance
