<template>
    <TopBar />
    <section id="search-doctor" class="appointment section-bg">
        <div class="container">

            <div class="section-title">
                <h2>Cerca lo specialista che fa al caso tuo!</h2>
                <p>Potrai cercare il medico con le competenze che cerchi e con le recensioni migliori.</p>
            </div>

            <form role="form" class="php-email-form" @submit.prevent="filteredSpecializations">
                <div class="row">
                    <!-- SPECIALIZATIONS -->
                    <div class="col-md-4 form-group mt-3">
                        <select name="specialization" id="specialization" class="form-select"
                            v-model="store.selectedSpecializations">
                            <option value="">Seleziona Specializzazione</option>
                            <option v-for="specialization in store.allSpecializations" :value="specialization.id"
                                :key="specialization.id">
                                {{ specialization.name }}
                            </option>
                        </select>
                        <div class="validate"></div>
                    </div>
                    <!-- VOTE -->
                    <div class="col-md-4 form-group mt-3">
                        <select name="vote" id="vote" class="form-select" v-model="averageVote">
                            <option value="0">Filtra per Valutazione</option>
                            <option value="1">&#x2605;</option>
                            <option value="2">&#x2605; &#x2605;</option>
                            <option value="3">&#x2605; &#x2605; &#x2605;</option>
                            <option value="4">&#x2605; &#x2605; &#x2605; &#x2605;</option>
                            <option value="5">&#x2605; &#x2605; &#x2605; &#x2605; &#x2605;</option>
                        </select>
                        <div class="validate"></div>
                    </div>
                    <!-- REVIEWS -->
                    <div class="col-md-4 form-group mt-3">
                        <select name="reviews" id="reviews" class="form-select" v-model="selectedReviews">
                            <option value="0">Filtra per Numero di Recensioni</option>
                            <option value="1">Almeno 1 Recensione</option>
                            <option value="2">Almeno 2 Recensioni</option>
                            <option value="3">Almeno 3 Recensioni</option>
                            <option value="4">Almeno 4 Recensioni</option>
                        </select>
                        <div class="validate"></div>
                    </div>
                </div>

                <div class="mb-3">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                </div>
                <div class="text-center">
                    <button class="btn btn-primary" type="submit">Cerca</button>
                    <button class="btn  btn-success mx-3 rounded-pill py-2 px-4" type="reset" @click="resetSearch">Reset</button>
                </div>
            </form>
        </div>
    </section>
    <CardDoctors />
</template>
  
<script>
import axios from 'axios';
import { store } from '../data/store.js';
import TopBar from '@/components/TopBar.vue';
import CardDoctors from '@/components/partials/CardDoctors.vue';

export default {
    name: "AdvancedSearch",
    components: { TopBar, CardDoctors },
    data() {
        return {
            store,
            selectedReviews: 0,
            averageVote: 0
        }
    },
    methods: {
        originalFilteredSpecializations() {
            if (this.store.selectedSpecializations) {
                axios.get(`${this.store.apiUrl}/accounts`, { params: { specialization: this.store.selectedSpecializations } })
                    .then((res) => {
                        this.store.filteredDoctor = res.data.results;
                        console.log(`filtered Doctor`, this.store.filteredDoctor);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        },
        filteredSpecializations() {
            if (this.store.selectedSpecializations) {
                axios.get(`${this.store.apiUrl}/accountfilter`, { params: { s: this.store.selectedSpecializations, mar: this.averageVote, mr: this.selectedReviews } })
                    .then((res) => {
                        this.store.filteredDoctor = res.data.results;
                        console.log(`filtered Doctor`, this.store.filteredDoctor);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        },

        resetSearch() {
            this.store.selectedSpecializations = "";
            this.store.filteredDoctor = [];
        },

    },
    mounted() {
    },
}
</script>
  
<style lang="scss" scoped>
/* Your styles here */
</style>
  