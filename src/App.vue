<template>
  <router-view></router-view>
</template>

<script>

import { store } from './data/store.js';
import axios from 'axios';

export default {

  name: 'App',
  data() {
    return {
      store,
    }
  },
  methods: {

  },
  mounted() {

  },
}
</script>

<style lang="scss" scoped>
@use '/src/assets/style/partials/_variables.scss' as *;
</style>