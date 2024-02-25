
<template>
    <section id="card-doctors" class="doctors">
        <div class="container">
            <LoaderComponent v-if="store.isLoading" />
            <div class=" text-start pb-3">
                <h2 v-if="store.filteredDoctor.length > 0">Medici trovati: {{ this.store.filteredDoctor.length }}</h2>
                <h2 v-if="store.filteredDoctor.length == 0 && store.call">Nessun medico trovato</h2>

            </div>
            <div class="row g-3 gy-3 gx-md-5">

                <div class="col-12 col-md-7 col-lg-5 col-xl-5 col-xxl-4" v-for=" item  in   this.store.filteredDoctor  ">
                    <router-link :to="{ name: 'detail-doctor', params: { id: item.id } }">
                        <div class="member border position-relative" :class="{ 'spons-border': item.visible }">

                            <div class="d-flex flex-column justify-content-between border-bottom pb-3">
                                <div class="d-flex justify-content-between align-items-start  w-100 ">
                                    <div class="pic">
                                        <img :src="`${store.basePathImage}${item.image}`" class="img-fluid" alt="...">
                                    </div>
                                    <div>
                                        <!-- INFO -->
                                        <h4 class="text-end">{{ item.user.name }} {{ item.user.surname }}</h4>
                                        <div class="member-info">
                                            <div class="text-dark mt-3 text-end">Specializzato in:
                                                <ul class="list-unstyled">
                                                    <li class="text-primary "
                                                        v-for=" specialization  in  item.specializations "
                                                        :key="specialization.id">{{
                                                            specialization.name }}</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <!--  -->
                                        <div class="">
                                            <div class="d-flex justify-content-end mt-2">
                                                <i v-for=" n  in  5 " :key="n" class="fa-star"
                                                    :class="(n <= getVoted(item.average_rating)) ? 'fa-solid' : 'fa-regular'"
                                                    style="color: #FFD43B;">
                                                </i>
                                            </div>
                                            <div
                                                class="d-flex flex-row align-items-center   justify-content-end mt-2 align-content-center gap-2">
                                                <i class=" fa-solid fa-book-open"></i>
                                                <div class="text-black align-middle">{{ item.total_reviews }} Recensioni
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- STAR -->
                            <div>

                                <!-- CONSIGLIATO -->
                                <div v-if="item.visible" class=" gap-3 mt-2  w-100 text-center">
                                    <div class="badge rounded-pill text-success border  border-success">
                                        <i class="fa-solid fa-circle-check fs-4 align-middle"></i><small
                                            class="px-2 fs-6 align-middle ">Sponsorizzato</small>
                                    </div>
                                    <!-- <div class="position-absolute pt-2">Visita il profilo</div> -->
                                </div>
                                <div v-if="!item.visible" class=" gap-3 w-100 text-center">
                                    <div class="mt-1">
                                        Visita il profilo
                                    </div>
                                </div>
                            </div>
                        </div>

                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { store } from '../../data/store.js';
import LoaderComponent from './LoaderComponent.vue';
export default {
    name: "CardDoctors",
    data() {
        return {
            store,
        };
    },
    methods: {
        getVoted(vote) {
            return Math.floor(vote);
        }
    },
    computed: {
        specializationsNames() {
            return this.item.specializations.map(s => s.name).join(', ');
        }
    },
    components: { LoaderComponent }
}
</script>

<style lang="scss" scoped>
@use '../../assets/style/partials/variables.scss' as *;

.spons-border {
    border: 2px solid gold !important;
}

.member {
    max-height: 400px;
    min-height: 300px;
    aspect-ratio: 4 / 3;
    background-color: $light-color !important;

}

.member-info {
    height: 100px;
}

.pic {
    border-radius: 20px !important;
    border: 2px solid $dark-primary;
    width: 150px !important;
    overflow: hidden;
    aspect-ratio: 3 / 4 !important;

    img {
        width: 100% !important;
        height: 100% !important;
        object-fit: cover !important;
        object-position: center;

    }
}

@media (max-width: 768px) {
    .member {
        width: 100% !important;
        aspect-ratio: 4 / 4 !important;
    }

    .member-info {
        height: 150px !important;
    }

    .pic {
        width: 200px !important;
    }
}

@media (max-width: 528px) {

    .pic {
        width: 200px !important;
    }
}
</style>
 