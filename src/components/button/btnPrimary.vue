<template>
  <btnTemplate
    :background="brand.color.primary"
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
  name: "btn-primary",
  props: ["brand", "isDisabled", "action"],
  components: { btnTemplate }
};
</script>