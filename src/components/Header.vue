<!--template обычно размещают сверху-->

<script>
export default {
  name: 'Header',
  // В данном случае данные следует брать из store
  // Но если уж использовать props, то с валидацией ошибка, должно быть так:
  // cart: {
  //  type: Array,
  //  required: true,
  //  default: [],
  //}
  props: {
    cart: Array,
    required: true,
    default: {},

    currency: String,
  },
  data() {
    return {
      cartPrice: 0,
    };
  },
  // Использовать wacth, чтобы следить за пропсами как то странно
  // Все входные параметры и так образуют одностороннюю привязку между дочерним свойством и родительским
  // Следует использовать computed вместо этой конструкции
  watch: {
    cart(cart) {
      let val = 0;
      cart.forEach((item) => {
        val += item.price * item.amount;
      });
      this.cartPrice = val;
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

<template>
  <div class="header">
    <h3>Товаров в корзине на: {{ cartPrice }} {{ currency }}</h3>
  </div>
</template>
