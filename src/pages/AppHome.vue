<template>
    <TopBar />
    <HeroSection />
    <SponsoredDoctors v-if="this.store.allDoctors.length > 0"/>
</template>

<script>
import {store} from '../data/store.js'
import TopBar from './../components/TopBar.vue';
import HeroSection from './../components/HeroSection.vue';
import SponsoredDoctors from './../components/SponsoredDoctors.vue';
export default {
    components: { TopBar, SponsoredDoctors, HeroSection },
    data(){
        return {
            store,
        }
    },
    name: "AppHome",
}
</script>

<style lang="scss" scoped></style>