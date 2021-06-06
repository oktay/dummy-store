<template>
  <div class="flex">
    <div class="flex flex-col">
      <span class="text-sm text-gray-400">Filter by</span>
      <select v-model="filter">
        <option value="">All</option>
        <option v-for="(category, index) in categories" :value="category" :key="index">All {{ category }}</option>
      </select>
    </div>
    <div class="flex flex-col ml-4">
      <span class="text-sm text-gray-400">Sort by</span>
      <select v-model="sort">
        <option value="asc">Increasing ID</option>
        <option value="desc">Descending ID</option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      filter: '',
      sort: 'asc',
    }
  },
  created () {
    this.$store.dispatch('fetchCategories')
  },
  methods: {
    ...mapActions([
      'filterProducts',
    ]),
  },
  computed: {
    ...mapState({
      categories: state => state.categories,
    })
  },
  watch: {
    filter: function(value) {
      this.filterProducts([value, this.sort]);
    },
    sort: function(value) {
      this.filterProducts([this.filter, value])
    }
  }
}
</script>