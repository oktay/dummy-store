<template>
  <header class="flex flex-col md:flex-row justify-between items-center py-8 border-b border-gray-200">
    <a href="/" class="text-lg font-bold">Dummy Store!</a>
    <Filters />
  </header>
</template>

<script>
import Filters from './Filters.vue'

export default {
  components: {
    Filters,
  }
}
</script>