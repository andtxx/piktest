<template>
  <div class="cart-list">
    <div v-for="item in spisok_dlya_rendera">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cart: Array,
  },
  // Называть что-то транслитерацией не очень красиво
  // Array.reverse() изменяет исходный массив, из за этого возникают проблемы
  // Следует возвращать новый массив с примененим к нему reverse()
  computed: {
      spisok_dlya_rendera() {
          return this.cart.reverse();
      },
  },
};
</script>

<style>

</style>
