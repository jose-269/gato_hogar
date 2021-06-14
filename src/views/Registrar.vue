<template>
  <div class="bg px-16">
    <v-container class="pt-16">
      <v-row style="height: 100vh">
        <v-col class="my-auto px-16 mx-16">
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
              <v-btn to="/" color="warning"
                >Registrarme</v-btn
              >
            </div>
          </v-alert>
        </v-col>
      </v-row>
    </v-container>
  </div>      
</template>

<script>
export default {

}
</script>

<style scoped>
.bg {
    background-color: #212121;
}
</style>