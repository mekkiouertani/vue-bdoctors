<template>
  <div class="detail-doctor">
  <TopBar />
  <header>
    <img v-if="doctor?.image" :src="`${store.basePathImage}${doctor.image}`" class="doctor-image" alt="Immagine del dottore">
  </header>
  <div class="container">
    <div class="row">
      <!-- Colonna Informazioni -->
      <div class="col-12 col-md-4 pt-3 pb-3">
        <div class="card">
          <div class="card-body m-3">
            <h3 class="title text-center">INFORMAZIONI</h3>
            <p class="p-3"><strong>Nome:</strong> {{ doctor.user.name }}</p>
            <p class="p-3"><strong>Cognome:</strong> {{ doctor.user.surname }}</p>
          </div>
        </div>
      </div>
      <!-- Colonna Specializzazione -->
      <div class="col-12 col-md-4 pt-3 pb-3">
        <div class="card">
          <div class="card-body m-3">
            <h3 class="title text-center">SPECIALIZZAZIONE</h3>
            <div class="p-3 m-3">
              Specializzazione:
              <ul>
                <li v-for="specialization in doctor.specializations">{{ specialization.name }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- Colonna Contatti -->
      <div class="col-12 col-md-4 pt-3 pb-3">
        <div class="card">
          <div class="card-body m-3">
            <h3 class="title text-center">CONTATTI</h3>
            <p class="p-1"><strong>Indirizzo:</strong> {{ doctor.address }}</p>
            <p class="p-1"><strong>Email:</strong> {{ doctor.user.email }}</p>
            <p class="p-1"><strong>Numero di telefono:</strong> {{ doctor.phone }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  <FormAppointments />
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
      doctor: [],

    }
  },
  methods: {
    getDetailDoctor() {
      axios.get(`${this.store.apiUrl}/accounts/${this.$route.params.id}`).then((res) => {
        console.log(`detail-doctor`, res.data);
        this.doctor = res.data;
        console.log('doctor aaaa', this.doctor);
      })
    }
  },
  created() {
    this.getDetailDoctor();
  },
}
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables';

.detail-doctor {
  .doctor-image {
    width: 300px;
    height: auto;
    border-radius: 3%;
  }

  header {
    background-color: #023E73;
    padding: 20px;
    text-align: center;
  }

  .title {
    color: #023E73;
  }

}
</style>