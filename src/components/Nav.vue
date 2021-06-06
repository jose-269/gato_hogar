<template>
  <!-- <v-app-bar app elevation="0" class="nav" > -->
    <v-toolbar elevation="2" class="nav px-16 grey lighten-3">
      <v-btn icon to="/">
        <v-img class="logo" src="@/assets/gathogar_logo.png"></v-img>
      </v-btn>

      <v-toolbar-title class="font-italic">Gathogar</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/publicar">Publicar</v-btn>
      <v-btn to="/login" elevation="2" outlined color="success" class="mx-5"
        >Ingresar</v-btn
      >
      <v-btn elevation="2" outlined color="warning">salir</v-btn>
    </v-toolbar>
  <!-- </v-app-bar> -->
</template>

<script>
export default {};
</script>

<style scoped>

.nav  {
  width: 100%;
  z-index: 1;
  position: fixed;
}
.logo {
  width: 3.5rem;
}
</style>
