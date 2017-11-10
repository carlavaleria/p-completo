
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-cursos',
  templateUrl: './add-cursos.component.html',
  styleUrls: ['./add-cursos.component.css']
})

export class AddCursosComponent implements OnInit {
  
  emitirCursoLista = new EventEmitter();
 
  constructor(private http: HttpClient) { }

  nome:string = "";
  duracao:string = "";

  ngOnInit() {
    
  }
 
  onclick() {
   const curso = {
        nome: this.nome,
        duracao: this.duracao
      };
      
      if(( this.nome != undefined ) && ( this.nome != "") 
      && ( this.duracao != "") && ( this.duracao != undefined)){
        this.http.post
          ('http://localhost:8080/adicionarCursos', curso)
          .subscribe(
            data => {
              console.log(data);
              this.emitirCursoLista.emit(data);
            }
          );
          
          alert("Adicionado com sucesso");
        } else{
          console.log("erro");
          alert("Erro!!!  Não é permitido deixar campos em branco!");
        }
        this.nome = "";
        this.duracao = "";     
  }
 
}
