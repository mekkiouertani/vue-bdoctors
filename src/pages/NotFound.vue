<template>
    <section class="page_404 d-flex justify-content-center ">
        <div class="">
            <div class="row">
                <div class="col-sm-12 ">
                    <div class="col-sm-10 col-sm-offset-1  text-center">
                        <div class="four_zero_four_bg">
                            <h1 class="text-center ">404</h1>


                        </div>

                        <div class="contant_box_404">
                            <h3 class="h2">
                                Qualcosa è andato storto
                            </h3>

                            <p>la pagina che stavi cercando non è disponibile!</p>

                            <router-link :to="{ name: 'home' }" class="btn btn-primary" active-class="active">
                                Home
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "NotFound"
}
</script>

<style lang="scss" scoped>
/*======================
    404 page
=======================*/

section {
    background-color: white;
    height: 100vh;

}

.page_404 {
    padding: 40px 0;
    background: #fff;
}

.page_404 img {
    width: 100%;
}

.four_zero_four_bg {

    background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
    height: 400px;
    background-position: center;
}


.four_zero_four_bg h1 {
    font-size: 80px;
}

.four_zero_four_bg h3 {
    font-size: 80px;
}

.link_404 {
    color: #fff !important;
    padding: 10px 20px;
    background: #39ac31;
    margin: 20px 0;
    display: inline-block;
}

.contant_box_404 {
    margin-top: -50px;
}
</style>