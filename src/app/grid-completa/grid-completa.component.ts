import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grid-completa',
  templateUrl: './grid-completa.component.html',
  styleUrls: ['./grid-completa.component.css']
})
export class GridCompletaComponent implements OnInit {

  @Input("metodoListar")  metodoListar : any = {};

  @Output() emitirCursoLista = new EventEmitter();

  constructor(private http : HttpClient) { }

  ngOnInit() {
    
  }

  deleteCurso(id): void {
          this.http.delete
          ('http://localhost:8080/deletarCursos/'+id)
          .subscribe(
            data => {
              this.metodoListar = (data);
              const teste:string = "curso";
              this.emitirCursoLista.emit(teste);
            }
          );
        }

alterarCursos(id, nomeInput, duracaoInput) {
    const curso = {
        id: id,
        nome: nomeInput,
        duracao: duracaoInput
    };
            this.http.put('http://localhost:8080/alterarCursos', curso)
            .subscribe(
                data => {
                 //this.cursos = data;
                  console.log(data);
                  this.metodoListar = data;
                  this.emitirCursoLista.emit(curso);
                }
              );
    
          }

          metodoAddListar(curso){
            this.metodoListar.push(curso);
            //return this.ngOnInit();
          }     
}
