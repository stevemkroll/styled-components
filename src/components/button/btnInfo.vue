<template>
  <btnTemplate
    :background="brand.color.info"
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
  name: "btn-info",
  props: ["brand", "isDisabled", "action"],
  components: { btnTemplate }
};
</script>