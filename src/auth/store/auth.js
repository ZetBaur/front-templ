// import axios from "axios";
import Axios from "@/axios/reqAxios";

export default {
  namespaced: true,
  state() {
    return {
      token: localStorage.getItem("token"),
      refresh_token: localStorage.getItem("refresh_token")
    };
  },

  mutations: {
    setToken(state, data) {
      // state.token = data.auth_token;
      // state.refresh_token = data.refresh_token;

      localStorage.setItem("token", "Bearer " + data.auth_token);
      localStorage.setItem("refresh_token", data.refresh_token);
    },
    logout(state) {
      state.token = null;
      localStorage.removeItem("token");
    }
  },

  actions: {
    async login({ commit }, payload) {
      try {
        const { data } = await Axios.post(
          "manager-api/v2/auth/signIn",
          payload
        );
        commit("setToken", data);
        return data;
      } catch (e) {
        console.log(e);
      }
    }
  },
  getters: {
    token(state) {
      return state.token;
    },
    isLogedIn(_, getters) {
      return !!getters.token;
    }
  }
};
