<template>
  <div class="bg px-16">
    <v-container class="pt-16">
      <v-row style="height: 100vh">
        <v-col class="my-auto px-16 mx-16">
          <v-card class="m-auto">
            <v-app-bar color="success">
              <v-card-title class="mx-auto">
                <h4 class="white--text">Ingresar</h4>
              </v-card-title>
            </v-app-bar>
            <div class="mt-5 mx-16">
              <v-text-field
                v-model="nombre"
                label="E-mail"
                outlined
                dense
                required
              ></v-text-field>
              <v-text-field
                v-model="numero"
                label="Contraseña"
                outlined
                dense
                required
              ></v-text-field>
              <div class="text-center pb-5">
                <v-btn to="/" color="success" class="mx-5">Ingresar</v-btn>
                <v-btn to="/registrar" color="warning">Registrarse</v-btn>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bg {
  background-color: #212121;
}
</style>
