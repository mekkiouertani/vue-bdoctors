<template>
    <section id="appointment" class="appointment section-bg">
        <div class="container">

            <div class="section-title">
                <h2>Prendi un appuntamento</h2>
                <p>Attraverso questo form potrai prendere un appuntamento con il dottore.</p>
            </div>

            <form action="forms/appointment.php" method="post" role="form" class="php-email-form">

                <!-- sistemare indirizzo form -->
               

                <!-- NOME -->
                <div class="row">
                    <div class="col-12 col-md-6 form-group">
                        <input type="text" name="name" class="form-control" id="name" placeholder="Nome*"
                            data-rule="minlen:4" data-msg="Please enter at least 4 chars" required>
                        <div class="validate"></div>
                    </div>
                <!-- EMAIL -->
                    <div class="col -12 col-md-6 form-group mt-3 mt-md-0">
                        <input type="email" class="form-control" name="email" id="email" placeholder="Email*"
                            data-rule="email" data-msg="Please enter a valid email" required>
                        <div class="validate"></div>
                    </div>
                   
                </div>
                <!-- TITOLO -->
                <div class="row">
                    
                    <div class="col-12 form-group">
                        <input type="text" class="form-control" name="title" id="title" placeholder="Titolo della tua richiesta*" required>
                    </div>
                </div>
                <!-- RICHIESTA -->
                <div class="row">
                    <div class="col-12">
                        <div class="form-group mt-3">
                            <textarea class="form-control" name="message" rows="5" placeholder="Messagio (Opzionale)" required min:5></textarea>
                        </div>
                    </div>
                    <div class="validate"></div>
                </div>


                
                <div class="mb-3">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">La tua prenotazione è andata a buon fine. Grazie!</div>
                </div>
                <div class="text-center"><button type="submit">Prendi un appuntamento.</button></div>
            </form>

        </div>
    </section>
</template>

<script>
export default {
    name: "FormAppointments",
}
</script>

<style lang="scss" scoped></style>