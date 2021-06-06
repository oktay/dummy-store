<template>
  <div class="container mx-auto px-4">
    <Header />
    <Spinner v-if="!products.length" />
    <div class="product-list my-8 grid grid-cols-2 lg:grid-cols-5 gap-4">
      <ProductCard v-for="product in products" :product="product" :key="product.id" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Header from './components/Header.vue'
import Spinner from './components/Spinner.vue'
import ProductCard from './components/ProductCard.vue'

export default {
  name: 'App',
  components: {
    Header,
    Spinner,
    ProductCard
  },
  computed: {
    ...mapState({
      products: state => state.products,
    })
  },
  created () {
    this.$store.dispatch('fetchProducts')
  }
}
</script>
