<template>
  <buttonTemplate
    :background="brand.color.quaternary"
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
  name: "QuaternaryButton",
  props: ["brand", "isDisabled", "action"],
  components: { buttonTemplate }
};
</script>