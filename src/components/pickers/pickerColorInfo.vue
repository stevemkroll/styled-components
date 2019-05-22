<template>
  <chrome-color-picker
    :value="this.brand.color.info"
    @input="updateColorInfo($event.hex)"
    :disableAlpha="true"
  />
</template>

<script>
import { Chrome } from "vue-color";
import { mapMutations } from "vuex";
export default {
  name: "picker-color-info",
  components: {
    "chrome-color-picker": Chrome
  },
  props: ["brand"],
  methods: {
    ...mapMutations(["updateColorInfo"])
  }
};
</script>

<style>
</style>
