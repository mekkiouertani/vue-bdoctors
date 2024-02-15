<template>
    <section id="card-doctors" class="doctors">
        <div class="container">
            <div class="text-start pb-3">
                <h2>I medici che rispettano i criteri di ricerca:</h2>
            </div>
            <div class="row">
                <div class="col-lg-4" v-for="item in  this.store.filteredDoctor ">
                    <div class="member d-flex align-items-start">
                        <div class="pic"><img :src="`${store.basePathImage}${item.image}`" class="img-fluid" alt="...">
                        </div>
                        <div class="member-info">
                            <h4>{{ item.user.name }} {{ item.user.surname }}</h4>
                            <span>Specializzato in: <strong v-for="specialization in item.specializations"
                                    :key="specialization.id">{{ specialization.name }}</strong></span>
                        </div>
                    </div>
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
            store
        }
    }
}
</script>

<style lang="scss" scoped></style>