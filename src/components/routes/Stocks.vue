<template>
  <div class=".container-fluid">
    <div class="row">
      <div v-for="stock in portfolio" :key="stock.name">
        <div class="card">
          <div class="card-header">
            <span class="font-weight-bold text-success">{{ stock.name }}</span>
            <span class="text-success stockInfo"
              >(Price: {{ stock.price }})</span
            >
          </div>
          <div class="card-body">
            <div class="input-group">
              <input
                type="number"
                class="form-control"
                aria-label="Text input with dropdown button"
                placeholder="Quantity"
                v-model.number="stock.buyAmount"
              />
              <button
                class="btn"
                @click="buyStock(stock)"
                :disabled="
                  stock.buyAmount <= 0 ||
                  !Number.isInteger(stock.buyAmount) ||
                  insufficientFunds(stock)
                "
              >
                {{ insufficientFunds(stock) ? 'Insufficient funds' : 'Buy' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    portfolio() {
      return this.$store.state.portfolio;
    },
  },
  methods: {
    buyStock(stock) {
      const funds = this.$store.state.funds;
      const price = stock.price;
      const buyAmount = stock.buyAmount;

      if (price * buyAmount > funds) {
        return alert("You don't have enough money!");
      }
      this.$store.commit('buyStock', stock);
    },
    insufficientFunds(stock) {
      return stock.price * stock.buyAmount > this.$store.state.funds;
    },
  },
};
</script>

<style scoped>
.row {
  justify-content: space-around;
  display: grid;
  grid-template-columns: repeat(2, 38vw);
}
.card {
  margin-bottom: 20px;
}
.card-header {
  background: rgb(230, 244, 223);
}
.input-group input {
  max-width: 200px;
}
.input-group button {
  background: rgb(126, 149, 112);
  color: white;
  margin-left: auto;
}
.col-sm-6 {
  border: rgb(230, 244, 223);
}
.stockInfo {
  font-size: 12px;
}
</style>
