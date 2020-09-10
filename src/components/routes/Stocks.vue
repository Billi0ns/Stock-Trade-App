<template>
  <div class=".container-fluid">
    <div class="row">
      <div v-for="stock in stocks" :key="stock.name">
        <div class="card">
          <div class="card-header">
            <span class="font-weight-bold text-success">{{ stock.name }}</span>
            <span class="text-success">(Price: {{ stock.price }})</span>
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
      stocks: [
        {
          name: 'Tesla',
          price: 110,
        },
        {
          name: 'Google',
          price: 200,
        },
        {
          name: 'Apple',
          price: 250,
        },
        {
          name: 'Twitter',
          price: 30,
        },
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
</style>
