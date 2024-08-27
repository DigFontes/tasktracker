<template>
  <section class="projects">
    <h1 class="title">Projects</h1>
    <form @submit.prevent="salvar">
      <div class="field">
        <label for="projectName" class="label"> Nome do Projeto </label>
        <input
          type="text"
          class="input"
          v-model="projectName"
          id="projetctname"
        />
        <div class="field">
          <button class="button" type="submit">Salvar</button>
        </div>
      </div>
    </form>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in projects" :key="project.id">
          <td>{{ project.id }}</td>
          <td>{{ project.nome }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { useStore } from "@/store";
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "ProjetosPage",
  data() {
    return {
      projectName: "",
    };
  },
  methods: {
    salvar() {
      this.store.commit("ADD_PROJECT", this.projectName);
      this.projectName = "";
    },
  },
  setup() {
    const store = useStore();
    return {
      store,
      projects: computed(() => store.state.projects),
    };
  },
});
</script>

<style scoped>
.projects {
  padding: 1.25rem;
}
</style>
