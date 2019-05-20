<template>
  <buttonTemplate
    :background="brand.color.primary"
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
  name: "PrimaryButton",
  props: ["brand", "isDisabled", "action"],
  components: { buttonTemplate }
};
</script>