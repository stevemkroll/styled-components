<template>
  <div>
    <section>
      <h1>Buttons</h1>
      <btn-success
        :brand="brand"
        :disabled="false"
        :action="() => showAlert('success')"
      >success button</btn-success>
      <btn-info :brand="brand" :disabled="false" :action="() => showAlert('info')">info button</btn-info>
      <btn-warning
        :brand="brand"
        :disabled="false"
        :action="() => showAlert('warning')"
      >warning button</btn-warning>
      <btn-error :brand="brand" :disabled="false" :action="() => showAlert('error')">error button</btn-error>
    </section>
    <section>
      <h1>Tags</h1>
      <tag-success :brand="brand">success</tag-success>
      <tag-info :brand="brand">info</tag-info>
      <tag-warning :brand="brand">warning</tag-warning>
      <tag-error :brand="brand">error</tag-error>
    </section>
    <section>
      <h1>Inputs</h1>
      <input-user :brand="brand" v-model="user" :disabled="false"/>
      {{user}}
      <!-- <input-password :brand="brand"></input-password> -->
    </section>
  </div>
</template>

<script>
export default {
  name: "buttons",
  props: ["device", "brand"],
  components: {},
  data() {
    return {
      user: "steve"
    };
  },
  methods: {
    showAlert(type) {
      alert("clicked " + type);
    }
  }
};
</script>

