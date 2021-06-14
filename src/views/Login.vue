<template>
  <div class="bg px-16">
    <v-container class="pt-16">
      <v-row style="height: 100vh">
        <v-col class="my-auto">
          <!-- <div class="bg-login "> -->
          <v-alert class="my-auto">
            <label>E-mail</label>
            <v-text-field label="E-mail" outlined dense required></v-text-field>
            <label>Contraseña</label>
            <v-text-field
              v-model="numero"
              label="Contraseña"
              outlined
              dense
              required
            ></v-text-field>
            <div class="text-center pb-5">
              <v-btn to="/" color="success" class="mx-5 mb-2">Ingresar</v-btn>
              <v-btn to="/registrar" color="warning" class="mb-2"
                >Registrarse</v-btn
              >
            </div>
          </v-alert>
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
.bg-login {
  background-color: #eee;
}
</style>
