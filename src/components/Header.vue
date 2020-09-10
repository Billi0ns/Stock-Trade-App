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
        <a href="#" class="nav-link">End Day</a>
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
          <a class="dropdown-item" href="#">Save Data</a>
          <a class="dropdown-item" href="#">Load Data</a>
        </div>
      </li>
      <li class="nav-item">
        <div class="nav-link">Funds: $10,000</div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
