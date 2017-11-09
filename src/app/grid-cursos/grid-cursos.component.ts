import { Component, OnInit , Output , EventEmitter } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-grid-cursos',
  templateUrl: './grid-cursos.component.html',
  styleUrls: ['./grid-cursos.component.css']
})
export class GridCursosComponent implements OnInit {
  
  @Output() atualizarLista = new EventEmitter();


  cursos: any = []; 
  nome:string = '';
  duracao:string= '';
  camposlimpos: string = '';


  constructor(private http : HttpClient) { }

  ngOnInit() {
    return this.listarCursos();
  }

  listarCursos(): void{
    this.http.get
    ('http://localhost:8080/cursos')
    .subscribe(
      data => {
        //console.log(data);
        this.cursos = (data);
        alert("está listando correto");
      }
    );
  }

}
