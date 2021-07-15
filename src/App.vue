<template>
  <v-app class="myFont">
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
  methods: {
    ...mapActions(["getData","getGatitosDB", "getLog"]),
  },
  
  created () {
    this.getData();
    this.getGatitosDB();
    this.getLog()
  },
};
</script>

// <style lang="scss" scoped>
// .myFont {
//   font-family: 'Playfair Display', serif;
// }
// </style>
