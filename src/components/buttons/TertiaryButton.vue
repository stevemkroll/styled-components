<template>
  <buttonTemplate
    :background="brand.color.tertiary"
    :text="brand.color.light"
    :disabled="isDisabled"
    @click="() => action()"
  >
    <slot></slot>
  </buttonTemplate>
</template>

<script>
import buttonTemplate from "./button_template";
export default {
  name: "TertiaryButton",
  props: ["brand", "isDisabled", "action"],
  components: { buttonTemplate }
};
</script>