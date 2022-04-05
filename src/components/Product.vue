<template>
  <div class="card">
    <p class="card-title">{{ product.title }}</p>
    <img class="card-image" :src="product.image" alt=""/>
    <p class="card-price">Цена: {{ product.price }} {{ currency }}</p>
    <div class="card-quantity">
      <input type="number" v-model="quantity"/>
      <span>кг</span>
    </div>
    <button @click="addToCart(product)">В корзину</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  props: ['product'],
  data() {
    return {
      quantity: '1',
    }
  },
  methods: {
    addToCart({id, title, price}) {
      const quantity = Number(this.quantity)
      if (!quantity) return
      this.$store.commit('addToCart', {
        id,
        title,
        price,
        quantity,
      })
    },
  },
  computed: {
    currency() {
      return this.$store.state.currency
    },
  },
}
</script>

<style>
.card {
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.card-image {
  width: 100%;
  border-radius: 10px;
}

.card-title {
  margin-bottom: 20px;
}

.card-price {
  margin-bottom: 10px;
  font-size: 18px;
}

.card-quantity {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.card-quantity input {
  width: 50px;
  text-align: center;
  margin-right: 20px;
}
</style>