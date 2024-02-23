<template>
    <section id="review" class=" section-bg">
        <div class="container">

            <div class="section-title">
                <h2>Recensione e valutazione</h2>
                <p>Scrivi una recensione <i class="fa-solid fa-keyboard" ></i> o lascia una valutazione <i
                        class="fa-solid fa-star" style="color: #FFD43B;"></i> <br> o inseriscile entrambe compilando tutti i
                    campi del form. </p>
            </div>

            <form method="post" role="form" class="php-email-form" @submit.prevent="postReview()">



                <!-- NOME -->
                <div class="row">
                    <div class="col-12 col-md-6 form-group">
                        <input type="text" name="name" class="form-control" id="name" placeholder="Nome*"
                            data-rule="minlen:4" data-msg="Please enter at least 4 chars" v-model="nameM">
                        <div class="validate"></div>
                    </div>
                    <!-- EMAIL -->
                    <div class="col-12 col-md-6 form-group mt-3 mt-md-0">
                        <input type="email" class="form-control" name="email" id="email" placeholder="Email*"
                            data-rule="email" data-msg="Please enter a valid email" v-model="email">
                        <div class="validate"></div>
                    </div>

                </div>
                <!-- TITOLO RECENSIONE -->
                <div class="row mt-3">
                    <div class="col-12">
                        <input type="text" class="form-control" name="title" id="title"
                            placeholder="Titolo della recensione*" v-model="title">
                        <div class="validate"></div>
                    </div>


                </div>

                <!-- RECENSIONE -->
                <div class="row">
                    <div class="col-12 col-md-6">
                        <div class="form-group mt-3">
                            <textarea class="form-control" name="message" rows="5" placeholder="Recensione*"
                                v-model="message"></textarea>
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="form-group mt-3">
                            <label>Valutazione:</label>
                            <div id="rating" class="star-rating">
                                <span class="star" data-value="1">&#9733;</span>
                                <span class="star" data-value="2">&#9733;</span>
                                <span class="star" data-value="3">&#9733;</span>
                                <span class="star" data-value="4">&#9733;</span>
                                <span class="star" data-value="5">&#9733;</span>
                            </div>
                            <input type="hidden" name="rating" id="rating-value">
                        </div>
                    </div>
                </div>

                <div class="text-center mt-5">
                    <button type="submit">Invia</button>
                </div>
            </form>

            <div v-if="isVisible" class="alert alert-danger mt-3 d-flex justify-content-between">
                <span>
                    Inserisci tutti i campi testuali del form prima di inviarlo
                </span>
                <span @click="isVisible = false" class="cp"> X </span>
            </div>
            <div v-if="isVisibleSuccessText && isVisibleSuccessStar" class="alert alert-success mt-3 d-flex justify-content-between">
                <span>
                    Recensione completa inviata
                </span>
                <span @click="isVisibleSuccessText = false; isVisibleSuccessStar = false" class=" cp"> X </span>
            </div>
            <div v-else-if="isVisibleSuccessText" class="alert alert-success mt-3 d-flex justify-content-between">
                <span>
                    Recensione inviata <i class="fa-solid fa-keyboard fa-bounce"></i>
                </span>
                <span @click="isVisibleSuccessText = false" class="cp"> X </span>
            </div>
            <div v-else-if="isVisibleSuccessStar" class="alert alert-success mt-3 d-flex justify-content-between">
                <span>
                    Valutazione inviata <i class="fa-solid fa-star fa-bounce" style="color: #FFD43B;"></i>
                </span>
                <span @click="isVisibleSuccessStar = false" class="cp"> X </span>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import { store } from '../../data/store.js';

export default {
    name: "FormReview",
    data() {
        return {
            store,
            currentRating: 0,
            email: '',
            title: '',
            message: '',
            nameM: '',
            isVisible: false,
            isVisibleSuccessText: false,
            isVisibleSuccessStar: false,
        }
    },
    methods: {
        setupRatingStars() {
            const stars = document.querySelectorAll('.star');
            stars.forEach((star, index) => {
                star.addEventListener('click', this.rate);
                star.addEventListener('mouseenter', this.highlightStars.bind(this, index + 1));
            });
            document.getElementById('rating').addEventListener('mouseleave', this.resetStars);
        },
        highlightStars(index) {
            const stars = document.querySelectorAll('.star');
            stars.forEach((star, i) => {
                star.style.color = i < index ? '#ffc107' : '#ddd';
            });
        },
        resetStars() {
            const stars = document.querySelectorAll('.star');
            stars.forEach(star => {
                const ratingValue = parseInt(star.getAttribute('data-value'));
                star.style.color = ratingValue <= this.currentRating ? '#ffc107' : '#ddd';
            });
        },
        rate(event) {
            const rating = parseInt(event.currentTarget.getAttribute('data-value'));
            this.currentRating = rating;
            const stars = document.querySelectorAll('.star');
            stars.forEach(star => {
                star.style.color = star.getAttribute('data-value') <= rating ? '#ffc107' : '#ddd';
            });
            document.getElementById('rating-value').value = rating;
        },
        postReview() {
            this.isVisibleSuccessText = false;
            this.isVisibleSuccessStar = false;
            
            const isReviewFilled = this.email.trim() && this.nameM.trim() && this.title.trim() && this.message.trim();
            
            if (isReviewFilled) {
                axios.post(`${this.store.apiUrl}/reviews`, {
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
                    this.isVisibleSuccessText = true;
                    setTimeout(() => {
                        this.isVisibleSuccessText = false;
                    }, 3000); // Rimuovi l'alert dopo 3 secondi
                })
                .catch((err) => {
                    console.log(err);
                });
            }

            if (this.currentRating !== 0) {
                axios.post(`${this.store.apiUrl}/votes`, { account_id: this.$route.params.id, rating_id: this.currentRating })
                .then((res) => {
                    this.currentRating = 0;
                    this.resetStars();
                    this.isVisibleSuccessStar = true;
                    setTimeout(() => {
                        this.isVisibleSuccessStar = false;
                    }, 3000); // Rimuovi l'alert dopo 3 secondi
                })
                .catch((err) => {
                    console.log(err);
                });
            } else if (!isReviewFilled) {
                this.isVisible = true;
                console.log('Uno o più campi sono vuoti o non è stata selezionata alcuna valutazione.');
            }
        }
    },
    mounted() {
        this.setupRatingStars();
    },
}
</script>

<style lang="scss" scoped>
.star-rating {
    font-size: 3rem;
    color: #ddd;

    .star {
        cursor: pointer;
        transition: color 0.2s;
    }
}

button {
    background: #0476D9;
    border: 0;
    padding: 10px 35px;
    color: #fff;
    transition: 0.4s;
    border-radius: 50px;
}
</style>
