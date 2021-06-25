import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import firebase from "firebase";
// .replace("+", "")
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // gatitos: [
    //   {
    //     id: 0,
    //     nombre: "Almendra",
    //     img: "",
    //     cantidad: 1,
    //     msje: "Hola me llamo Almendra, mi dueña falleció y necesito una familia que me adopt, me de amor cariño y mucha comida. prrr prrr Miau!! ",
    //   },
    //   {
    //     id: 1,
    //     nombre: "Dientes",
    //     img: "",
    //     cantidad: 1,
    //     msje: "Me encontraron por el sector de avenida Macul y no encuentro mi familia hace meses, me quieres adoptar?? Miauu!!",
    //   },
    //   {
    //     id: 2,
    //     nombre: "Recién nacido",
    //     img: "",
    //     cantidad: 1,
    //     msje: "Hola mis hermanos enconrtaron familia y yo aún estoy solito esperando prrr prrr!!",
    //   },
    //   {
    //     id: 3,
    //     nombre: "3 Gatitos",
    //     img: "",
    //     cantidad: 3,
    //     msje: "Somos 3 michis recién nacidos esperando el calor de un hogar Miau!!",
    //   },
    //   {
    //     id: 4,
    //     nombre: "2 gatitos",
    //     img: "",
    //     cantidad: 2,
    //     msje: "Somos dos gatitos de 3 meses queremos mucho cariño y una familia.",
    //   },
    //   {
    //     id: 5,
    //     nombre: "Lince",
    //     img: "",
    //     cantidad: 1,
    //     msje: "Me encontraron en la Florida a punto de ser comido por un perro, ayúdamen necesito que me rescaten. prr prr.",
    //   },
    //   {
    //     id: 6,
    //     nombre: "Rayo",
    //     img: "",
    //     cantidad: 1,
    //     msje: "Hola estoy en la veterinaria San Martin de Vicuña Mackenna y busco un hogar",
    //   },
    //   {
    //     id: 7,
    //     nombre: "Rony",
    //     img: "",
    //     cantidad: 1,
    //     msje: "Hola estoy muy enojado, porque aún no me adoptan, queiro mimitos ahora ya!!!!",
    //   },
    //   {
    //     id: 8,
    //     nombre: "Tao",
    //     img: "",
    //     cantidad: 1,
    //     msje: "Quien me quiere adoptar?? :(",
    //   },
    //   {
    //     id: 9,
    //     nombre: "3 Gatitos",
    //     img: "",
    //     cantidad: 3,
    //     msje: "Somos tres gatitos y queremos que nos adopten. Miauu!!",
    //   },
    // ],

    gatitos: [],
    gatitosDB: [],
    gatos: {
      nombre: "",
      cantidad: "",
      telefono: "",
      region: "",
      msje: "",
      id: "",
    },
    regiones: [],
    regUsuario: {
      nombre: "",
      celular: "",
      email: "",
      contraseña: "",
      validaPass: "",
    },
    nuevoUsuario: [],
    registro: {
      email: "",
      contraseña: "",
    },
    // editar: false,
    mostrarTabla: {
      nombre: "",
      cantidad: "",
      mensaje: "",
      id: "",
    },
    movil: ""
  },
  // getters: {
  //   getPayload(payload) {
  //     console.log(payload);
  //   }
  // },
  mutations: {
    cargarGatitosDB(state, payload) {
      const carga = payload;
      if (!carga) return;
      state.gatitosDB.push(carga);
    },
    agregarGatoState(state, payload) {
      const gatitosState = state.gatitosDB;
      const nuevoGatitoState = payload;
      gatitosState.push(nuevoGatitoState);
    },
    cargarRegiones(state, payload) {
      const carga = payload;
      if (!carga) return;
      state.regiones = payload;
    },
    agregarStateUsuario(state, payload) {
      const usuario = state.nuevoUsuario;
      usuario.push(payload);
    },
    agregarTabla(state, payload) {
      const carga = payload;
      state.mostrarTabla = carga;
    },
    setMovil(state, payload) {
      if(!payload) return;
      state.movil = payload;
    }
  },
  actions: {
    //Regiones
    async getData({ commit }) {
      const url =
        "https://us-central1-apis-varias-mias.cloudfunctions.net/regiones_comunas";
      try {
        const req = await axios(url);
        const data = req.data;
        const filtrados = data
          .map((obj) => {
            return {
              id: obj.id_region,
              region: obj.region,
            };
          })
          .filter(
            (item, i, regiones) =>
              regiones.findIndex((el) => el.id === item.id) === i
          );
        commit("cargarRegiones", filtrados);
      } catch (error) {
        console.log(error);
      }
    },
    //Traer gatitos desde DB
    async getGatitosDB({ commit }) {
      const db = firebase.firestore();
      try {
        const req = await db.collection("gatitosDB").get();
        if (req) {
          req.docs.forEach((el) => {
            const gatos = el.data();
            const id = el.id;
            gatos.id = id;
            commit("cargarGatitosDB", gatos);
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
    //Registrar usuario
    async nuevoUsuario({ commit }, payload) {
      const db = firebase.firestore();
      if (!payload) return;
      const nombre = payload.nombre;
      const celular = payload.celular;
      const email = payload.email;
      const contraseña = payload.contraseña;
      commit("agregarStateUsuario", payload);
      try {
        const reqUsers = await db.collection("usuarios").get();
        const finder = reqUsers.docs.find((el) => el.email === email);
        if (!finder) {
          await firebase
            .auth()
            .createUserWithEmailAndPassword(email, contraseña);
          await db.collection("usuarios").add({
            nombre,
            celular,
            email,
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
    //Crear Gatito
    async agregarGato({ commit }, payload) {
      const db = firebase.firestore();
      const nuevoGatito = await payload;
      if (!payload) return;
      try {
        const req = await db.collection("gatitosDB").get();
        const finder = req.docs.find(
          (el) => el.data().telefono === nuevoGatito.telefono
        );
        if (!finder) {
          await db.collection("gatitosDB").add(nuevoGatito);
          commit("agregarGatoState", nuevoGatito);
        }
      } catch (error) {
        console.log(error);
      }
    },
    //getUpdateData



    async getTabla({commit}, payload) {
      const db = firebase.firestore();
      const telefono = payload;
      if (!telefono) return;
      try {
        const req = await db.collection("gatitosDB").get();
        req.docs.forEach((el) => {
          if (el.data().telefono === telefono) {
            const obj = {
              nombre: el.data().nombre,
              cantidad: el.data().cantidad,
              mensaje: el.data().mensaje,
              id: el.id,
            };
            commit("agregarTabla", obj);
          }
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
});
