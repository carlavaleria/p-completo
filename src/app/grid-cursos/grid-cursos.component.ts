import { Component, OnInit , EventEmitter,  Input } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-grid-cursos',
  templateUrl: './grid-cursos.component.html',
  styleUrls: ['./grid-cursos.component.css']
})
export class GridCursosComponent implements OnInit {

  @Input("metodoListar")  metodoListar : any = {};
  
  constructor() { }

  ngOnInit() {
    
  }

  metodoAddListar(curso){
    this.metodoListar.push(curso);
    //return this.ngOnInit();
  } 
  
}
