<template>
  <div class="notFound d-flex flex-column justify-center align-center">
      <v-btn icon to="/">
      <v-img class="logo mb-16" src="@/assets/gathogar_logo.png" alt="logoGathogar"></v-img>
    </v-btn>
      
      <h1 class="mt-16">La página que buscas no existe!!!</h1>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.notFound {
    height: 100vh;
}
.logo {
    width: 10.5rem;
}
</style>