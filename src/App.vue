<template>
  <div id="app">
    <router-view :device="device"/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "app",
  computed: {
    ...mapGetters(["device"])
  },
  methods: {
    ...mapActions(["update"])
  },
  mounted() {
    this.update({
      os: window.navigator.userAgent,
      lang: window.navigator.language,
      height: window.outerHeight,
      width: window.outerWidth
    });
  }
};
</script>

<style>
</style>


