<template>
  <div>
    
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      gatos: [],
    };
  },
  computed: {
    filterCats() {

      return this.data 
    }
  },
  methods: {
    async getData() {
      const url = "https://cataas.com/cat";
      try {
        let gatos = await axios(url);
        gatos = this.gatos;
        console.log(gatos.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style></style>
