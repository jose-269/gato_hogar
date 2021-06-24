<template>
  <v-app>
    <Nav />
    <router-view />
    <Footer />
  </v-app>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
import {mapActions} from "vuex"
export default {
  name: "App",
  components: {
    Nav,
    Footer,
  },
  data: () => ({
    //
  }),
  methods: {
    ...mapActions(["getData","getGatitosDB"]),
  },
  
  created () {
    this.getData();
    this.getGatitosDB();
  },
};
</script>
