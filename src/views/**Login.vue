<template>
  <bg-primary id="login" :brand="brand">
    <content-light :brand="brand">
      <btn-primary
        :brand="brand"
        :isDisabled="false"
        :action="() => showAlert('primary')"
      >primary button</btn-primary>
      <btn-primary
        :brand="brand"
        :isDisabled="true"
        :action="() => showAlert('primary')"
      >primary button</btn-primary>
      <btn-secondary
        :brand="brand"
        :isDisabled="false"
        :action="() => showAlert('secondary')"
      >secondary button</btn-secondary>
      <btn-secondary
        :brand="brand"
        :isDisabled="true"
        :action="() => showAlert('secondary')"
      >secondary button</btn-secondary>
      <btn-tertiary
        :brand="brand"
        :isDisabled="false"
        :action="() => showAlert('tertiary')"
      >tertiary button</btn-tertiary>
      <btn-tertiary
        :brand="brand"
        :isDisabled="true"
        :action="() => showAlert('tertiary')"
      >tertiary button</btn-tertiary>
      <btn-quaternary
        :brand="brand"
        :isDisabled="false"
        :action="() => showAlert('quaternary')"
      >quaternary button</btn-quaternary>
      <btn-quaternary
        :brand="brand"
        :isDisabled="true"
        :action="() => showAlert('quaternary')"
      >quaternary button</btn-quaternary>
    </content-light>
  </bg-primary>
</template>

<script>
export default {
  name: "login",
  props: ["device", "brand"],
  components: {},
  methods: {
    showAlert(type) {
      alert("clicked " + type);
    }
  }
};
</script>