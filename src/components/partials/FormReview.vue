<template>
    <section id="review" class="appointment section-bg">
        <div class="container">

            <div class="section-title">
                <h2>Recensione e valutazione</h2>
                <p>Lascia una recensione e una valutazione. </p>
            </div>

            <form action="forms/appointment.php" method="post" role="form" class="php-email-form">

               <!-- INIZIO NUOVA PARTE -->


                <div class="row gy-4">
                    <div class="col-md-6">
                        <ul class="nav nav-tabs flex-column">
                            <li class="nav-item">
                                <a class="nav-link active show" data-bs-toggle="tab" href="#message-1">Prenota un appuntamento</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="tab" href="#reviews-2">Scrivi una recensione</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="tab-content">
                        <div class="tab-pane active show" id="message-1">
                            <div class="row gy-4">
                                <div class="col-lg-8 details order-2 order-lg-1">
                                    <h3>Messaggi</h3>
                                    <!-- mettere form -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane" id="reviews-2">
                        <div class="row gy-4">
                            <div class="col-lg-8 details order-2 order-lg-1">
                                    <h3>Et blanditiis nemo veritatis excepturi</h3>
                                    
                            </div>
                        </div>
                    </div>                        
                </div>
                

               <!-- FINE NUOVA PARTE -->

                <!-- NOME -->
                <div class="row">
                    <div class="col-12 col-md-6 form-group"  required>
                        <input type="text" name="name" class="form-control" id="name" placeholder="Nome*"
                            data-rule="minlen:4" data-msg="Please enter at least 4 chars">
                        <div class="validate"></div>
                    </div>
                <!-- EMAIL -->
                    <div class="col-12 col-md-6 form-group mt-3 mt-md-0"  required>
                        <input type="email" class="form-control" name="email" id="email" placeholder="Email*"
                            data-rule="email" data-msg="Please enter a valid email">
                        <div class="validate"></div>
                    </div>
                   
                </div>
                <!-- TITOLO RECENSIONE -->
                <div class="row">
                    <div class="col-12">
                   <input type="text" class="form-control" name="title" id="title" placeholder="Titolo della recensione*">

                    </div>

                   
                </div>
                <!-- RECENSIONE -->
                <div class="row">                  
                    <div class="col-12 col-md-6">
                        <div class="form-group mt-3">
                            <textarea class="form-control" name="message" rows="5" placeholder="Recensione*"></textarea>
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
                    
                
                <div class="mb-3">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">La tua recensione e la tua valutazione è stata inviata con successo. Grazie.</div>                    
                </div>
                <div class="text-center"><button type="submit">Invia</button></div>                
            </form>

        </div>
    </section>
</template>

<script>
export default {
    name: "FormReview",
    data(){
        return{

        }
    },
    methods:{
        setupRatingStars() {
            const stars = document.querySelectorAll('.star');
            stars.forEach(star => {
                star.addEventListener('click', this.rate);
            });
        },
        rate(event) {
            const rating = event.currentTarget.getAttribute('data-value');
            const stars = document.querySelectorAll('.star');
            stars.forEach(star => {
                star.style.color = star.getAttribute('data-value') <= rating ? '#ffc107' : '#ddd'; 
            });
            document.getElementById('rating-value').value = rating;
        }
    },
    mounted(){
        this.setupRatingStars();
    },
}
</script>

<style lang="scss" scoped>

.star-rating {
    font-size: 5rem;
    color: #ddd; 
    .star {
        cursor: pointer;
        transition: color 0.2s;
    }
    .star:hover, .star:hover ~ .star {
        color: #ffc107; 
    }
}
</style>