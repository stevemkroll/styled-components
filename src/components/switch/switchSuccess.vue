<template>
  <!-- <label class="switch">
    <input type="checkbox" v-show="false" v-model="isChecked">
    <span class="slider"></span>
  </label>-->
  <switch-template
    :background="brand.switch.background"
    :toggle="brand.switch.toggle"
    :active="brand.color.success"
    :modifier="brand.size.modifier"
  >
    <input type="checkbox" @click="toggle()">
    <span class="slider"></span>
  </switch-template>
</template>

<script>
import switchTemplate from "./*switchTemplate";
export default {
  name: "switch-success",
  props: ["brand"],
  components: { switchTemplate },
  data() {
    return {
      isChecked: false
    };
  },
  methods: {
    toggle() {
      this.isChecked = false;
    }
  }
};
</script>
