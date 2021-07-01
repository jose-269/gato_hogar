
<template>
      <v-toolbar elevation="2"  class="nav px-16 grey lighten-3">
        <v-btn icon to="/">
          <v-img class="logo" src="@/assets/gathogar_logo.png"></v-img>
        </v-btn>
        <v-toolbar-title class="font-italic title">Gathogar</v-toolbar-title>
        <v-spacer></v-spacer>
        <div class="hidden-sm-and-down">
          <v-btn text to="/misPublicaciones" class="px-0" >Mis publicaciones</v-btn>
          <v-btn text to="/publicar">Publicar</v-btn>
          <v-btn v-if="!logueado" to="/login" elevation="2" outlined color="success" class=""
            >Ingresar</v-btn
          >
          <v-btn v-if="logueado" elevation="2" outlined color="warning" class="ml-5" @click="logOut">salir</v-btn>
        </div>
          <v-menu nudge-left="200">
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon class="hidden-md-and-up" v-bind="attrs" v-on="on"
                ><v-icon class="">mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list class="mt-8 text-left px-5" min-width="100" dark>
              <v-list-item-title
                ><v-btn
                  to="/misPublicaciones"
                  class="mb-3"
                  color="succes"
                  outlined
                  >Mis publicaciones</v-btn
                ></v-list-item-title
              >
              <v-list-item-title
                ><v-btn to="/publicar" color="succes" outlined
                  >Publicar</v-btn
                ></v-list-item-title
              >
              <v-list-item-title class="my-3"
                ><v-btn v-if="!logueado" to="/login" color="succes" outlined
                  >Ingresar</v-btn
                ></v-list-item-title
              >
              <v-list-item-title
                ><v-btn v-if="logueado" color="succes" outlined @click="logOut"
                  >Salir</v-btn
                ></v-list-item-title
              >
            </v-list>
          </v-menu>
      </v-toolbar>
 
</template>


<script>
import { mapState, mapActions } from "vuex";
// import firebase from "firebase";
export default {
  name: "Nav",
  methods: {
    ...mapActions(["logOut"])
  },
  computed: {
    navLocalStorage() {
      const logVar = localStorage.getItem("login");
      return logVar;
    },
    ...mapState(["logueado"])
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
