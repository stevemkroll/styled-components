<template>
  <btnTemplate
    :background="brand.color.tertiary"
    :text="brand.color.light"
    :disabled="isDisabled"
    @click="() => action()"
  >
    <slot></slot>
  </btnTemplate>
</template>

<script>
import btnTemplate from "./*btnTemplate";
export default {
  name: "TertiaryButton",
  props: ["brand", "isDisabled", "action"],
  components: { btnTemplate }
};
</script>