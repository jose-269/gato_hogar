<template>
  <div class="bg pt-16">
    <v-container>
      <v-row>
        <v-col class="text-center my-auto " cols="6">
          <h1 class="mb-7 white--text">Gathogar</h1>
          <h3 class="mb-15 white--text">
            Somos una compañía sin findes de lucro, y presentamos un espacio
            donde puedes publicar tus gatitos para ser adoptados así tambien
            para adoptar.
          </h3>
          <v-btn color="warning" to="publicar">Publicar</v-btn>
        </v-col>
        <v-col cols="6">
          <v-img
            class="cat"
            src="../assets/hero_dos.png"
            alt="hero-section img"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      gatos: [],
    };
  },
  methods: {
    async getData() {
      const url = "https://cataas.com/cat";
      try {
        let gatos = await axios(url);
        // gatos = this.gatos;
        console.log(gatos);
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getData();
  },
};
</script>
<style scoped>
.bg {
  background-color: #212121;
}
</style>
