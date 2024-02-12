<template>
  <TopBar />
  <HeroSection />
</template>

<script>
import TopBar from './components/TopBar.vue';
import HeroSection from './components/HeroSection.vue';
import { store } from './data/store.js';
import axios from 'axios';

export default {
  components: { TopBar, HeroSection },
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