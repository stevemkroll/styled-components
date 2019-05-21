<template>
  <div>
    <section>
      <h1>Buttons</h1>
      <btn-success
        :brand="brand"
        :isDisabled="false"
        :action="() => showAlert('success')"
      >success button</btn-success>
      <btn-info :brand="brand" :isDisabled="false" :action="() => showAlert('info')">info button</btn-info>
      <btn-warning
        :brand="brand"
        :isDisabled="false"
        :action="() => showAlert('warning')"
      >warning button</btn-warning>
      <btn-error :brand="brand" :isDisabled="false" :action="() => showAlert('error')">error button</btn-error>
    </section>
    <section>
      <h1>Tags</h1>
      <tag-success :brand="brand">success</tag-success>
      <tag-info :brand="brand">info</tag-info>
      <tag-warning :brand="brand">warning</tag-warning>
      <tag-error :brand="brand">error</tag-error>
    </section>
  </div>
</template>

<script>
export default {
  name: "buttons",
  props: ["device", "brand"],
  components: {},
  methods: {
    showAlert(type) {
      alert("clicked " + type);
    }
  }
};
</script>

