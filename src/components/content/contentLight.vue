<template>
  <contentTemplate :background="brand.color.light" :text="brand.color.primary">
    <slot></slot>
  </contentTemplate>
</template>

<script>
import contentTemplate from "./*contentTemplate";
export default {
  name: "content-light",
  props: ["brand"],
  components: { contentTemplate }
};
</script>