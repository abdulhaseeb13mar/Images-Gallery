// import api from "../../api/imgur";
// import qs from "qs";
// import { router } from "../../main";
import api from "../../api/imgur";

const state = {
  images: [],
};

const getters = {
  allImages: function(state) {
    return state.images;
  },
};

const mutations = {
  setImages: function(state, images) {
    state.images = images;
  },
};

const actions = {
  fetchImages: async function({ rootState, commit }) {
    const response = await api.fetchImages(rootState.auth.token);
    console.log(response);
    commit("setImages", response.data.data);
  },
  uploadImage: function() {},
};

export default {
  state,
  getters,
  actions,
  mutations,
};
