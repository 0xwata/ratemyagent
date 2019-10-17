<template>
  <div>
    <p>Home page</p>
    <div class='sample'>
    <p>発行時期：{{ randomNumber.issue_date }}</p>
    <p>銘柄名：{{ randomNumber.sector }} {{ randomNumber.stock_code }} {{ randomNumber.stock_name }}</p>
    <p>予想：{{ randomNumber.opinion_object }} {{ randomNumber.opinion }}</p>
    <p>根拠：{{ randomNumber.basis }}</p>
    <p>本文：{{ randomNumber.sentence }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sample',
  data () {
    return {
      // randomNumber: 'Welcome to My Vuex Sample'
    }
  },
  computed: {
    randomNumber () {
      return this.$store.state.randomNumber
    }
  }
}
</script>
