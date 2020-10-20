<template>
  <div class="ui secondary pointing menu">
    <router-link to="/" class="item Header-Text">Image Storage</router-link>
    <div class="right menu">
      <div v-if="isLoggedIn" class="horizontal">
        <router-link to="/" class="item Header-Text">Galleries</router-link>
        <router-link to="upload" class="item Header-Text">Upload</router-link>
        <a class="item Header-Text" @click="logout">Logout</a>
      </div>
      <a v-else href="#" class="ui item Header-Text" @click="login">Login</a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "AppHeader",
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  methods: {
    ...mapActions(["login", "logout"]),
  },
};
</script>

<style scoped>
.horizontal {
  display: flex;
}
.Header-Text {
  font-size: 20px;
  font-weight: bold !important;
}
</style>
