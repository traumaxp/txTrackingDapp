<template>
  <div class="q-pa-md row items-start q-gutter-md flex flex-center">
    <q-card class="my-card">
      <q-card-section>
        <div class="row">
          <div class="col text-center">
            <p
              v-if="isInjected"
              id="has-metamask"
            >
              <i
                aria-hidden="true"
                class="fa fa-check"
              ></i> Metamask installed
            </p>
            <div class="text-h6">Network: {{ network }}</div>
          </div>
          <q-separator vertical />
          <div class="col text-center text-h6">
            <div>ETHEREUM INFOS</div>
            <div class="text-body1">LatestBlock: {{lastestBlock}}</div>
          </div>
        </div>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <p class="text-body1">Account: {{ account }}</p>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <p
          v-if="balance !== 0"
          class="text-body1"
        >Balance: {{ balance }} Ether</p>
        <p
          v-if="daiBalance !== 0"
          class="text-body1"
        >Balance: {{ daiBalance }} DAI</p>
        <p
          v-if="manaBalance !== 0"
          class="text-body1"
        >Balance: {{ manaBalance }} MANA</p>
        <p
          v-if="tetherBalance !== 0"
          class="text-body1"
        >Balance: {{ tetherBalance }} USDT</p>
        <p
          v-if="usdcBalance !== 0"
          class="text-body1"
        >Balance: {{ usdcBalance }} USDC</p>
        <p
          v-if="paxosBalance !== 0"
          class="text-body1"
        >Balance: {{ paxosBalance }} PAX</p>
        <p
          v-if="makerBalance !== 0"
          class="text-body1"
        >Balance: {{ makerBalance }} MKR</p>
        <p
          v-if="batBalance !== 0"
          class="text-body1"
        >Balance: {{ batBalance }} BAT</p>
        <p
          v-if=" zrxBalance!== 0"
          class="text-body1"
        >Balance: {{ zrxBalance }} ZRX</p>
        <p
          v-if="saiBalance !== 0"
          class="text-body1"
        >Balance: {{ saiBalance }} SAI</p>
        <p
          v-if="kncBalance !== 0"
          class="text-body1"
        >Balance: {{ kncBalance }} KNC</p>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
import { NETWORKS } from '../util/constants/networks'
import { mapState } from 'vuex'
export default {
  name: 'hello-metamask',
  data: () => ({}),
  computed: mapState({
    isInjected: state => state.web3.isInjected,
    network: state => NETWORKS[state.web3.networkId],
    account: state => state.web3.account,
    balance: state => state.web3.balance,
    ethBalance: state => {
      if (state.web3.web3Instance !== null) {
        return state.web3.web3Instance().fromWei(state.web3.balance, 'ether')
      }
    },
    lastestBlock: state => state.web3.latestBlock,
    daiBalance: state => {
      if (state.web3.daiBalance === 2) {
        return state.web3.daiBalance
      }
    },
    manaBalance: state => state.web3.manaBalance,
    tetherBalance: state => state.web3.tetherBalance,
    usdcBalance: state => state.web3.usdcBalance,
    paxosBalance: state => state.web3.paxosBalance,
    makerBalance: state => state.web3.makerBalance,
    batBalance: state => state.web3.batBalance,
    zrxBalance: state => state.web3.zrxBalance,
    saiBalance: state => state.web3.saiBalance,
    kncBalance: state => state.web3.kncBalance

  })
}
</script>

<style scoped>
.q-card {
  height: 350px;
}
.metamask-info {
  text-align: center;
}
#has-metamask {
  color: green;
}
#no-metamask {
  color: red;
}
</style>
