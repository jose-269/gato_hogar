<template>
  <div class="bg px-16">
    <v-container class="pt-16">
      <v-row style="height: 100vh">
        <v-col class="my-auto px-16 mx-16">
          <v-alert class="my-auto">
            <label>Nombre</label>
            <v-text-field
              v-model="regUsuario.nombre"
              label="Nombre"
              outlined
              dense
              required
            ></v-text-field>
            <label>Número de celular</label>
            <v-text-field
              v-model="regUsuario.celular"
              label="56 9 ********"
              outlined
              dense
              required
            ></v-text-field>
            <label>E-mail</label>
            <v-text-field
              v-model="regUsuario.email"
              label="E-mail"
              outlined
              dense
              required
            ></v-text-field>
            <label>Contraseña</label>
            <v-text-field
              v-model="regUsuario.contraseña"
              type="password"
              label="Contraseña"
              outlined
              dense
              required
            ></v-text-field>
            <label>Repite tu contraseña</label>
            <v-text-field
              v-model="regUsuario.validaPass"
              type="password"
              label="Repite tu Contraseña"
              outlined
              dense
              required
            ></v-text-field>
            <div class="text-center pb-5">
              <v-btn @click="registrar(regUsuario)" color="warning"
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
// import firebase from "firebase";
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["regUsuario"]),
  },
  methods: {
    ...mapActions(["nuevoUsuario"]),
    registrar(obj) {
      const regexTel = /^\x2b569[0-9]{8}$/i;
      const emailRegex =
        /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/;
      if (
        !this.regUsuario.nombre &&
        !this.regUsuario.celular &&
        !this.regUsuario.email &&
        !this.regUsuario.contraseña
      )
        return;
      else if (this.regUsuario.nombre.length > 10)
        alert("Su nombre no debetener más de 10 carácteres");
      else if (!regexTel.test(this.regUsuario.celular))
        alert("Su número de teléfono no es válido");
      else if (!emailRegex.test(this.regUsuario.email))
        alert("Su email no es válido");
      else if (this.regUsuario.contraseña !== this.regUsuario.validaPass)
        alert("Su contraseña no coincide");
      else if (
        this.regUsuario.contraseña.legth > 8 ||
        this.regUsuario.contraseña < 4
      )
        alert(
          "Su contraseña no debe superar los 8 carácteres ni tener menos de 4"
        );
      else this.nuevoUsuario(obj); this.$router.push("/login");
      console.log(obj);
    },
    // async registraUsuario() {
    //   const regexTel = /^\x2b569[0-9]{8}$/i;
    //    const emailRegex = /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/;
    //   if(!this.nombre && !this.celular && !this.email && !this.contraseña) return;
    //   if(this.nombre.length > 10) alert("Su nombre no debetener más de 10 carácteres");
    //   if(this.contraseña !== this.validaPass) alert("Su contraseña no coincide");
    //   if(this.contraseña.length > 6 || this.contraseña.length < 4) alert("Su contraseña no debe superar los 6 carácteres ni tener menos de 4")
    //   if(!regexTel.test(this.celular)) {
    //     alert("Su numero de teléfono no es válido");
    //     return;
    //   }
    //   if(!emailRegex.test(this.email)) alert("Su email no es válido");

    //   // Crear usuario FB y logear
    //   try {
    //     const req = await firebase.auth().createUserWithEmailAndPassword(this.email, this.contraseña);
    //     console.log(req);
    //     this.$router.push("/login");
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
  },
};
</script>

<style scoped>
.bg {
  background-color: #212121;
}
</style>
