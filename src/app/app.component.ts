import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Matricula } from './model/matricula';
import { Curso } from './model/curso';
import { MatriculaService } from './service/matricula.service';
import { Estudiante } from './model/estudiante';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
],
providers: [MatriculaService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  estudiantes: Estudiante[] = [];
  cursos: Curso[] = [];
  selectedEstudianteId: number = 0;
  selectedCursos: Curso[] = [];

  constructor(private matriculaService: MatriculaService) {}

  ngOnInit(): void {
    this.loadEstudiantes();
    this.loadCursos();
  }

  loadEstudiantes(): void {
    this.matriculaService.getEstudiantes().subscribe(estudiantes => {
      this.estudiantes = estudiantes;
    });
  }

  loadCursos(): void {
    this.matriculaService.getCursos().subscribe(cursos => {
      this.cursos = cursos;
    });
  }

  registrarMatricula(): void {
    const nuevaMatricula: Matricula = {
      id: 0,  // El id será generado automáticamente por JSON Server
      estudianteId: this.selectedEstudianteId,
      cursos: this.selectedCursos
    };

    this.matriculaService.registrarMatricula(nuevaMatricula).subscribe(matricula => {
      alert(`Matrícula registrada con éxito para el estudiante ID: ${matricula.estudianteId}`);
    });
  }
  onCursoSelect(event: any, curso: Curso): void {
    if (event.target.checked) {
      this.selectedCursos.push(curso);
    } else {
      this.selectedCursos = this.selectedCursos.filter(c => c.id !== curso.id);
    }
  }

}
