<template>
  <div id="app">
    <router-view :device="getDevice" :brand="getBrand"/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "app",
  computed: {
    ...mapGetters(["getDevice", "getBrand"])
  },
  methods: {
    ...mapActions(["updateDevice", "updateBrand"])
  },
  mounted() {
    this.updateDevice({
      os: window.navigator.userAgent,
      lang: window.navigator.language,
      height: window.outerHeight,
      width: window.outerWidth
    });
    this.updateBrand({
      color: {
        primary: "#2d2341",
        secondary: "#7887e6",
        tertiary: "#ff5073",
        quaternary: "#00c8d2"
      }
    });
  }
};
</script>

<style>
</style>


