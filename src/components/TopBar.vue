<template>
    <header id="header" class="fixed">
        <div class="container d-flex align-items-center">
            <h1 class="logo me-auto">BDoctors</h1>
            <nav id="navbar" class="navbar order-last order-lg-0">
                <ul>
                    <li class="nav-item" v-for="item in menu">
                        <router-link :to="{ name: item.name }" class="nav-link" active-class="active">
                            {{ item.label
                            }}</router-link>
                    </li>
                </ul>
                <i class="bi bi-list mobile-nav-toggle"></i>
            </nav>
            <a href="#" class="appointment-btn scrollto"><span class="d-none d-md-inline">ACCEDI</span>
            </a>
        </div>
    </header>
</template>

<script>
export default {
    name: "TopBar",
    data() {
        return {
            menu: [
                {
                    label: "Home",
                    name: "home",
                },
                {
                    label: "Cerca il tuo Specialista",
                    name: "search",
                },

            ],
        }
    },
}
</script>

<style lang="scss" scoped></style>