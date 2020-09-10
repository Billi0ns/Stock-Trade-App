import Home from './components/routes/Home.vue';
import Portfolio from './components/routes/Portfolio.vue';
import Stocks from './components/routes/Stocks.vue';

export const routes = [
  { path: '', component: Home },
  { path: '/portfolio', component: Portfolio },
  { path: '/stocks', component: Stocks },
  { path: '*', component: Home },
];
