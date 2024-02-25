
<template >
    <section id="card-doctors" class="doctors">
        <div class="container">
            <h2 class="mb-0">I professionisti che ti raccomandiamo</h2>


            <!-- CAROSELLO -->
            <Carousel :autoplay="2000" :items-to-show="2.5" :wrap-around="true" :breakpoints="breakpoints">

                <Slide v-for="item in this.store.allDoctors " :key="item">

                    <div class="carousel__item"><router-link :to="{ name: 'detail-doctor', params: { id: item.id } }">
                            <div class="member border d-flex align-items-start">
                                <div class="pic">
                                    <img :src="`${store.basePathImage}${item.image}`" class="img-fluid" alt="...">
                                </div>
                                <div class="member-info">
                                    <div class="member-inf2">
                                        <h4>{{ item.user.name }} {{ item.user.surname }}</h4>
                                        <div class="text-end">Specializzato in: <ul class="list-unstyled">
                                                <li class="text-black text-end"
                                                    v-for="specialization in item.specializations" :key="specialization.id">
                                                    {{
                                                        specialization.name }}</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="d-flex flex-row justify-content-start gap-3 align-content-center">

                                    </div>
                                    <div v-if="item.visible" class=" gap-3 mt-3 w-100 text-center">
                                        <div class="badge rounded-pill text-success border border-success">
                                            <i class="fa-solid fa-circle-check fs-4 align-middle"></i><small
                                                class="px-2 fs-6 align-middle ">Sponsorizzato</small>
                                        </div>
                                    </div>
                                    <!-- <div v-if="item.visible"
                                        class="d-flex flex-row justify-content-start gap-3 align-content-center">

                                        <span class="badge rounded-pill text-bg-success mt-3"><i
                                                class="fa-solid fa-certificate"></i> Consigliato!</span>

                                    </div> -->
                                </div>

                            </div>
                        </router-link></div>
                </Slide>

                <template #addons>
                    <Pagination />
                </template>
            </Carousel>

            <div class="row" v-if="this.store.call">
                <div class="col-lg-4 mt-3" v-for="item in  this.store.filteredDoctor ">

                </div>
            </div>


        </div>
    </section>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel'
import axios from 'axios';
import 'vue3-carousel/dist/carousel.css'

import { store } from '../data/store.js';
export default {
    name: "SponsoredDoctor",
    data() {
        return {
            store,
            settings: {
                itemsToShow: 1,
                snapAlign: 'center',
            },
            breakpoints: {
                1660: {
                    itemsToShow: 3,
                    snapAlign: 'center',
                },
                1400: {
                    itemsToShow: 2.8,
                    snapAlign: 'center',
                },
                1000: {
                    itemsToShow: 2,
                    snapAlign: 'center',
                },
                768: {
                    itemsToShow: 1.5,
                    snapAlign: 'center',
                },
                576: {
                    itemsToShow: 1,
                    snapAlign: 'center',
                },
                0: {
                    itemsToShow: 0.5,
                    snapAlign: 'center',
                },

            },
        }

    },
    components: {
        Carousel,
        Slide,
        Navigation,
        Pagination
    },
    methods: {
        // voteStar() {
        //     axios.get(`${this.store.apiUrl}`, { params: { mar: this.averageVote, order: this.total_reviews } })
        //         .then((res) => {
        //             this.store.allDoctors = res.data.results;
        //         })

        // },
        // getVoted(vote) {
        //     return Math.floor(vote);
        // },
    },


    mounted() {
        /* this.voteStar(); */
    },
    computed: {
        specializationsList() {
            return this.item.specializations.map(s => s.name).join(', ');
        },
    },
}
</script>

<style lang="scss" scoped>
@use './../assets//style/partials/variables.scss' as *;

.member-inf2 {
    height: 100px;
}

.carousel {
    margin-top: -50px !important;
}

.member {
    height: 100%;
    margin-top: 3rem;
}

.pic {
    border: 2px solid $primary-color;
    width: 150px !important;
    overflow: hidden;
    aspect-ratio: 1 / 1 !important;

    img {
        width: 100% !important;
        height: 100% !important;
        object-fit: cover !important;

    }
}
</style>
 