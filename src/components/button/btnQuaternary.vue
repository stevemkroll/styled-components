<template>
  <btnTemplate
    :background="brand.color.quaternary"
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
  name: "btn-quaternary",
  props: ["brand", "isDisabled", "action"],
  components: { btnTemplate }
};
</script>