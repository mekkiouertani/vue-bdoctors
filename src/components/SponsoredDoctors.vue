
<template >
    <section id="card-doctors" class="doctors">
        <div class="container">
            <h2 class="mb-0">I professionisti che ti raccomandiamo</h2>


            <!-- CAROSELLO -->
            <Carousel :autoplay="2000" :items-to-show="2.5" :wrap-around="true" :breakpoints="breakpoints">

                <Slide v-for="item in this.store.allDoctors " :key="item">

                    <div class="carousel__item"><router-link :to="{ name: 'detail-doctor', params: { id: item.id } }">
                            <div class="member d-flex align-items-start">
                                <div class="pic">
                                    <img :src="`${store.basePathImage}${item.image}`" class="img-fluid" alt="...">
                                </div>
                                <div class="member-info">
                                    <h4>{{ item.user.name }} {{ item.user.surname }}</h4>
                                    <div>Specializzato in: <strong v-for="specialization in item.specializations"
                                            :key="specialization.id">{{ specialization.name }}</strong></div>
                                    <div class="d-flex flex-row justify-content-start gap-3 align-content-center">
                                        <!-- <div>
                                            <i v-for="n in 5" :key="n" class="fa-star"
                                                :class="(n <= getVoted(item.average_rating)) ? 'fa-solid' : 'fa-regular'"
                                                style="color: #FFD43B;">
                                            </i>
                                        </div>
                                        <div class="d-flex flex-row justify-content-start align-content-center gap-2">
                                            <i class="fa-solid fa-pen"></i>
                                            <span>{{ item.total_reviews }}</span>
                                        </div> -->
                                    </div>
                                    <div v-if="item.visible"
                                        class="d-flex flex-row justify-content-start gap-3 align-content-center">

                                        <span class="badge rounded-pill text-bg-success mt-3"><i
                                                class="fa-solid fa-certificate"></i> Consigliato!</span>

                                    </div>
                                </div>

                            </div>
                        </router-link></div>
                </Slide>

                <template #addons>
                    <Pagination />
                </template>
            </Carousel>

            <!-- dottori sponsor, home -->

            <!-- v-for per sponsorizzare i medici -->
            <!-- <div v-if="!this.store.call" class="row">

                <div v-for="item in  this.store.allDoctors " class="col-lg-4 mt-3">
                    <router-link :to="{ name: 'detail-doctor', params: { id: item.id } }" v-if="item.visible">
                        <div class="member d-flex align-items-start">
                            <div class="pic">
                                <img :src="`${store.basePathImage}${item.image}`" class="img-fluid" alt="...">
                            </div>
                            <div class="member-info">
                                <h4>{{ item.user.name }} {{ item.user.surname }}</h4>
                                <div class="text-dark mt-3">Specializzato in: <ul>
                                        <li class="text-primary" v-for="specialization in item.specializations"
                                            :key="specialization.id">{{
                                                specialization.name }}</li>
                                    </ul>
                                </div>
                                <div v-if="item.visible"
                                    class="d-flex flex-row justify-content-start gap-3 align-content-center">
                                    <span class="badge rounded-pill text-bg-success">Consigliato!</span>
                                </div>
                            </div>

                        </div>
                    </router-link>
                </div>

            </div> -->


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
                    itemsToShow: 2.5,
                    snapAlign: 'center',
                },
                1000: {
                    itemsToShow: 2,
                    snapAlign: 'center',
                },
                768: {
                    itemsToShow: 1,
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
}
</script>

<style lang="scss" scoped>
@use './../assets//style/partials/variables.scss' as *;

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
 