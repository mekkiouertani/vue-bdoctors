<template>
    <TopBar />
    <div class="container">
        <h1 class="my-5">TUTTE LE INFO DEL MEDICO E SOTTO UN FORM DI CONTATTO</h1>

        <FormAppointments />
    </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue';
import FormAppointments from './../components/partials/FormAppointments.vue';
export default {
    name: "DetailDoctor",
    components: { TopBar, FormAppointments }
}
</script>

<style lang="scss" scoped></style>