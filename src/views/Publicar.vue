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
              <label>Nombre de tu gatito</label>
              <v-text-field
                v-model="form.nombre"
                label="Nombre de tu gatito"
                outlined
                dense
                required
              ></v-text-field>
              <label>Cantidad de gatitos</label>
              <v-text-field
                v-model="form.cantidad"
                type="number"
                label="cantidad de gatos"
                outlined
                dense
                required
              ></v-text-field>
              <label>Teléfono</label>
              <v-text-field
                v-model="form.telefono"
                label="+56 9 ********"
                outlined
                dense
                required
              ></v-text-field>
              <v-select
                v-model="form.region"
                :items="regiones"
                item-text="region"
                label="Selecciona la region donde vives"
                outlined
              ></v-select>
              <v-btn raised color="primary" class="mb-5" @click="onPickFile">Elige tu imagen</v-btn>
              <input 
              @change="onFilePicked"
                type="file" 
                style="display: none" 
                ref="fileInput" 
                accept="image/*"
                >
                <v-img v-if="form.imageUrl" :src="form.imageUrl" width="150" class="mb-5"></v-img>
              <v-textarea
                v-model="form.mensaje"
                label="Mensaje máximo 200 caracteres"
                outlined
                dense
              ></v-textarea>
            </div>
            <div class="text-center pb-5">
              <v-btn color="success" @click="publicar(form)">Publicar</v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
// import firebase from "firebase"
// // import { storage } from "../../firebase";
export default {
  name: "Publicar",
  data() {
    return {
      form: {
        nombre: "",
        cantidad: "",
        telefono: "",
        region: "",
        mensaje: "",
        imageUrl: "",
        image: ""
      },
    };
  },
  methods: {
    onPickFile() {
      this.$refs.fileInput.click();
    },
    onFilePicked(event) {
      const files = event.target.files;
      let filename = files[0].name;
      if(filename.lastIndexOf(".") <=0) {
        return alert("Ingresa una imagen valida")
      }
      
      const fileReader = new FileReader();
      fileReader.addEventListener("load", ()=> {
        this.form.imageUrl = fileReader.result;
      })
      fileReader.readAsDataURL(files[0])
      this.form.image = files[0]
    },
    ...mapActions(["agregarGato"]),
    publicar(obj) {
      const regexTel = /^\x2b569[0-9]{8}$/i;
      if (this.form.nombre.length === 0) alert("Debe ingresar un nombre");
      else if (this.form.cantidad < 1 && this.form.cantidad < 10)
        alert("Debe ingresar una cantidad entre 1 y 10");
      else if (!regexTel.test(this.form.telefono))
        alert("Ingrese un número de teléfono valido");
      else if (this.form.mensaje.length > 200 || this.form.mensaje < 1)
        alert("Su mensaje no debe tener entre 0 y 200 carácteres");
      else if (!this.form.region) alert("Ingrese su ubicación");
      else if (
        !this.form.nombre &&
        !this.form.cantidad &&
        !this.form.telefono &&
        !this.form.region &&
        !this.form.mensaje 
      )
        return;
      else {
        const nuevoGato = {
          nombre: obj.nombre,
          cantidad: obj.cantidad,
          telefono: obj.telefono.replace("+", ""),
          region: obj.region,
          mensaje: obj.mensaje,
          // imagen: obj.image
        };
        this.agregarGato(nuevoGato);
        this.$router.push("/");
        this.limpiar();
      }
    },
    limpiar() {
      this.form.nombre = "";
      this.form.cantidad = "";
      this.form.telefono = "";
      this.form.region = "";
      this.form.mensaje = "";
    },
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
