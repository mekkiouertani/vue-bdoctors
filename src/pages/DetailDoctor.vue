<template>
    <div class="detail-doctor">
      <TopBar />
      <header>
        <!-- Immagine del medico -->
        <!-- <img src="../assets/images/doctors/doctors-1.jpg" class="doctor-image" alt=""> -->
        <!-- <img :src="`${store.basePathImage}${doctor.image}`" class="img-fluid" alt="..."> -->
        <img v-if="doctor && doctor.image" :src="`${store.basePathImage}${doctor.image}`" class="img-fluid doctor-image" alt="...">


      </header>
      <div class="container ">
        <div class="d-flex gap-3 ">
            <h3 class="my-5">{{ doctor && doctor.user && doctor.user.name }}</h3>
            <h3 class="my-5">{{  doctor && doctor.user && doctor.user.surname}}</h3>
        </div>
        
        <!-- Informazioni del medico -->
        <div class="doctor-info">
            <div class="card p-3">
                 <div class="card card-body m-3 align-items-start justify-content-center w-25 ">
                <p><strong>Specializzazione:</strong> {{ doctor && doctor.specialization   }}</p>
                </div>
                <div class="card card-body m-3 align-items-start justify-content-center w-25 ">
                    <p><strong>Numero di telefono:</strong> {{ doctor && doctor.phone }}</p>
                </div>
                <div class="card card-body m-3 align-items-start justify-content-center w-25 ">
                    <p><strong>Indirizzo:</strong> {{ doctor && doctor.address }}</p>
                </div>
                <div class="card card-body m-3   align-items-start justify-content-center w-50 ">
                    <p><strong>Email:</strong> {{ doctor && doctor.user.email }}</p>
                </div>
            </div>
           
          
          
          
          <!-- Altre informazioni del medico -->
        </div>
        <!-- Form di contatto -->
        <FormAppointments />
      </div>
    </div>
  </template>

<script>
import { store } from '@/data/store';
import TopBar from '@/components/TopBar.vue';
import FormAppointments from './../components/partials/FormAppointments.vue';
import axios from 'axios';
export default {
    name: "DetailDoctor",
    components: { TopBar, FormAppointments },
    data() {
        return {
            store,
            doctor: null,
        }
    },
    methods: {
        getDetailDoctor() {
            axios.get(`${this.store.apiUrl}/accounts/${this.$route.params.id}`).then((res) =>{
                console.log(`detail-doctor`, res.data);
                this.doctor = res.data;
            })
        }
    },
    created () {
        this.getDetailDoctor();
    },
}
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables';

.detail-doctor {
  .doctor-image {
    width: 200px;
    height: auto;
    border-radius: 3%;
  }
  
  header {
    background-color: #0476D9;
    padding: 20px;
    text-align: center;
  }
  
  .container {
    padding: 20px;
  }
  
  .doctor-info {
    margin-bottom: 20px;
  }
}
</style>