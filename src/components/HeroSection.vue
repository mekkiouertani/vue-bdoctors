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

                            <router-link :to="{ name: 'search' }" class="btn btn-primary"
                                :class="{ disabled: !store.selectedSpecializations }" type="submit">
                                Cerca
                            </router-link>


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
            this.store.isLoading = true;
            if (this.store.selectedSpecializations) {
                axios.get(`${this.store.apiUrl}/accountfilter`, { params: { s: this.store.selectedSpecializations, order: this.total_reviews } })
                    .then((res) => {
                        this.store.filteredDoctor = res.data.results;
                        console.log(`filtered Doctor `, this.store.filteredDoctor);
                    })
                    .catch((err) => {
                        console.log(err);
                    }).finally(() => {
                        this.store.isLoading = false; // Imposta isLoading su false quando la ricerca è completata
                    });
            } else {
                this.store.isLoading = false;
            }

            this.store.call = true;
        },
    },
    mounted() {
        this.store.selectedSpecializations = '';
    }

}
</script>

<style lang="scss" scoped></style>