<template>
  <inputTemplate
    :background="brand.input.background"
    :text="brand.input.text"
    :border="brand.input.border"
    :modifier="brand.size.modifier"
    :disabled="disabled"
    :placeholder="placeholder"
  >
    <i class="fas fa-key"></i>
    <slot>
      <input placeholder="password" type="password">
    </slot>
    <i class="fas fa-check"></i>
  </inputTemplate>
</template>

<script>
import inputTemplate from "./*inputTemplate";
export default {
  name: "input-password",
  props: ["brand", "disabled", "placeholder"],
  components: { inputTemplate }
};
</script>