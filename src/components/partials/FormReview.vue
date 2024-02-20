<template>
    <section id="review" class=" section-bg">
        <div class="container">

            <div class="section-title">
                <h2>Recensione e valutazione</h2>
                <p>Lascia una recensione e una valutazione. </p>
            </div>

            <form method="post" role="form" class="php-email-form" @submit.prevent="postReview()">



                <!-- NOME -->
                <div class="row">
                    <div class="col-12 col-md-6 form-group" required>
                        <input type="text" name="name" class="form-control" id="name" placeholder="Nome*"
                            data-rule="minlen:4" data-msg="Please enter at least 4 chars" required v-model="nameM">
                        <div class="validate"></div>
                    </div>
                    <!-- EMAIL -->
                    <div class="col-12 col-md-6 form-group mt-3 mt-md-0" required>
                        <input type="email" class="form-control" name="email" id="email" placeholder="Email*"
                            data-rule="email" data-msg="Please enter a valid email" required v-model="email">
                        <div class="validate"></div>
                    </div>

                </div>
                <!-- TITOLO RECENSIONE -->
                <div class="row mt-3">
                    <div class="col-12">
                        <input type="text" class="form-control" name="title" id="title"
                            placeholder="Titolo della recensione*" required v-model="title">
                        <div class="validate"></div>
                    </div>


                </div>

                <!-- RECENSIONE -->
                <div class="row">
                    <div class="col-12 col-md-6">
                        <div class="form-group mt-3">
                            <textarea class="form-control" name="message" rows="5" placeholder="Recensione*" required
                                v-model="message"></textarea>
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="form-group mt-3" required>
                            <label>Valutazione*:</label>
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

                    <!-- <div class="validate"></div>-->
                </div>



                <div class="text-center mt-5">
                    <button type="submit">Invia</button>
                </div>
            </form>
            <div v-if="formSubmittedSuccessfully" class="alert alert-success alert-dismissible fade show mt-1" role="alert">
                La tua recensione è stata inviata con successo!
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                
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
            formSubmittedSuccessfully: false


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

        // chiamata messaggio
        postReview() {
            console.log('chiamata');
            if (this.email.trim() && this.nameM.trim() && this.title.trim() && this.message.trim()) {
                axios.post(`${this.store.apiUrl}/reviews`, {
                account_id: this.$route.params.id,
                content: this.message,
                title: this.title,
                name: this.nameM,
                email: this.email
            })
            .then(() => {
                // Operazioni da eseguire dopo l'invio riuscito
                
                this.email = '';
                this.nameM = '';
                this.title = ''; // Corretto da title.content
                this.message = '';
                this.formSubmittedSuccessfully = true;
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                console.log('chiamata effettuata');
            });
            } else {
                console.log('Uno o più campi sono vuoti.');
            }


            //chiamata stelle
            if (this.currentRating !== 0) {
                axios.post(`${this.store.apiUrl}/votes`, { account_id: this.$route.params.id, rating_id: this.currentRating })
                    .then((res) => {
                        console.log('chaimata effettuata' + res)
                        this.currentRating = 0
                        this.highlightStars(0);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                    .finally(() => {
                        console.log('chiamata effettuata');
                    });
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

