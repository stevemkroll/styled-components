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
    <input type="checkbox" @click="toggle()" checked>
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

<style lang="scss" scoped>
label {
  margin: 8px;
}
// .switch {
//   position: relative;
//   display: inline-block;
//   width: calc(8px * 8);
//   height: calc(8px * 4);
// }
// .switch input {
//   opacity: 0;
//   width: 0;
//   height: 0;
//   display: none;
// }
// .slider {
//   position: absolute;
//   cursor: pointer;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background-color: #ccc;
//   -webkit-transition: 0.5s;
//   transition: 0.5s;
//   border-radius: calc(8px * 4);
// }

// .slider:before {
//   position: absolute;
//   content: "";
//   height: calc(8px * 3);
//   width: calc(8px * 3);
//   left: 4px;
//   bottom: 4px;
//   background-color: white;
//   -webkit-transition: 0.5s;
//   transition: 0.5s;
//   border-radius: 50%;
// }

// input:checked + .slider {
//   background-color: red;
// }

// input:checked + .slider:before {
//   -webkit-transform: translateX(calc(8px * 4));
//   -ms-transform: translateX(calc(8px * 4));
//   transform: translateX(calc(8px * 4));
// }
</style>
