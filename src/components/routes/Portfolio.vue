<template>
  <div class=".container-fluid">
    <div class="row">
      <div v-for="stock in ownedStocks" :key="stock.name">
        <div class="card">
          <div class="card-header">
            <span class="font-weight-bold">{{ stock.name }}</span>
            <span class="stockInfo">
              (Price: {{ stock.price }} | Quantity: {{ stock.quantity }})
            </span>
          </div>
          <div class="card-body">
            <div class="input-group">
              <input
                type="number"
                class="form-control"
                aria-label="Text input with dropdown button"
                placeholder="Quantity"
                v-model.number="stock.sellAmount"
              />
              <button
                class="btn"
                @click="sellStock(stock)"
                :disabled="
                  stock.sellAmount <= 0 || !Number.isInteger(stock.sellAmount)
                "
              >
                Sell
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
    ownedStocks() {
      return this.$store.getters.ownedStocks;
    },
  },
  methods: {
    sellStock(stock) {
      const price = stock.price;
      const sellAmount = stock.sellAmount;
      const ownedAmount = stock.quantity;

      if (sellAmount > ownedAmount) {
        return alert("You don't have enough stocks to sell!");
      }
      this.$store.commit('sellStock', stock);
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
  background: rgb(225, 241, 248);
}
.card-header span {
  color: rgb(99, 141, 157);
}
.input-group input {
  max-width: 200px;
}
.input-group button {
  background: rgb(99, 141, 157);
  color: white;
  margin-left: auto;
}
.col-sm-6 {
  border: rgb(225, 241, 248);
}
.stockInfo {
  font-size: 12px;
}
</style>
