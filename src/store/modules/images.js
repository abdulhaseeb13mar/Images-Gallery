import { router } from "../../main";
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
  uploadImages: async function({ rootState }, event) {
    const images = event.target.files;
    await api.upload(images, rootState.auth.token);
    router.push("/");
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
