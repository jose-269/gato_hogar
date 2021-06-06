<template>
  <v-app>
    <Nav />
    <router-view />
    <Footer />
  </v-app>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue"
export default {
  name: "App",
  components: {
    Nav,
    Footer,
  },
  data: () => ({
    //
  }),
};
</script>
