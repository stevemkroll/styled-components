<template>
  <tagTemplate
    :background="brand.color.info"
    :text="brand.color.light"
    :modifier="brand.size.modifier"
    disabled
  >
    <i class="fas fa-info-circle" :style="{'padding-right': (brand.size.modifier / 2) + 'px'}"></i>
    <slot></slot>
  </tagTemplate>
</template>

<script>
import tagTemplate from "./*tagTemplate";
export default {
  name: "tag-info",
  props: ["brand"],
  components: { tagTemplate }
};
</script>