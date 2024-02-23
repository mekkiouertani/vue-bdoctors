
<template>
    <section id="card-doctors" class="doctors">
        <div class="container">
            <LoaderComponent v-if="store.filteredDoctor.length === 0 && store.selectedSpecializations !== ''" />
            <div class=" text-start pb-3">
                <h2 v-if="store.filteredDoctor.length > 0">Medici trovati: {{ this.store.filteredDoctor.length }}</h2>
                <h2 v-if="store.filteredDoctor.length == 0 && store.call">Nessun medico trovato</h2>

            </div>
            <div class="row">

                <div class="col-12 col-md-8  col-xl-4 mb-0 " v-for=" item  in   this.store.filteredDoctor  ">
                    <router-link :to="{ name: 'detail-doctor', params: { id: item.id } }">
                        <div class="member border position-relative" :class="{ 'spons-border': item.visible }">

                            <div class="d-flex flex-column justify-content-between">
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
                                                    totali
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- STAR -->
                            <div>

                                <!-- CONSIGLIATO -->
                                <div v-if="item.visible" class="fs-5 gap-3 mt-3 w-100 text-center">
                                    <div class="badge rounded-pill text-bg-success"><i
                                            class="fs-3 align-middle px-1  fa-solid fa-check"></i><small
                                            class="px-2 fs-5 align-middle ">Consigliato!</small>
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
    height: 300px;
    margin-top: 3rem;
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
</style>
 