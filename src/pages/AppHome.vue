<template>
    <TopBar />
    <HeroSection />
    <SponsoredDoctors />
</template>

<script>
import TopBar from './../components/TopBar.vue';
import HeroSection from './../components/HeroSection.vue';
import SponsoredDoctors from './../components/SponsoredDoctors.vue';
export default {
    components: { TopBar, SponsoredDoctors, HeroSection },
    name: "AppHome",
}
</script>

<style lang="scss" scoped></style>