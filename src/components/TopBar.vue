<template>
    <header id="header" class="fixed">
        <div class="container d-flex align-items-center">
            <h1 class="logo me-auto">BDoctors</h1>
            <nav id="navbar" class="navbar order-last order-lg-0" :class="{ 'navbar-mobile': isNavbarVisible }">
                <ul>
                    <li class="nav-item" v-for="item in menu" :key="item.name" @click="store.call = false; store.selectedSpecializations = ''">
                        <router-link :to="{ name: item.name }" class="nav-link" active-class="active">
                            {{ item.label }}
                        </router-link>
                    </li>
                </ul>
                <i class="d-block fs-3 d-lg-none mx-2 fa-solid fa-bars bi" :class="isNavbarVisible ? 'bi-x' : 'bi-list'"
                    @click="toggleNavbar"></i>
            </nav>
            <a href="http://localhost:8000/login" class="d-block appointment-btn scrollto"><span
                    class="d-md-inline">ACCEDI</span></a>
        </div>
    </header>
</template>

<script>
import {store} from '../data/store.js';
export default {
    name: "TopBar",
    data() {
        return {
            store,
            isNavbarVisible: false,
            menu: [
                {
                    label: "Home",
                    name: "home",
                },
                {
                    label: "Cerca il tuo Medico",
                    name: "search",
                },

            ],
        }
    },
    methods: {
        toggleNavbar() {
            this.isNavbarVisible = !this.isNavbarVisible; // Cambia lo stato di visibilità
        },
    },
}
</script>

<style lang="scss" scoped></style>