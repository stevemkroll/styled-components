<template>
  <inputTemplate
    :background="brand.input.background"
    :text="brand.input.text"
    :border="brand.input.border"
    :modifier="brand.size.modifier"
    :disabled="disabled"
  >
    <i class="fas fa-user"></i>
    <slot>
      <input placeholder="username">
    </slot>
    <i class="fas fa-check"></i>
  </inputTemplate>
</template>

<script>
import inputTemplate from "./*inputTemplate";
export default {
  name: "input-user",
  props: ["brand", "disabled", "placeholder"],
  components: { inputTemplate }
};
</script>