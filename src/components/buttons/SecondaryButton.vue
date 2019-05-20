<template>
  <buttonTemplate
    :background="brand.color.secondary"
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
  name: "SecondaryButton",
  props: ["brand", "isDisabled", "action"],
  components: { buttonTemplate }
};
</script>