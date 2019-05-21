<template>
  <div>
    <section>
      <h1>Buttons</h1>
      <btn-primary
        :brand="brand"
        :isDisabled="false"
        :action="() => showAlert('primary')"
      >primary button</btn-primary>
      <btn-secondary
        :brand="brand"
        :isDisabled="false"
        :action="() => showAlert('secondary')"
      >secondary button</btn-secondary>
      <btn-tertiary
        :brand="brand"
        :isDisabled="false"
        :action="() => showAlert('tertiary')"
      >tertiary button</btn-tertiary>
      <btn-quaternary
        :brand="brand"
        :isDisabled="false"
        :action="() => showAlert('quaternary')"
      >quaternary button</btn-quaternary>
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

