<template>
  <form>
    <input-user :brand="brand" :hasErrors="errors.first('username') ? true : false">
      <input
        type="text"
        name="username"
        v-model="username"
        autocomplete="current-password"
        v-validate.initial="'required|email'"
      >
    </input-user>
    <input-password :brand="brand" :hasErrors="errors.first('password') ? true : false">
      <input
        type="password"
        name="password"
        v-model="password"
        autocomplete="current-password"
        v-validate.initial="'required|min:6'"
      >
    </input-password>
    <btn-success :brand="brand">Login</btn-success>
  </form>
</template>

<script>
export default {
  name: "test",
  props: ["device", "brand"],
  data() {
    return {
      username: "",
      password: ""
    };
  }
};
</script>
