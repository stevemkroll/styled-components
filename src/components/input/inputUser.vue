<template>
  <inputTemplate
    :background="brand.input.background"
    :text="brand.input.text"
    :border="brand.input.border"
    :success="brand.color.success"
    :focus="brand.color.info"
    :modifier="brand.size.modifier"
    :hasErrors="this.hasErrors"
  >
    <i class="fas fa-user"></i>
    <slot></slot>
    <i class="fas fa-check"></i>
  </inputTemplate>
</template>

<script>
import inputTemplate from "./*inputTemplate";
export default {
  name: "input-user",
  props: ["brand", "hasErrors"],
  components: { inputTemplate }
};
</script>