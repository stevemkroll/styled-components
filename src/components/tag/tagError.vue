<template>
  <tagTemplate
    :background="brand.color.error"
    :text="brand.color.light"
    :modifier="brand.size.modifier"
    disabled
  >
    <i class="fas fa-times-circle" :style="{'padding-right': (brand.size.modifier / 2) + 'px'}"></i>
    <slot></slot>
  </tagTemplate>
</template>

<script>
import tagTemplate from "./*tagTemplate";
export default {
  name: "tag-error",
  props: ["brand"],
  components: { tagTemplate }
};
</script>