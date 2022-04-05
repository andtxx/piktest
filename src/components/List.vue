<template>
	<div class="product-list-wrap">
		<div v-if="loading">Loading...</div>
		<div v-else class="product-list">
      <Product
          class="card"
          v-for="product in products"
          :key="product.id"
          :product="product"
      />
    </div>
	</div>
</template>

<script>
import Product from './Product.vue'
export default {
	name: 'List',
	components: {
		Product,
	},
	data() {
		return {
			loading: true,
			interval: null,
		}
	},
	async mounted() {
		await this.$store.dispatch('updateProducts')
		this.loading = false
		this.interval = setInterval(() => {
			this.$store.dispatch('updateProducts')
		}, 2000)
	},
	beforeDestroy() {
		clearInterval(this.interval)
	},
	computed: {
		products() {
			return this.$store.state.products
		},
	},
}
</script>

<style>
.product-list-wrap {
	padding: 10px;
  margin-top: 60px;
}
.product-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
}
@media (max-width: 840px) {
  .product-list {
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
}
@media (max-width: 420px) {
  .product-list {
    grid-template-columns: 1fr;
  }
}
</style>
