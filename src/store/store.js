import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    portfolio: [
      {
        name: 'Tesla',
        price: 110,
        quantity: 10,
        buyAmount: '',
        sellAmount: '',
      },
      {
        name: 'Google',
        price: 150,
        quantity: 8,
        buyAmount: '',
        sellAmount: '',
      },
      { name: 'Apple', price: 200, quantity: 0, buyAmount: '', sellAmount: '' },
      {
        name: 'Twitter',
        price: 90,
        quantity: 0,
        buyAmount: '',
        sellAmount: '',
      },
    ],
    funds: 10000,
    savedFunds: '',
    savedData: [],
  },
  getters: {
    stringFunds: (state) => {
      return state.funds.toLocaleString('en');
    },
    ownedStocks: (state) => {
      return state.portfolio.filter((stock) => stock.quantity > 0);
    },
  },
  mutations: {
    generateStockPrice: (state) => {
      state.portfolio.map((stock) => {
        const percentage = (7.5 + Math.random() * 5.5) * 0.1;
        stock.price = Math.floor(stock.price * percentage);
      });
    },
    buyStock(state, stock) {
      state.funds -= stock.price * stock.buyAmount;
      stock.quantity += stock.buyAmount;
      stock.buyAmount = '';
    },
    sellStock(state, stock) {
      state.funds += stock.price * stock.sellAmount;
      stock.quantity -= stock.sellAmount;
      stock.sellAmount = '';
    },
    loadPortfolio(state, data) {
      state.portfolio = data.portfolio;
      state.funds = data.funds;
    },
  },
});
