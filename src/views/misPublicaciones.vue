<template>
  <div class="bg">
    <v-container>
      <v-row>
        <v-col class="mt-16">
          <div class="mt-16">
            <div class="success py-5">
              <h3 class="text-center white--text">
                Ingresa tu número de móvil
              </h3>
            </div>
            <div class="bg-ingresar px-16 py-5">
              <label>Teléfono</label>
              <v-text-field
                v-model="numero"
                label="+56 9 ********"
                outlined
                dense
                required
              ></v-text-field>
              <div class="text-center">
                <v-btn color="success" @click="traerEdicion(numero)"
                  >Ingresar</v-btn
                >
              </div>
            </div>
          </div>
          <v-card class="my-5 mt-16">
            <v-app-bar color="warning">
              <v-card-title class="mx-auto">
                <h4 class="white--text">Modifica tu publicación</h4>
              </v-card-title>
            </v-app-bar>

            <div class="mt-5 mx-16">
              <label>Nombre de tu gatito</label>
              <v-text-field
                v-model="mostrarTabla.nombre"
                label="Nombre de tu gatito"
                outlined
                dense
                required
              ></v-text-field>
              <label>Cantidad de gatitos</label>
              <v-text-field
                v-model="mostrarTabla.cantidad"
                type="number"
                label="Cantidad de gatitos"
                outlined
                dense
                required
              ></v-text-field>
              <v-file-input
                accept="image/*"
                label="File input"
                outlined
                dense
                required
              ></v-file-input>
              <v-textarea
                v-model="mostrarTabla.mensaje"
                label="Mensaje máximo 200 caracteres"
                outlined
                dense
              ></v-textarea>
            </div>
            <div class="text-center pb-5">
              <v-btn
                @click="modificar(mostrarTabla)"
                color="success"
                class="mx-5 mb-2"
                >Modificar</v-btn
              >
              <v-btn @click="eliminar(mostrarTabla)" color="error" class="mb-2"
                >Eliminar publicación</v-btn
              >
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "misPublicaciones",
  data() {
    return {
      numero: "",
      form:{
        nombre: "",
        cantidad: "",
        mensaje:""
      }
    };
  },
  methods: {
    ...mapActions(["updateDB", "deleteDB"]),
    ...mapMutations(["setMovil", "getTabla"]),
    
    modificar(obj) {
      this.$router.push("/");
      this.updateDB(obj);
    },
    traerEdicion(celu) {
      const regexTel = /^\x2b569[0-9]{8}$/i;
      if (!celu) alert("Ingrese un número de teléfono");
      else if (!regexTel.test(celu)) alert("Ingrese un número válido");
      else {
        const telefono = celu.replace("+", "");
        this.getTabla(telefono);
        this.setMovil(telefono);
      }
    },
    eliminar(obj) {
      console.log(obj.id);
      this.$router.push("/");
      this.deleteDB(obj);
    },
  },
  computed: {
    ...mapState(["mostrarTabla"]),
  },
  
};
</script>

<style>
.bg-ingresar {
  background-color: #fff;
}
.bg {
  background-color: #212121;
}
</style>
