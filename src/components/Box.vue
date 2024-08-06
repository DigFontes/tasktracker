<template>
  <div class="box has-text-weight-bold" :style="estilos">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BoxComponenete",
  data() {
    return {
      estilos: {
        backgroundColor: "#00111a",
      },
    };
  },
});
</script>
