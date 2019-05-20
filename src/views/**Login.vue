<template>
  <bg-primary id="login" :brand="brand">
    <img src="@/assets/logo.svg" width="200">
    <p>Hello</p>
    <SecondaryButton :brand="brand" :disabled="false">go to dash</SecondaryButton>
  </bg-primary>
</template>

<script>
export default {
  name: "login",
  props: ["device", "brand"],
  components: {}
};
</script>

<style lang="scss" scoped>
img {
  // flex: 1 0 auto;
  width: 12rem;
}
</style>

