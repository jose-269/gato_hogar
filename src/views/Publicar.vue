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
              <v-text-field
                v-model="publicacion.nombre"
                label="Nombre"
                outlined
                dense
                required
              ></v-text-field>
              <v-text-field
                v-model="publicacion.cantidad"
                type="number"
                label="cantidad de gatos"
                outlined
                dense
                required
              ></v-text-field>
              <v-text-field
                v-model="publicacion.telefono"
                label="Teléfono"
                outlined
                dense
                required
              ></v-text-field>
              <v-select
              v-model="regiones.region"
                :items="regiones"
                item-text="region"
                label="Región"
                outlined
              ></v-select>
              <v-file-input
                accept="image/*"
                label="File input"
                outlined
                dense
                required
              ></v-file-input>
              <v-textarea
                v-model="publicacion.mensaje"
                label="mensaje"
                outlined
                dense
              ></v-textarea>
            </div>
            <div class="text-center pb-5">
              <v-btn
                @click="
                  agregarGatoState
                "
                >Publicar</v-btn
              >
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      publicacion: {
        nombre: "",
        numero: "",
        telefono: "",
        mensaje: "",
      },
    };
  },
  methods: {
    // ...mapMutations(["agregarGatoState"]),
    agregarGatoState() {
      const local = localStorage.getItem("login");
      console.log(local);
    }
  },
  computed: {
    ...mapState(["regiones"]),
  },
};
</script>

<style>
.bg {
  background-color: #212121;
}
</style>
