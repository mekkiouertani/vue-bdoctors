<template>
    <TopBar />
    <HeroSection />
    <SponsoredDoctors v-if="this.store.allDoctors.length > 0" />
    <AboutInfo />
    <DepartmentSection />
    <FooterSection />
</template>

<script>
import { store } from '../data/store.js'
import TopBar from './../components/TopBar.vue';
import HeroSection from './../components/HeroSection.vue';
import SponsoredDoctors from './../components/SponsoredDoctors.vue';
import AboutInfo from '@/components/partials/AboutInfo.vue';
import DepartmentSection from '@/components/partials/DepartmentSection.vue';
import FooterSection from '@/components/partials/FooterSection.vue';
export default {
    components: { TopBar, SponsoredDoctors, HeroSection, AboutInfo, DepartmentSection, FooterSection },
    data() {
        return {
            store,
        }
    },
    name: "AppHome",
}
</script>

<style lang="scss" scoped></style>