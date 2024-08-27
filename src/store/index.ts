import IProject from "@/interfaces/IProject";
import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

interface Estado {
  projects: IProject[];
}

export const key: InjectionKey<Store<Estado>> = Symbol();

export const store = createStore<Estado>({
  state: {
    projects: [
      {
        id: new Date().toISOString(),
        nome: "TypeScript",
      },
      {
        id: new Date().toISOString(),
        nome: "Vue",
      },
      {
        id: new Date().toISOString(),
        nome: "Vuex",
      },
    ],
  },
});
