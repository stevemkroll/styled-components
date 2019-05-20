<template>
  <div id="app">
    <transition name="fade">
      <router-view :device="getDevice" :brand="getBrand"/>
    </transition>
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
    window.addEventListener("resize", () => {
      this.updateDevice({
        os: window.navigator.userAgent,
        lang: window.navigator.language,
        height: window.innerHeight,
        width: window.innerWidth
      });
    });
    this.updateDevice({
      os: window.navigator.userAgent,
      lang: window.navigator.language,
      height: window.innerHeight,
      width: window.innerWidth
    });
    this.updateBrand({
      color: {
        primary: "#2d2341",
        secondary: "#7887e6",
        tertiary: "#ff5073",
        quaternary: "#00c8d2",
        light: "#ffffff",
        dark: "#666666"
      }
    });
  }
};
</script>


