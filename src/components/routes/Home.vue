<template>
  <div class="jumbotron">
    <h1 class="display-6">Trade or View your Portfolio</h1>
    <p>
      You may Save & Load your data
    </p>
    <p>
      Click on 'End Day' to begin a new day!
    </p>
    <hr class="my-4" />
    <p class="font-weight-bold">Your Funds: ${{ funds }}.</p>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.stringFunds;
    },
  },
};
</script>

<style></style>
