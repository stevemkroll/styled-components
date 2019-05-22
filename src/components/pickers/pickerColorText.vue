<template>
  <chrome-color-picker
    :value="this.brand.input.text"
    @input="updateColorText($event.hex)"
    :disableAlpha="true"
  />
</template>

<script>
import { Chrome } from "vue-color";
import { mapMutations } from "vuex";
export default {
  name: "picker-color-text",
  components: {
    "chrome-color-picker": Chrome
  },
  props: ["brand"],
  methods: {
    ...mapMutations(["updateColorText"])
  }
};
</script>

<style>
</style>
