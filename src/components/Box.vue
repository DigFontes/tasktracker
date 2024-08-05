<template>
  <div class="box has-text-weight-bold">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "BoxComponenete",
});
</script>

<style scoped>
.box {
  background: #d3d3d3;
}
</style>
