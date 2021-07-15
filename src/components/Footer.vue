<template>
  <div class="grey darken-4 py-6">
    <v-container>
      <v-row>
        <v-col cols="12 ">
          <div class="">
            <v-img
              class="logo mx-auto"
              src="@/assets/gathogar_logo.png"
            ></v-img>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <p class="text-center white--text footer-text">
            Una página para gatos no para humanos ®
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";
.logo {
  width: 3.5rem;
}
.footer-text {
  font-family: $main-font;
}
/* .footer {
  position: absolute;
  bottom: 0;
  width: 100%;
} */
</style>
