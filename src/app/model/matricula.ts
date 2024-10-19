import { Curso } from "./curso";

export interface Matricula {
  id: number;
  estudianteId: number;
  cursos: Curso[];
}
