import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gatitos: [
      {
        id: 0,
        nombre: "Almendra",
        img: "",
        cantidad: 1,
        msje: "Hola me llamo Almendra, mi dueña falleció y necesito una familia que me adopt, me de amor cariño y mucha comida. prrr prrr Miau!! ",
      },
      {
        id: 1,
        nombre: "Dientes",
        img: "",
        cantidad: 1,
        msje: "Me encontraron por el sector de avenida Macul y no encuentro mi familia hace meses, me quieres adoptar?? Miauu!!",
      },
      {
        id: 2,
        nombre: "Recién nacido",
        img: "",
        cantidad: 1,
        msje: "Hola mis hermanos enconrtaron familia y yo aún estoy solito esperando prrr prrr!!",
      },
      {
        id: 3,
        nombre: "3 Gatitos",
        img: "",
        cantidad: 3,
        msje: "Somos 3 michis recién nacidos esperando el calor de un hogar Miau!!",
      },
      {
        id: 4,
        nombre: "2 gatitos",
        img: "",
        cantidad: 2,
        msje: "Somos dos gatitos de 3 meses queremos mucho cariño y una familia.",
      },
      {
        id: 5,
        nombre: "Lince",
        img: "",
        cantidad: 1,
        msje: "Me encontraron en la Florida a punto de ser comido por un perro, ayúdamen necesito que me rescaten. prr prr.",
      },
      {
        id: 6,
        nombre: "Rayo",
        img: "",
        cantidad: 1,
        msje: "Hola estoy en la veterinaria San Martin de Vicuña Mackenna y busco un hogar",
      },
      {
        id: 7,
        nombre: "Rony",
        img: "",
        cantidad: 1,
        msje: "Hola estoy muy enojado, porque aún no me adoptan, queiro mimitos ahora ya!!!!",
      },
      {
        id: 8,
        nombre: "Tao",
        img: "",
        cantidad: 1,
        msje: "Quien me quiere adoptar?? :(",
      },
      {
        id: 9,
        nombre: "3 Gatitos",
        img: "",
        cantidad: 3,
        msje: "Somos tres gatitos y queremos que nos adopten. Miauu!!",
      },
    ],
    regiones: []
  },
  mutations: {
    agregarGatoState(state, payload) {
      const gatitosState = state.gatitos;
      const nuevoGatitoState = payload;
      gatitosState.push(nuevoGatitoState);
    },
    cargarRegiones(state,payload) {
      const carga = payload;
      if(!carga) return;
      state.regiones = payload
    }
  },
  actions: {
    async getData({commit}) {
      const url = "https://us-central1-apis-varias-mias.cloudfunctions.net/regiones_comunas";
      try {
        const req = await axios(url);
        const data = req.data;
        const filtrados = data.map(obj => {
          return {
            id: obj.id_region,
            region: obj.region
          }
        }).filter((item,i,regiones) => regiones.findIndex(el => el.id === item.id) === i);
        commit("cargarRegiones", filtrados);
      } catch (error) {
        console.log(error);
      }
    }
  },
});
