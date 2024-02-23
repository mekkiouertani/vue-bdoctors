<template>
    <section id="hero" class="d-flex align-items-center">
        <div class="container">
            <h1>Benvenuto su BDoctors</h1>
            <h2>Un team di medici competenti al tuo servizio.</h2>
            <form role="form" class="php-email-form" @submit.prevent="filteredSpecializations">

                <div class="row">
                    <!-- SPECIALIZATIONS -->
                    <div class="col-md-4 form-group mt-3 d-flex flex-row justify-content-start align-content-center">
                        <div class="pe-2">
                            <select name="specialization" id="specialization" class="form-select"
                                v-model="store.selectedSpecializations">
                                <option value="">Seleziona Specializzazione</option>
                                <option v-for="specialization in store.allSpecializations" :value="specialization.id"
                                    :key="specialization.id">
                                    {{ specialization.name }}
                                </option>
                            </select>
                        </div>

                        <div class="text-center">
                            <button class="btn btn-primary" type="submit">
                                <router-link :to="{ name: 'search' }" class="nav-link" active-class="active">
                                    Cerca il tuo medico
                                </router-link></button>

                        </div>

                    </div>

                </div>

            </form>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import { store } from '../data/store.js';




export default {

    name: "HeroSection",

    data() {
        return {
            store,

        }
    },
    methods: {
        filteredSpecializations() {
            if (this.store.selectedSpecializations) {
                axios.get(`${this.store.apiUrl}/accountfilter`, { params: { s: this.store.selectedSpecializations, order: this.total_reviews } })
                    .then((res) => {
                        this.store.filteredDoctor = res.data.results;
                        console.log(`filtered Doctor `, this.store.filteredDoctor);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }

            this.store.call = true;
        },
    }

}
</script>

<style lang="scss" scoped></style>