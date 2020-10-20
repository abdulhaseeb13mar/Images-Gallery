<template>
  <div>
    <div v-if="isLoggedIn" class="image-container">
      <img
        v-for="image in allImages"
        :src="image.link"
        :key="image.id"
        alt="image"
        class="image"
      />
    </div>
    <div v-else class="login_container">
      <img :src="ImgurIcon" alt="" />
      <h2 class="login">
        Don't have an imgur account?
        <a href="https://imgur.com/" target="_blank">Register Here</a>
      </h2>
      <h4 class="login-here">Then click on 'Log in' here to get started</h4>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ImgurIcon from "../assets/imgur.svg";
export default {
  name: "ImageList",
  data: function () {
    return { ImgurIcon };
  },
  computed: {
    ...mapGetters(["allImages", "isLoggedIn"]),
  },
  methods: {
    ...mapActions(["fetchImages"]),
  },
  created: function () {
    this.fetchImages();
  },
};
</script>

<style scoped>
.image-container {
  column-count: 3;
  column-gap: 0;
}
.login_container {
  margin-top: 5rem;
}

.login {
  margin-top: 30px;
}
.login,
.login-here {
  text-align: center;
}

img {
  max-width: 100%;
  padding: 5px;
}
</style>