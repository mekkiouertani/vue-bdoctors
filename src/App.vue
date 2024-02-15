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
        this.store.allDoctors = this.store.allDoctors.concat(res.data.results);
        console.log('pippo', this.store.allDoctors);
      })

      //getting alla specializations
      axios.get(store.apiUrl + '/specializations').then((res) => {
        this.store.allSpecializations = this.store.allSpecializations.concat(res.data.results);
        console.log('specializations', this.store.allSpecializations);
      })
    },
    //funzione per filtrare per specializations
    filteredSpecializations() {
      if (this.store.selectedSpecializations) {
        axios.get(`${this.store.apiUrl}/accounts`, { params: { specialization: this.store.selectedSpecializations } }).then((res) => {
          this.store.allDoctors = res.data.results;
          console.log(`filter`, res.data.results);
        }).catch((err) => {
          console.log(err);
        });
      } else {
        this.getAllDatas();
      }
    }
  },
  mounted() {
    this.getAllDatas();
    this.filteredSpecializations();

  },
}
</script>

<style lang="scss" scoped>
@use '/src/assets/style/partials/_variables.scss' as *;
</style>