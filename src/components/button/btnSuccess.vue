<template>
  <btnTemplate
    :background="brand.color.success"
    :text="brand.button.text"
    :modifier="brand.size.modifier"
    :disabled="disabled"
    @click="() => action()"
  >
    <slot></slot>
  </btnTemplate>
</template>

<script>
import btnTemplate from "./*btnTemplate";
export default {
  name: "btn-success",
  props: ["brand", "disabled", "action"],
  components: { btnTemplate }
};
</script>