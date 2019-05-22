<template>
  <section>
    <form>
      <StyledFieldset>
        <i class="fas fa-user" :style="{'padding-left': '0.5rem'}"></i>
        <StyledInput v-model="username" spellcheck="false"/>
        <i class="fas fa-check" :style="{'padding-right': '0.5rem'}"></i>
      </StyledFieldset>
    </form>
    {{username}}
  </section>
</template>

<script>
import StyledFieldset from "@/components/input/StyledFieldset";
import StyledInput from "@/components/input/StyledInput";
export default {
  name: "test",
  props: ["device", "brand"],
  components: { StyledInput, StyledFieldset },
  data() {
    return {
      username: "test_merchant"
    };
  }
};
</script>

<style lang="scss" scoped>
section {
  text-align: center;
  form {
    margin: 0 auto;
    width: fit-content;
    margin-top: 50vh;
  }
}
</style>
