<template>
  <div class="bg-anuncios">
    <v-container class="py-16">
      <v-row>
        <v-col
          xs="12"
          sm="6"
          md="4"
          lg="3"
          xl="3"
          v-for="(gatito,i) in gatosDB"
          :key="i"
        >
          <v-card height="100%">
            <v-card-title
              class="
                subtitle-1
                font-weight-bold
                grey
                darken-4
                white--text
                justify-center
                d-flex
              "
            >
              {{ gatito.nombre }}</v-card-title
            >
            <div class="mx-auto mb-8">
              <v-img
                v-if="gatito.img"
                height="300"
                :src="gatito.img"
                class="mb-3"
              ></v-img>
              <v-img
                v-else
                height="300"
                class="mb-3"
                src="../assets/gathogar_logo.png"
              ></v-img>
              <v-divider></v-divider>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title
                    >Cantidad: {{ gatito.cantidad }}</v-list-item-title
                  >
                  <v-list-item-title
                    >Region: {{ gatito.region }}</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <v-card-text class="pt-0">
                {{ gatito.mensaje }}
              </v-card-text>
              <v-card-actions>
                <div class="div">
                  <v-btn class="btn" 
                  v-if="getLocalStorage"
                  
                  @click="contacto(gatito.telefono)"
                  color="cyan darken-3 mx-auto"
                  >Te gustaría adoptarme?</v-btn
                >
                </div>
                
              </v-card-actions>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: "Anuncios",
  data() {
    return {
      login: ""
    }
  },
  props: {
    gatos: {
      type: Array,
    },
    lugar: {
      type: Array,
    },
    gatosDB: {
      type: Array,
    }
  },
  methods: {
    contacto(telefono) {
      this.$router.push("google.com")
      console.log(telefono);
    }
  },
  computed: {
    getLocalStorage() {
      const logVar = localStorage.getItem("login");
      return logVar
    }
  },
};
</script>

<style scoped>
.bg-anuncios {
  background-color: #eeeeee;
}

.btn {
  position: absolute;
  bottom: 3%;
}
@media (min-width: 320px)  {
.btn {
  left: 25px;
}
}
@media (min-width: 360px) {
.btn {
  left: 50px;
}
}
@media (min-width: 375px) {
  .btn {
    left: 57px;
  }
}
@media (min-width: 411px) {
.btn {
  left: 75px;
}
}
@media (min-width: 480px) {
  .btn {
    left: 104px;
  }
}
@media (min-width: 540px) {
  .btn{
    left: 135px;
  }
}
@media (min-width: 540px) {
  .btn{
    left: 135px;
  }
}
@media (min-width: 600px) {
  .btn {
    left: 17px;
  }
}
@media (min-width: 768px) {
  .btn {
    left: 60px;
  }
}
@media (min-width: 992px) {
  .btn {
    left: 18px;
  }
}
</style>
>
