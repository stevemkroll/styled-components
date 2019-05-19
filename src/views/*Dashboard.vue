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
    <router-link to="/">go to login</router-link>
  </div>
</template>

<script>
export default {
  name: "dashboard",
  props: ["device"]
};
</script>

<style>
</style>
