<template>
  <v-toolbar elevation="2" class="nav px-16 grey lighten-3">
    <v-btn icon to="/">
      <v-img class="logo" src="@/assets/gathogar_logo.png"></v-img>
    </v-btn>
    <v-toolbar-title class="font-italic title">Gathogar</v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="hidden-sm-and-down">
      <v-btn text to="/misPublicaciones">Mis publicaciones</v-btn>
      <v-btn text to="/publicar">Publicar</v-btn>
      <v-btn to="/login" elevation="2" outlined color="success" class="mx-5"
        >Ingresar</v-btn
      >
      <v-btn elevation="2" outlined color="warning">salir</v-btn>
    </div>
    <v-menu>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon class="hidden-md-and-up mx-8 text-left" v-bind="attrs" v-on="on"
          ><v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list class="mt-8 text-center">
        <v-list-item-title
          ><v-btn to="/misPublicaciones">Mis publicaciones</v-btn></v-list-item-title
        >
        <v-list-item-title
          ><v-btn to="/publicar">Publicar</v-btn></v-list-item-title
        >
        <v-list-item-title class="my-2"
          ><v-btn to="/login">Ingresar</v-btn></v-list-item-title
        >
        <v-list-item-title><v-btn to="/login" @click="logOut">Salir</v-btn></v-list-item-title>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Nav",
  methods: {
    async logOut() {
      try {
        await firebase.auth().signOut();
        localStorage.setItem("login", "noLogueado");
        this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    }
  },
};
</script>

<style scoped>
.nav {
  width: 100%;
  z-index: 1;
  position: fixed;
}
.logo {
  width: 3.5rem;
}
.title {
  visibility: hidden;
}
@media (min-width: 480px) {
  .title {
    visibility: visible;
  }
}
</style>
