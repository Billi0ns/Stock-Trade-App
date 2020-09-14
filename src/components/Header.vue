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
const axios = require('axios');
const url = 'https://vue-stock-trader-3db0e.firebaseio.com/data.json';
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
      /* this.$store.state.savedData = _.cloneDeep(this.$store.state.portfolio);
      this.$store.state.savedFunds = this.$store.state.funds; */
      const data = {
        funds: this.$store.state.funds,
        portfolio: this.$store.state.portfolio,
      };
      axios
        .put(url, data)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    loadData() {
      const vm = this;
      let data;
      axios
        .get(url)
        .then((response) => (data = response.data))
        .then((data) => {
          if (data) {
            vm.$store.commit('loadPortfolio', data);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
