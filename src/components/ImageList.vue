<template>
  <div>
    <div>image List {{ allImages.length }}</div>
    <img
      v-for="image in allImages"
      :src="image.link"
      :key="image.id"
      alt="image"
      class="image"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ImageList",
  computed: {
    ...mapGetters(["allImages"]),
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
.image {
  width: 300px;
}
</style>