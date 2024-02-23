<template>
    <TopBar />
    <section id="search-doctor" class="appointment section-bg">
        <div class="container">

            <div class="section-title">
                <h2>Cerca il medico che fa al caso tuo!</h2>
                <p>Potrai cercare il medico con le competenze che cerchi e con le recensioni migliori.</p>
            </div>

            <form role="form" class="php-email-form" @submit.prevent="filteredSpecializations">
                <div class="row">
                    <!-- SPECIALIZATIONS -->
                    <div class="col-md-4 form-group mt-3">
                        <label for="specialization pb-2">Ordina per specializzazione</label>
                        <select name="specialization" id="specialization" class="form-select mt-2"
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
                    <div class="col-md-4 form-group mt-3" v-if="store.selectedSpecializations">
                        <label for="vote">Ordina per voto</label>
                        <select name="vote" id="vote" class="form-select mt-2" v-model="averageVote">
                            <option value="0">Seleziona Valutazione</option>
                            <option value="1">&#x2605;</option>
                            <option value="2">&#x2605; &#x2605;</option>
                            <option value="3">&#x2605; &#x2605; &#x2605;</option>
                            <option value="4">&#x2605; &#x2605; &#x2605; &#x2605;</option>
                            <option value="5">&#x2605; &#x2605; &#x2605; &#x2605; &#x2605;</option>
                        </select>
                        <div class="validate"></div>
                    </div>
                    <!-- REVIEWS -->
                    <div class="col-md-4 form-group mt-3" v-if="store.selectedSpecializations">
                        <label for="reviews">Ordina per N. di recensioni</label>
                        <select name="reviews" id="reviews" class="form-select mt-2" v-model="total_reviews">
                            <option value="DESC" selected>Maggiori recensioni</option>
                            <option value="ASC">Minori Recensioni</option>
                        </select>
                        <div class="validate"></div>
                    </div>
                </div>

                <div class="mb-3">
                    <div class="loading">Caricamento...</div>
                    <div class="error-message"></div>
                    <div class="sent-message">La tua richiesta di appuntamento è stata inviata con successo. Grazie!</div>
                </div>
                <div class="d-flex "
                    :class="store.selectedSpecializations ? 'justify-content-center' : 'justify-content-start'">
                    <button class="btn btn-primary" :class="store.selectedSpecializations ? ' ' : ' disabled'"
                        type="submit">Cerca</button>
                    <button v-if="store.selectedSpecializations" class="btn  btn-success mx-3 rounded-pill py-2 px-4"
                        type="reset" @click="resetSearch">Annulla</button>
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
            total_reviews: 'DESC',
            averageVote: 0
        }
    },
    watch: {
        'store.selectedSpecializations'(newVal, oldVal) {
            if (newVal) {
                this.filteredSpecializations();
            }
        }
    },
    methods: {
      /*   originalFilteredSpecializations() {
            if (this.store.selectedSpecializations) {
                axios.get(`${this.store.apiUrl}/accounts`, { params: { specialization: this.store.selectedSpecializations } })
                    .then((res) => {
                        this.store.filteredDoctor = this.store.allDoctors.concat(res.data.results);
                        
                        console.log(`filtered Doctor`, this.store.filteredDoctor);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        }, */
        filteredSpecializations() {
            if (this.store.selectedSpecializations) {
                axios.get(`${this.store.apiUrl}/accountfilter`, { params: { s: this.store.selectedSpecializations, mar: this.averageVote, order: this.total_reviews } })
                    .then((res) => {
                        let filterdocs = res.data.results;
                        this.store.filteredDoctor = filterdocs.sort((a, b) => b.visible - a.visible);
                        console.log(`filtered Doctor`, this.store.filteredDoctor);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
            this.store.call = true;
        },

        resetSearch() {
            this.store.selectedSpecializations = "";
            this.store.filteredDoctor = [];

            this.store.call = false;
        },

    },
    mounted() {
        if (this.store.selectedSpecializations) {
            this.filteredSpecializations();
        }
    },
}
</script>
  
<style lang="scss" scoped>
/* Your styles here */
</style>
  