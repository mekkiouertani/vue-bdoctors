<template>
    <TopBar />
    <section id="search-doctor" class="appointment section-bg">
        <div class="container">

            <div class="section-title">
                <h2>Cerca lo specialista che fa al caso tuo!</h2>
                <p>Potrai cercare il medico con le competenze che cerchi e con lo recensioni migliori.</p>
            </div>

            <form action="forms/appointment.php" method="post" role="form" class="php-email-form">
                <div class="row">
                    <!-- SPECIALIZATIONS -->
                    <div class="col-md-4 form-group mt-3">
                        <select name="specialization" id="specialization" class="form-select">
                            <option value="">Seleziona Specializzazione</option>
                            <option value="1">Specializzazione 1</option>
                            <option value="2">Specializzazione 1</option>
                            <option value="3">Specializzazione 1</option>
                        </select>
                        <div class="validate"></div>
                    </div>
                    <!-- VOTE -->
                    <div class="col-md-4 form-group mt-3">
                        <select name="vote" id="vote" class="form-select">
                            <option value="">Filtra per Valutazione</option>
                            <option value="1">&#x2605;</option>
                            <option value="2">&#x2605; &#x2605;</option>
                            <option value="3">&#x2605; &#x2605; &#x2605; </option>
                            <option value="3">&#x2605; &#x2605; &#x2605; &#x2605;</option>
                            <option value="3">&#x2605; &#x2605; &#x2605; &#x2605; &#x2605; </option>
                        </select>
                        <div class="validate"></div>
                    </div>
                    <!-- REVIEWS -->
                    <div class="col-md-4 form-group mt-3">
                        <select name="vote" id="vote" class="form-select">
                            <option value="">Filtra per Numero di Recensioni</option>
                            <option value="1">Almeno 1 Recensione</option>
                            <option value="2">Almeno 3 Recensioni</option>
                            <option value="3">Almeno 5 Recensioni</option>
                            <option value="3">Almeno 10 Recensioni</option>
                        </select>
                        <div class="validate"></div>
                    </div>
                </div>


                <div class="mb-3">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                </div>
                <div class="text-center"><button type="submit">Cerca</button></div>
            </form>

        </div>
    </section>
    <CardDoctors />
</template>

<script>
import TopBar from '@/components/TopBar.vue';
import CardDoctors from '@/components/partials/CardDoctors.vue';
export default {
    name: "AdvancedSearch",
    components: { TopBar, CardDoctors }
}
</script>

<style lang="scss" scoped></style>