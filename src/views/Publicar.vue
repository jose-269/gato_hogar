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
                v-model="gatos.nombre"
                label="Nombre"
                outlined
                dense
                required
              ></v-text-field>
              <v-text-field
                v-model="gatos.cantidad"
                type="number"
                label="cantidad de gatos"
                outlined
                dense
                required
              ></v-text-field>
              <v-text-field
                v-model="gatos.telefono"
                label="Teléfono"
                outlined
                dense
                required
              ></v-text-field>
              <v-select
                v-model="gatos.region"
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
                v-model="gatos.msje"
                label="mensaje"
                outlined
                dense
              ></v-textarea>
            </div>
            <div class="text-center pb-5">
              <v-btn @click="publicar(gatos)">Publicar</v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Publicar",
  methods: {
    ...mapActions(["agregarGato"]),
    publicar(obj) {
      const regexTel = /^\x2b569[0-9]{8}$/i;
      if (
        !this.gatos.nombre &&
        !this.gatos.cantidad &&
        !this.gatos.telefono &&
        !this.gatos.region &&
        !this.gatos.msje
      )
        return;
      else if (this.gatos.cantidad < 1 && this.gatos.cantidad < 10) return;
      else if (!regexTel.test(this.gatos.telefono)) return;
      else if (this.gatos.msje.length > 200) return;
      else {
        const nuevoGato = {
          nombre: obj.nombre,
          cantidad: obj.cantidad,
          telefono: obj.telefono.replace("+", ""),
          region: obj.region,
          mensaje: obj.msje
        }
        this.agregarGato(nuevoGato);
        } 
      this.$router.push("/");
      // this.limpiar();
    },
    // limpiar() {
    //   this.gatos.nombre = "";
    //   this.gatos.cantidad = "";
    //   this.gatos.telefono = "";
    //   this.gatos.region = "";
    //   this.gatos.msje = "";
    //   this.gatos.autor = "";
    // },
  },
  computed: {
    ...mapState(["regiones", "gatos"]),
  },
};
</script>

<style>
.bg {
  background-color: #212121;
}
</style>
