<template>
  <form>
    <!-- <fieldset> -->
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
    <btn-success :brand="brand" :disabled="errors.any()" :action="() => showAlert('success')">login</btn-success>
    <!-- </fieldset> -->
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
  },
  methods: {
    showAlert(type) {
      alert("clicked " + type);
      (this.username = ""), (this.password = "");
    }
  }
};
</script>

<style lang="scss" scoped>
form {
  padding: 30vw;
}
</style>

