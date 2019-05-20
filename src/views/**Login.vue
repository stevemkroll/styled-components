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
      <PrimaryButton
        :brand="brand"
        :isDisabled="false"
        :action="() => {this.$router.push('/dashboard')}"
      >go to dashboard</PrimaryButton>
      <TertiaryButton
        :brand="brand"
        :isDisabled="true"
        :action="() => {this.$router.push('/dashboard')}"
      >go to dashboard</TertiaryButton>
    </section>
  </div>
</template>

<script>
export default {
  name: "login",
  props: ["device", "brand"],
  components: {}
};
</script>
