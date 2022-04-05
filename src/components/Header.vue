<template>
  <div class="header">
    <h3 v-if="total">В корзине товаров на {{ total.toFixed(2) }} {{ currency }}</h3>
    <h3 v-else>В корзине нет товаров</h3>
  </div>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    total() {
      return this.$store.state.cartItems.reduce((total, item) => {
        return (total + item.price * item.quantity)
      }, 0)
    },
    currency() {
      return this.$store.state.currency
    },
  },
}
</script>

<style scoped>
.header {
  padding: 10px;
  background: #e5e5e5;
}
</style>
