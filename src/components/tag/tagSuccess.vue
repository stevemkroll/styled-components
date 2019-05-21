<template>
  <tagTemplate
    :background="brand.color.success"
    :text="brand.button.text"
    :modifier="brand.size.modifier"
    disabled
  >
    <i class="fas fa-check-circle" :style="{'padding-right': (brand.size.modifier / 2) + 'px'}"></i>
    <slot></slot>
  </tagTemplate>
</template>

<script>
import tagTemplate from "./*tagTemplate";
export default {
  name: "tag-success",
  props: ["brand"],
  components: { tagTemplate }
};
</script>