<template>
	<div class="cart-list">
		<div class="cart-item" v-for="item in cartItems" :key="item.id">
			{{ item.title }} - &times;{{ item.quantity }} - {{ item.price }}
			<button @click="deleteItem(item.id)">del</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Cart',
	methods: {
		deleteItem(id) {
			this.$store.commit('deleteFromCart', id)
		},
	},
	computed: {
		cartItems() {
			return [...this.$store.state.cartItems].reverse()
		},
	}
}
</script>

<style>
.cart-list {
  padding: 0 10px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.cart-item {
  padding: 10px 0;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 250px;
}
</style>
