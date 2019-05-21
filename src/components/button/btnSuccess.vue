<template>
  <btnTemplate
    :background="brand.color.success"
    :text="brand.button.text"
    :modifier="brand.size.modifier"
    :disabled="isDisabled"
    @click="() => action()"
  >
    <slot></slot>
  </btnTemplate>
</template>

<script>
import btnTemplate from "./*btnTemplate";
export default {
  name: "btn-success",
  props: ["brand", "isDisabled", "action"],
  components: { btnTemplate }
};
</script>