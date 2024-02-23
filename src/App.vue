<template>
  <router-view>
  </router-view>
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
    getAllDatas() {
      axios.get(store.apiUrl + '/accounts').then((res) => {
        let doctorsToFilter = this.store.allDoctors.concat(res.data.results);
        this.store.allDoctors = doctorsToFilter.filter((el) => el.visible);
        console.log('all doctors', this.store.allDoctors);
      })

      //getting alla specializations
      axios.get(store.apiUrl + '/specializations').then((res) => {
        this.store.allSpecializations = this.store.allSpecializations.concat(res.data.results);
        console.log('all specializations', this.store.allSpecializations);
      })
    },
    //funzione per filtrare per specializations

  },
  mounted() {
    this.getAllDatas();

  },
}
</script>

<style lang="scss" scoped>
@use '/src/assets/style/partials/_variables.scss' as *;
</style>