<template>
  <div class="ui secondary pointing menu">
    <a href="/" class="active item">Image Storage</a>
    <div class="right menu">
      <a href="#" class="ui item" @click="login">Login</a>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AppHeader",
  methods: {
    ...mapActions(["login"]),
  },
};
</script>

<style scoped>
</style>

// http://localhost:8080/oauth2/callback#
// access_token=58eeb4d767a17bd5e1b48b72be6a95c748d17796
// &expires_in=315360000
// &token_type=bearer
// &refresh_token=182bfb7ba806f4e622e7d638785744fc8442ec46
// &account_username=haxeeb13
// &account_id=139798971