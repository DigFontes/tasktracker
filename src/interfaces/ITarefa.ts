import IProject from "./IProject";

export default interface ITarefa {
  duracaoEmSegundos: number;
  descricao: string;
  project: IProject;
}
