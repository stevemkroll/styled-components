<template>
  <bgTemplate :background="brand.color.light" :text="brand.color.dark">
    <slot></slot>
  </bgTemplate>
</template>

<script>
import bgTemplate from "./*bgTemplate";
export default {
  name: "bg-light",
  props: ["brand"],
  components: { bgTemplate }
};
</script>