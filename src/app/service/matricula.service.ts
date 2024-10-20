import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudiante } from '../model/estudiante';
import { Curso } from '../model/curso';
import { Matricula } from '../model/matricula';

@Injectable({
  providedIn: 'root'
})
export class MatriculaService {
  // private apiUrl = 'http://localhost:3000';
  private apiUrl = 'https://humble-robot-q79766xxp666347j9-3000.app.github.dev'

  constructor(private http: HttpClient) {}

  // Obtener estudiantes
  getEstudiantes(): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(`${this.apiUrl}/estudiantes`);
  }

  // Obtener cursos
  getCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(`${this.apiUrl}/cursos`);
  }

  // Registrar una nueva matrícula
  registrarMatricula(matricula: Matricula): Observable<Matricula> {
    return this.http.post<Matricula>(`${this.apiUrl}/matriculas`, matricula);
  }

  // Obtener todas las matrículas
  getMatriculas(): Observable<Matricula[]> {
    return this.http.get<Matricula[]>(`${this.apiUrl}/matriculas`);
  }
}
