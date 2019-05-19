<template>
  <div class="login">
    <h1>Login:</h1>
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
    <section>
      <Button
        :background="brand.color.primary"
        :text="'white'"
        :disabled="false"
        @click="() => {this.$router.push('/dashboard')}"
      >go to dashboard</Button>
      <Button
        :background="brand.color.primary"
        :text="'white'"
        :disabled="true"
        @click="() => {this.$router.push('/dashboard')}"
      >disabled</Button>
    </section>
  </div>
</template>

<script>
import Button from "@/components/Button";
export default {
  name: "login",
  props: ["device", "brand"],
  components: {
    Button
  }
};
</script>

<style>
</style>
