import Web3 from 'web3'

// bat
let tokenAddress = '0x0d8775f648430679a709e98d2b0cb6250d2887ef'

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

let batBalance = new Promise(function (resolve, reject) {
  // Check for injected web3 (mist/metamask)
  var web3 = new Web3(window.web3.currentProvider)
  resolve(
    web3.eth.getAccounts()
      .then(result => {
        return new Promise(function (resolve, reject) {
          let contract = new web3.eth.Contract(minABI, tokenAddress)
          // Start
          contract.methods.balanceOf(result[0]).call().then(batBalance => {
            contract.methods.decimals().call().then((decimals) => {
              batBalance = batBalance / (10 ** decimals)
              const result = Object.assign({}, batBalance, { batBalance })
              resolve(result)
            })
          })
        })
      })
  )
})

export default batBalance
