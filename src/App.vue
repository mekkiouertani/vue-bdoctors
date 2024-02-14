 + ''<template>
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
    getAllDatas(){
      axios.get(store.apiUrl + '/accounts').then((res) =>{
        this.store.allDoctors = this.store.allDoctors.concat(res.data.results);
        console.log('pippo',this.store.allDoctors);
        
      })
    }
  },
  mounted() {
    this.getAllDatas()
    
  },
}
</script>

<style lang="scss" scoped>
@use '/src/assets/style/partials/_variables.scss' as *;
</style>