<template>
  <div class="product-list">
    <div class="card" v-for="product in products" :style="{width: cardsWidth + '%'}">
      <p class="card-title">{{ product.title }}</p>
      <img class="card-image" :src="product.image" alt="">
      <p class="card-price">Цена: {{ product.price }} {{ currency }}</p>

      <div>
        <input type="number" ref="amount" :id="product.id">
        <span>кг</span>
      </div>

      <button @click="addToCart(product)"> В корзину </button>
    </div>
  </div>
</template>

<!--
Для карточки товара нужно создать отдельный компонент
Даже в этом простом примере появляется какой то хаос
-->

<script>
export default {
  props: {
    currency: String,
  },
  data() {
    return {
      products: [],
    };
  },
  computed: {
    // Адаптировать верстку через js - чистое безумие, за исключением редких случаев
    cardsWidth() {
      let width = window.innerWidth;
      let count = 1;
      if (width > '840px') {
        count = 3;
      } else if ((width > '420px' && width < '840px')) {
        count = 2;
      }

      return 100 / count;
    },
  },
  methods: {
    startPricesMonitoring() {
      setInterval(this.getList, 1000);
    },
    // Непонятно зачем вообще использовать vuex в качестве посредника для получения данных
    async getList() {
      let data = await this.$store.dispatch('getProductsList');

      this.products = data;
    },
    // Очень неприятный на вид метод
    // Карточка должна быть отдельным компонентом, чтобы не искать amount через рефы
    // $parent доступен только для чтения
    // Но вообще обращаться к методу или свойствам родительсокго компонента - плохой приём
    // Компонент должен полагаться только на себя и на пропсы
    addToCart(product) {
      let amount = this.$refs.amount.find((input) => input.id === product.id).value;

      let data = {
        amount,
        price: product.price,
        title: product.title,
      };
      this.$parent.cart.push(data);
    },
  },
  // Интервал неплохо бы удалить при удалении компонента
  created() {
    this.startPricesMonitoring();
  },
};
</script>

<style>
  .product-list {
    padding: 10px;
  }

  .card {
    display: inline-block;
    width: 100%;
    border: 1px solid #908888;
    border-radius: 5px;
    text-align: center;
    padding: 10px;
  }
  .card-image {
    width: 100%;
  }
  button {
    padding: 5px;
    margin: 5px;
  }

</style>
