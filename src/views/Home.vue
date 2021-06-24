<template>
  <div>
    <div class="bg pt-16">
      <v-container>
        <v-row>
          <v-col class="text-center my-auto" sm="6">
            <h1 class="mb-7 white--text">Gathogar</h1>
            <h3 class="mb-15 white--text">
              Presentamos un espacio
              donde puedes publicar tus gatitos para ser adoptados así tambien como
              para adoptar.
            </h3>
            <v-btn color="warning" to="/publicar">Publicar</v-btn>
          </v-col>
          <v-col
          sm="6">
            <v-img
              class="cat"
              src="../assets/hero_dos.png"
              alt="hero-section img"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <Anuncios :gatos="gatitos" :lugar="regiones" :gatosDB="gatitosDB" />
  </div>
</template>

<script>
// import axios from "axios";
import Anuncios from "@/components/Anuncios.vue";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    Anuncios,
  },
  computed: {
    ...mapState(["gatitos", "regiones", "gatitosDB"]),
  },
};
</script>
<style scoped>
.bg {
  background-color: #212121;
}
</style>
