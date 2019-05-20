<template>
  <bg-light id="login" :brand="brand">
    <content-light :brand="brand">
      <btn-secondary
        :brand="brand"
        :disabled="false"
        :action="() => this.$router.push('/dashboard')"
      >go to dash</btn-secondary>
    </content-light>
  </bg-light>
</template>

<script>
export default {
  name: "login",
  props: ["device", "brand"],
  components: {}
};
</script>