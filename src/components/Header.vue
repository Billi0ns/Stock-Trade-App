<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mt-4">
    <router-link to="/" class="navbar-brand">Stock Trader</router-link>
    <ul class="navbar-nav mr-auto">
      <router-link to="portfolio" tag="li" class="nav-item">
        <a class="nav-link"> Portfolio </a>
      </router-link>
      <router-link to="stocks" tag="li" class="nav-item">
        <a class="nav-link"> Stocks </a>
      </router-link>
    </ul>
    <ul class="navbar-nav">
      <li class="nav-item">
        <a href="#" class="nav-link" @click="generatePrice">End Day</a>
      </li>
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          >Save & Load</a
        >
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#" @click="saveData">Save Data</a>
          <a class="dropdown-item" href="#" @click="loadData">Load Data</a>
        </div>
      </li>
      <li class="nav-item">
        <div class="nav-link">Funds: ${{ funds }}</div>
      </li>
    </ul>
  </nav>
</template>

<script>
let _ = require('lodash');
export default {
  computed: {
    funds() {
      return this.$store.getters.stringFunds;
    },
  },
  methods: {
    generatePrice() {
      this.$store.commit('generateStockPrice');
    },
    saveData() {
      this.$store.state.savedData = _.cloneDeep(this.$store.state.portfolio);
      this.$store.state.savedFunds = this.$store.state.funds;
    },
    loadData() {
      const savedData = this.$store.state.savedData;
      if (savedData.length === 0) {
        return alert('You need to save data first!');
      }
      this.$store.state.portfolio = _.cloneDeep(savedData);
      this.$store.state.funds = this.$store.state.savedFunds;
    },
  },
};
</script>

<style></style>
