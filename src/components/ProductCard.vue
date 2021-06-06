<template>
  <div class="p-4 border border-gray-200 rounded-md relative overflow-hidden">
    <img class="w-full h-64 object-contain" :src="product.image" :alt="product.title">
    <h4 class="text-center my-4 overflow-ellipsis font-bold">{{ product.title }}</h4>
    <p class="text-center font-bold text-gray-500">${{ product.price }}</p>
    <span v-if="product.price < 16" class="bg-red-500 text-white px-16 py-2 absolute pl-8 pr-10 top-4 -left-8 text-xs badge">Last 3 Stock</span>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  }
}
</script>

<style lang="scss">
.badge {
  transform: rotate(-45deg);
}
</style>