<template>
  <div>
    <section>
      <form>
        <input-user :brand="brand" :hasErrors="errors.first('username') ? true : false">
          <input
            type="text"
            name="username"
            v-model="username"
            placeholder="Email"
            autocomplete="current-password"
            spellcheck="false"
            v-validate.initial="'required|email'"
          >
        </input-user>
        <input-password :brand="brand" :hasErrors="errors.first('password') ? true : false">
          <input
            type="password"
            name="password"
            v-model="password"
            placeholder="Password"
            autocomplete="current-password"
            spellcheck="false"
            v-validate.initial="'required|min:6'"
          >
        </input-password>
        <btn-success
          :brand="brand"
          :disabled="errors.any()"
          :action="() => showAlert('success')"
        >login</btn-success>
      </form>
    </section>
    <section>
      <picker-color-success :brand="brand" class="picker"/>
      <picker-color-info :brand="brand" class="picker"/>
      <picker-color-text :brand="brand" class="picker"/>
    </section>
  </div>
</template>

<script>
export default {
  name: "login-form",
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
section {
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  padding: 5rem;
  .picker {
    margin: 1rem;
  }
}
form {
  width: 50%;
}
</style>

