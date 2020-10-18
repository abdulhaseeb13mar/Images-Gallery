import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import VueRouter from "vue-router";
import AuthHandler from "./components/AuthHandler.vue";
import UploadForm from "./components/UploadForm.vue";
import ImageList from "./components/ImageList.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: ImageList },
    { path: "/upload", component: UploadForm },
    { path: "/oauth2/callback", component: AuthHandler },
  ],
});

new Vue({
  router: router,
  store: store,
  render: (h) => h(App),
}).$mount("#app");
