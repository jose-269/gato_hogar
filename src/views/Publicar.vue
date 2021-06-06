<template>
<div class="bg">
  <v-container>
    <v-row>
      <v-col class="mt-16">
        <v-card class="my-5 mt-16">
          <v-app-bar color="warning">
            <v-card-title class="mx-auto">
              <h4 class="white--text">Publica tu gatito</h4>
            </v-card-title>
          </v-app-bar>
          <div class="mt-5 mx-16">
        <v-text-field v-model="nombre" label="Nombre" outlined dense required ></v-text-field>
        <v-text-field v-model ="numero" type="number" label="cantidad de gatos" outlined dense required></v-text-field>
        <v-text-field v-model="telefono" label="Teléfono" outlined dense required></v-text-field>
        <v-file-input accept="image/*" label="File input" outlined dense required></v-file-input>
        <v-textarea label="mensaje" outlined dense></v-textarea>
          </div>
          <div class="text-center pb-5">
                <v-btn to="/" color="warning">Publicar</v-btn>
              </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: "",
      numero: "",
      telefono: "",
    };
  },
};
</script>

<style>
.bg {
  background-color: #212121;
}
</style>
