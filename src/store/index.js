import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import firebase from "firebase";
import { db } from "../../firebase";
// import { storage } from "../../firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gatitos: [],
    gatitosDB: [],
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
    mostrarTabla: {
      nombre: "",
      cantidad: "",
      mensaje: "",
      id: "",
    },
    movil: "",
    logueado: false,
  },
  getters: {
    totalGatitos(state) {
      return state.gatitosDB;
    },
  },
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
    setMovil(state, payload) {
      if (!payload) return;
      state.movil = payload;
    },
    getTabla(state, payload) {
      const telefono = payload;
      if (!telefono) return;
      state.gatitosDB.forEach((el) => {
        if (el.telefono === telefono) {
          state.mostrarTabla.nombre = el.nombre;
          state.mostrarTabla.cantidad = el.cantidad;
          state.mostrarTabla.mensaje = el.mensaje;
          state.mostrarTabla.id = el.id;
        }
      });
    },
    setEditar(state) {
      state.editar = true;
    },
    updateState(state, payload) {
      const updateGato = payload;
      if (!updateGato) return;
      state.gatitosDB.forEach((el) => {
        if (el.id === updateGato.id) {
          el.nombre = updateGato.nombre;
          el.cantidad = updateGato.cantidad;
          el.mensaje = updateGato.mensaje;
        }
      });
    },
    deleteState(state, payload) {
      const gatoId = payload.id;
      if (!gatoId) return;
      const finder = state.gatitosDB.find((el) => el.id === gatoId);
      const i = state.gatitosDB.indexOf(finder);
      state.gatitosDB.splice(i, 1);
    },
    setLogin(state) {
      state.logueado = true;
    },
  },
  actions: {
    async getLog({ commit }) {
      try {
        const log = localStorage.getItem("login");
        if (log === "logueado") commit("setLogin", log);
        console.log(log);
      } catch (error) {
        console.log(error);
      }
    },
    async logOut() {
      try {
        await firebase.auth().signOut();
        localStorage.setItem("login", "noLogueado");
        const log = localStorage.getItem("login");
        location.reload();
        if (log != "logueado") this.commit("setLogin", log);
      } catch (error) {
        console.log(error);
      }
    },
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
      const nuevoGatito = payload;
      if (!nuevoGatito) return;
      // commit("agregarGatoState", nuevoGatito);
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
    //update
    async updateDB({ commit }, payload) {
      const obj = payload;
      if (!obj) return;
      const id = obj.id;
      commit("updateState", obj);
      try {
        const req = await db.collection("gatitosDB").doc(id).update({
          nombre: obj.nombre,
          cantidad: obj.cantidad,
          mensaje: obj.mensaje,
        });
        if (!req) return;
      } catch (error) {
        console.log(error);
      }
    },
    //Delete
    async deleteDB({ commit }, payload) {
      const deleteGato = payload;
      if (!deleteGato) return;
      const id = deleteGato.id;
      commit("deleteState", deleteGato);
      try {
        await db.collection("gatitosDB").doc(id).delete();
      } catch (error) {
        console.log(error);
      }
    },
  },
});
