<template>
  <div class="dashboard">
    <h1>Dashboard:</h1>
    <section>
      <p>
        <small>language: {{device.lang}}</small>
      </p>
      <p>
        <small>os: {{device.os}}</small>
      </p>
      <p>
        <small>height: {{device.height}}</small>
      </p>
      <p>
        <small>width: {{device.width}}</small>
      </p>
    </section>
    <Button
      :background="brand.color.secondary"
      :text="'white'"
      :disabled="false"
      @click="() => {this.$router.push('/')}"
    >go to login</Button>
  </div>
</template>

<script>
import Button from "@/components/Button";
export default {
  name: "dashboard",
  props: ["device", "brand"],
  components: {
    Button
  }
};
</script>

<style>
</style>
