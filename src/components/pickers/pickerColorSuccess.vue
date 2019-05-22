<template>
  <chrome-color-picker
    :value="this.brand.color.success"
    @input="updateColorSuccess($event.hex)"
    :disableAlpha="true"
  />
</template>

<script>
import { Chrome } from "vue-color";
import { mapMutations } from "vuex";
export default {
  name: "picker-color-success",
  components: {
    "chrome-color-picker": Chrome
  },
  props: ["brand"],
  methods: {
    ...mapMutations(["updateColorSuccess"])
  }
};
</script>

<style>
</style>
