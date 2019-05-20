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
    <section>
      <!-- <SecondaryButton
        :brand="brand"
        :isDisabled="false"
        :action="() => {this.$router.push('/')}"
      >go to login</SecondaryButton>
      <QuaternaryButton
        :brand="brand"
        :isDisabled="true"
        :action="() => {this.$router.push('/')}"
      >go to login</QuaternaryButton>-->
    </section>
  </div>
</template>

<script>
export default {
  name: "dashboard",
  props: ["device", "brand"],
  components: {}
};
</script>