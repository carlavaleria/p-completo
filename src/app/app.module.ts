import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddCursosComponent } from './add-cursos/add-cursos.component';
import { GridCursosComponent } from './grid-cursos/grid-cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCursosComponent,
    GridCursosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
