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
    <router-link to="/dashboard">go to dashboard</router-link>
  </div>
</template>

<script>
export default {
  name: "login",
  props: ["device", "brand"]
};
</script>

<style>
</style>
