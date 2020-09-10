<template>
  <div class=".container-fluid">
    <div class="row">
      <div v-for="stock in portfolio" :key="stock.name">
        <div class="card">
          <div class="card-header">
            <span class="font-weight-bold">{{ stock.name }}</span>
            <span class="">(Have: {{ stock.quantity }})</span>
          </div>
          <div class="card-body">
            <div class="input-group">
              <input
                type="number"
                class="form-control"
                aria-label="Text input with dropdown button"
                placeholder="Quantity"
              />
              <button class="btn">Buy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      portfolio: [
        { name: 'Tesla', quantity: 10 },
        { name: 'Google', quantity: 8 },
      ],
    };
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
</style>
