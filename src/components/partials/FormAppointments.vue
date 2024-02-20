<template>
    <section id="appointment" class="appointment section-bg">
        <div class="container">

            <div class="section-title">
                <h2>Prendi un appuntamento</h2>
                <p>Attraverso questo form potrai prendere un appuntamento con il dottore.</p>
            </div>

            <form role="form" class="php-email-form" @submit.prevent="postMex()">





                <!-- NOME -->
                <div class="row">
                    <div class="col-12 col-md-6 form-group">
                        <input type="text" name="name" class="form-control" id="name" placeholder="Nome*"
                            data-rule="minlen:4" data-msg="Please enter at least 4 chars" required v-model="nameM">
                        <div class="validate"></div>
                    </div>
                    <!-- EMAIL -->
                    <div class="col -12 col-md-6 form-group mt-2 mt-md-0">
                        <input type="email" class="form-control" name="email" id="email" placeholder="Email*"
                            data-rule="email" data-msg="Please enter a valid email" required v-model="email">
                        <div class="validate"></div>
                    </div>

                </div>
                <!-- TITOLO -->
                <div class="row">
                    <div class="col-12 form-group mt-2">
                        <input type="text" class="form-control" name="title" id="title"
                            placeholder="Titolo della tua richiesta*" required v-model="title">
                    </div>
                </div>
                <!-- RICHIESTA -->
                <div class="row">
                    <div class="col-12">
                        <div class="form-group mt-2">
                            <textarea class="form-control" name="message" rows="5" placeholder="Messagio " required
                                minlength="5" v-model="message"></textarea>
                        </div>
                    </div>
                    <div class="validate"></div>
                </div>



                <div class="mb-3">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">La tua prenotazione è andata a buon fine. Grazie!</div>
                </div>
                <div class="text-center"><button type="submit">Prendi un appuntamento!</button></div>
            </form>
            <!-- ALERT -->
            <div v-if="isVisible" class="alert alert-danger mt-3 d-flex justify-content-between"><span>
                    Inserisci tutti i campi testuali del form prima di
                    inviarlo
                </span>
                <span @click="isVisible = false" class="cp"> X </span>
            </div>
            <div v-if="isVisibleSuccess" class="alert alert-success mt-3 d-flex justify-content-between"><span>
                    Recensione inviata
                </span>
                <span @click="isVisibleSuccess = false" class="cp"> X </span>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import { store } from '../../data/store.js';
export default {
    name: "FormAppointments",
    data() {
        return {
            store,
            email: '',
            nameM: '',
            title: '',
            message: '',
            isVisible: false,
            isVisibleSuccess: false,
        }
    },
    methods: {

        postMex() {
            console.log('chiamata');
            if (this.email.trim() && this.nameM.trim() && this.title.trim() && this.message.trim()) {
                axios.post(`${this.store.apiUrl}/messages`, {
                    account_id: this.$route.params.id,
                    content: this.message,
                    title: this.title,
                    name: this.nameM,
                    email: this.email
                })
                    .then(() => {
                        this.email = '';
                        this.nameM = '';
                        this.title = '';
                        this.message = '';
                    })
                    .catch((err) => {
                        console.log(err);

                    })
                    .finally(() => {
                        console.log('chiamata effettuata');
                        this.isVisibleSuccess = true;
                    });
            } else {
                console.log('Uno o più campi sono vuoti.');
                this.isVisible = true;
            }
        }
        // mounted() {
        //     this.postMex();
        // }
    }
}
</script>

<style lang="scss" scoped></style>