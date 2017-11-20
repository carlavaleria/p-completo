
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-cursos',
  templateUrl: './add-cursos.component.html',
  styleUrls: ['./add-cursos.component.css']
})

export class AddCursosComponent implements OnInit {
  
 @Output() emitirCursoLista = new EventEmitter();
 
  constructor(private http: HttpClient) { }


  ngOnInit() {
    
  }
 
  onclick(nome:string , duracao:string) {
    
   const curso = {
        nome: nome,
        duracao: duracao
      };
      
      if(( nome != undefined ) && ( nome != "") 
      && ( duracao != "") && ( duracao != undefined)){
        this.http.post
          ('http://localhost:8080/', curso)
          .subscribe(
            data => {
              console.log(data);
              this.emitirCursoLista.emit(curso);
            }
          );

          alert("Adicionado com sucesso");
        } else{
          console.log("erro");
          alert("Erro!!!  Não é permitido deixar campos em branco!");
        } 

      }
 
}
