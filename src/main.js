import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";
import { firebaseConfig } from "../firebase";

Vue.config.productionTip = false;

firebase.initializeApp(firebaseConfig);


// gonzafg2@gmail.com


router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("login");
  if (
    to.name !== "Home" &&
    to.name !== "Login" &&
    to.name !== "Registrar" &&
    isAuthenticated !== "logueado"
  )
    next({ name: "Login" });
  next();
});

new Vue({
  firebase,
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
