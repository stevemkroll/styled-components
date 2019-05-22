<template>
  <inputTemplate
    :background="brand.input.background"
    :text="brand.input.text"
    :border="brand.input.border"
    :success="brand.color.success"
    :modifier="brand.size.modifier"
    :hasErrors="this.hasErrors"
  >
    <i class="fas fa-key"></i>
    <slot></slot>
    <i class="fas fa-check"></i>
  </inputTemplate>
</template>

<script>
import inputTemplate from "./*inputTemplate";
export default {
  name: "input-password",
  props: ["brand", "hasErrors"],
  components: { inputTemplate }
};
</script>