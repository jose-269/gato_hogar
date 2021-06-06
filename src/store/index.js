import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    personajes: [],
  },
  mutations: {
    getPersonajes(state, payload) {
      state.personajes = payload
  }
  },
  actions: {
    async getData({ commit }) {
      const url = "https://rickandmortyapi.com/api/character";
      try {
        const req = await axios(url);
        // console.log(req.data.results);
        const personajesData = req.data.results;
        commit("getPersonajes", personajesData);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
