<template>
  <bgTemplate :background="brand.color.primary" :text="brand.color.light">
    <slot></slot>
  </bgTemplate>
</template>

<script>
import bgTemplate from "./*bgTemplate";
export default {
  name: "bg-primary",
  props: ["brand"],
  components: { bgTemplate }
};
</script>