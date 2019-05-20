<template>
  <btnTemplate
    :background="brand.color.secondary"
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
  name: "SecondaryButton",
  props: ["brand", "isDisabled", "action"],
  components: { btnTemplate }
};
</script>