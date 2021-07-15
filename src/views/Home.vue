<template>
  <div>
    <div class="bg pt-16">
      <v-container>
        <v-row>
          <v-col class="my-auto text-center" sm="6">
            <h1 class="mb-7 white--text text-center main-title">Gathogar</h1>
            <h3 class="mb-15 white--text text-sm-left hero-text">
              Presentamos un espacio donde puedes publicar tus gatitos para ser
              adoptados así tambien como para adoptar.
            </h3>
            <v-btn color="warning" to="/publicar">Publicar</v-btn>
          </v-col>
          <v-col sm="6">
            <v-img
              class="cat"
              src="../assets/hero_dos.png"
              alt="hero-section img"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <Anuncios :lugar="regiones" :gatosDB="gatitosDB" />
  </div>
</template>

<script>
import Anuncios from "@/components/Anuncios.vue";
import { mapState, mapGetters } from "vuex";
export default {
  name: "Home",
  components: {
    Anuncios,
  },
  computed: {
    ...mapState(["regiones", "gatitosDB"]),
    ...mapGetters(["totalGatitos"]),
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/main.scss";
.bg {
  background-color: #212121;
}
.main-title {
  font-size: 3.5rem;
  font-weight: normal;
  font-family: $hero-title;
}
.hero-text {
  font-family: $main-font;
}
@media (min-width: 768px) {
  .main-title {
    font-size: 5.5rem;
  }
}
</style>
