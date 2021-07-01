<template>
  <div class="bg px-16">
    <v-container class="pt-16">
      <v-row style="height: 100vh">
        <v-col class="my-auto">
          <v-alert class="my-auto">
            <label>E-mail</label>
            <v-text-field
              v-model="registro.email"
              label="E-mail"
              outlined
              dense
              required
            ></v-text-field>
            <label>Contraseña</label>
            <v-text-field
              v-model="registro.contraseña"
              label="Contraseña"
              type="password"
              outlined
              dense
              required
            ></v-text-field>
            <div class="text-center pb-5">
              <v-btn @click="login" color="success" class="mx-5 mb-2"
                >Ingresar</v-btn
              >
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
import firebase from "firebase";
import { mapState, mapMutations } from "vuex";
export default {
  name: "Login",
  computed: {
    ...mapState(["registro"]),
  },
  methods: {
    ...mapMutations(["setLogin"]),
    async login() {
      if (!this.registro && !this.registro.email && !this.registro.contraseña)
        return;

      try {
        const db = firebase.firestore();
        const reqDBUser = await db.collection("usuarios").get();
        reqDBUser.docs.find((el) => this.registro.email === el.data().email);
        const req = await firebase
          .auth()
          .signInWithEmailAndPassword(
            this.registro.email,
            this.registro.contraseña
          );
        if (req && req !== null) {
          localStorage.setItem("login", "logueado");
          this.setLogin(true);
          this.$router.push("/");
        }
      } catch (error) {
        const errorCode = error.code;
        const errorMsje = error.message;
        console.log("Codigo de error:", errorCode);
        console.log("Mensaje de error", errorMsje);
      }
    },
  },
};
</script>

<style scoped>
.bg {
  background-color: #212121;
}
.bg-login {
  background-color: #eee;
}
</style>
