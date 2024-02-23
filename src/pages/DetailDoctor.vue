<template>
  <div class="detail-doctor">

    <TopBar />
    <header>
      <img v-if="doctor.image" :src="`${store.basePathImage}${doctor.image}`" class="doctor-image"
        alt="Immagine del dottore">
    </header>
    <div class="container">
      <div class="row">
        <!-- Colonna Informazioni -->
        <div class="col-12 pt-3 pb-3" :class="doctor.cv ? 'col-md-6' : ''">
          <div class="card h-100"
            :class="!doctor.cv ? 'd-flex flex-row justify-content-between align-contents-start' : ''">
            <div class="card-body mt-2">
              <h3 class="title ">INFORMAZIONI</h3>
              <p class="p-1"><strong>Nome:</strong> {{ doctor.user.name }}</p>
              <p class="p-1"><strong>Cognome:</strong> {{ doctor.user.surname }}</p>
            </div>
            <!-- Colonna Specializzazione -->
            <div class="card-body mt-2">
              <h3 class="title ">SPECIALIZZAZIONE</h3>
              <div class="p-1 d-flex ">
                <strong>Specializzazione:</strong>
                <ul>
                  <li class="list" v-for="specialization in doctor.specializations">{{ specialization.name }}
                  </li>
                </ul>
              </div>
            </div>
            <!-- Colonna Contatti -->
            <div class="card-body mt-2">
              <h3 class="title ">CONTATTI</h3>
              <p class="p-1"><strong>Indirizzo:</strong> {{ doctor.address }}</p>
              <p class="p-1"><strong>Email:</strong> {{ doctor.user.email }}</p>
              <p class="p-1"><strong>Numero di telefono:</strong> {{ doctor.phone }}</p>
            </div>
          </div>
        </div>
        <!-- Colonna CV -->
        <div v-if="doctor.cv" class="col-12 col-md-6 pt-3 pb-3">
          <div class="card h-100  ">
            <div class="card-body ">
              <h3 class="title text-center">Curriculum Vitae</h3>
              <iframe class="w-100  " :src="`${doctor.cv}`" type="application/pdf" style="height: 680px;"></iframe>
            </div>
          </div>
        </div>
      </div>

      <hr>

      <!-- MESSAGGI E RECENSIONI -->
      <!-- parte sinistra -->
      <div class="row gy-4 mt-4 ">
        <div class="col-md-3 border-end">
          <ul class="nav nav-tabs flex-column">
            <li class="nav-item">
              <a class="nav-link mybtn active" data-bs-toggle="tab" href="#message-1">Prenota un appuntamento</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mybtn" data-bs-toggle="tab" href="#reviews-2">Scrivi una recensione</a>
            </li>
          </ul>
        </div>
        <!-- parte destra -->
        <div class="col-md-9">
          <div class="tab-content">
            <!-- form messaggi -->
            <div class="tab-pane active show" id="message-1">
              <FormAppointments />
            </div>

            <!-- form recensioni -->
            <div class="tab-pane fade" id="reviews-2">
              <FormReview />
            </div>
          </div>
        </div>
      </div>



    </div>


  </div>
</template>

<script>
import { store } from '@/data/store';
import TopBar from '@/components/TopBar.vue';
import FormAppointments from './../components/partials/FormAppointments.vue';
import FormReview from './../components/partials/FormReview.vue';
import axios from 'axios';
export default {
  name: "DetailDoctor",
  components: { TopBar, FormAppointments, FormReview },
  data() {
    return {
      activeApp: true,
      store,
      doctor: {
        user: {
          name: '',
          surname: '',
          email: '',
        }
      },

    }
  },
  methods: {
    changeActiveApp(active) {
      console.log('cambio');
      if (active) {
        this.activeApp = true
      } else {
        this.activeApp = false
      }
    },
    getDetailDoctor() {
      axios.get(`${this.store.apiUrl}/accounts/${this.$route.params.id}`).then((res) => {
        console.log(`detail-doctor`, res.data);
        this.doctor = res.data;
        console.log('doctor aaaa', this.doctor);
      })
    },

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



.mybtn {

  background-color: white;
  border-radius: 10px;
  padding: 10px;
  margin: 10px 0 10px 0;

}

a {
  color: black;
}

.nav-link {
  color: rgb(68, 68, 68);
  box-shadow: 0 0 20px 2px #ced2d6;

  &:hover {
    background-color: rgb(24, 61, 111);
    color: white;
    transform: scale(1.01);
  }
}

h2 {
  background-color: rgb(242, 247, 252);
  padding: 10px;
  color: rgb(51, 72, 98);
}
</style>