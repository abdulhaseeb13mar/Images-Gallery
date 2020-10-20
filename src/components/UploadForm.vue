<template>
  <div>
    <div class="dropper">
      <input type="file" @change="uploadImages" multiple accept="image/*" />
      <span>Drag files here!</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "UploadForm",
  methods: {
    ...mapActions(["uploadImages"]),
  },
};
</script>

<style scoped>
.dropper {
  height: 30vh;
  border: 2px dashed black;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.modalTransparent {
  background-color: transparent;
  border: none;
  align-items: center;
}

.dropper:hover {
  background-color: #eee;
}

input {
  width: 100%;
  height: 30vh;
  position: absolute;
  opacity: 0;
}
</style>