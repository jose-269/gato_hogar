<template>
  <div class="bg-anuncios">
    <v-container class="py-16">
      <v-row>
        <v-col
          xs="12"
          sm="6"
          md="4"
          lg="3"
          xl="3"
          v-for="(gatito,i) in gatosDB"
          :key="i"
        >
          <v-card height="100%">
            <v-card-title
              class="
                subtitle-1
                font-weight-bold
                grey
                darken-4
                white--text
                justify-center
              "
            >
              {{ gatito.nombre }}</v-card-title
            >
            <div class="mx-auto mb-8">
              <v-img
                v-if="gatito.img"
                height="300"
                :src="gatito.img"
                class="mb-3"
              ></v-img>
              <v-img
                v-else
                height="300"
                class="mb-3"
                src="../assets/gathogar_logo.png"
              ></v-img>
              <v-divider></v-divider>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title
                    >Cantidad: {{ gatito.cantidad }}</v-list-item-title
                  >
                  <v-list-item-title
                    >Region: {{ gatito.region }}</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <v-card-text class="pt-0">
                {{ gatito.mensaje }}
              </v-card-text>
              <v-card-actions>
                <v-btn
                  
                  color="cyan darken-3 mx-auto"
                  >Te gustaría adoptarme?</v-btn
                >
              </v-card-actions>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "Home",
  props: {
    gatos: {
      type: Array,
    },
    lugar: {
      type: Array,
    },
    gatosDB: {
      type: Array,
    }
  },
};
</script>

<style scoped>
.bg-anuncios {
  background-color: #eeeeee;
}
</style>
>
