
<template>
    <section id="card-doctors" class="doctors">
        <div class="container">
            <div class="text-start pb-3">
                <h2 v-if="store.filteredDoctor.length > 0">I medici che rispettano i criteri di ricerca:</h2>
                <h2 v-if="store.filteredDoctor.length == 0 && store.call">Nessun medico trovato</h2>

            </div>
            <div class="row">

                <div class="col-lg-4 mt-3" v-for="item in  this.store.filteredDoctor ">


                    <router-link :to="{ name: 'detail-doctor', params: { id: item.id } }">
                        <div class="member d-flex align-items-start">
                            <div class="pic">
                                <img :src="`${store.basePathImage}${item.image}`" class="img-fluid" alt="...">
                            </div>
                            <div class="member-info">
                                <h4>{{ item.user.name }} {{ item.user.surname }}</h4>
                                <div class="text-dark mt-3">Specializzato in: <ul class="">
                                        <li class="text-primary" v-for="specialization in item.specializations"
                                            :key="specialization.id">{{
                                                specialization.name }}</li>
                                    </ul>

                                </div>
                                <div class="d-flex flex-row justify-content-start gap-3 align-content-center">
                                    <div>
                                        <i v-for="n in 5" :key="n" class="fa-star"
                                            :class="(n <= getVoted(item.average_rating)) ? 'fa-solid' : 'fa-regular'"
                                            style="color: #FFD43B;">
                                        </i>
                                    </div>
                                    <div class="d-flex flex-row justify-content-start align-content-center gap-2">
                                        <i class="fa-solid fa-pen"></i>
                                        <div class="">{{ item.total_reviews }}</div>

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
export default {
    name: "CardDoctors",
    data() {
        return {
            store,
        }
    },
    methods: {
        getVoted(vote) {
            return Math.floor(vote)
        }
    },
    computed: {
        specializationsNames() {
            return this.item.specializations.map(s => s.name).join(', ');
        }
    }
}
</script>

<style lang="scss" scoped>
.member {
    height: 100%;
    margin-top: 3rem;
}

.pic {
    width: 150px !important;
    height: 150px !important;
    overflow: hidden;

    img {
        width: 100% !important;
        height: 100% !important;
        aspect-ratio: 1/1;

    }
}
</style>
 