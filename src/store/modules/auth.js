import api from "../../api/imgur";

const state = {
  token: null,
};

const getters = {
  isLoggedIn: function(state) {
    return !!state.token;
  },
};

const mutations = {
  setToken: function(state, token) {
    state.token = token;
  },
};

const actions = {
  login: function() {
    api.login();
  },
  logout: function({ commit }) {
    commit("setToken", null);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
