
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddCursosComponent } from './add-cursos/add-cursos.component';
import { GridCursosComponent } from './grid-cursos/grid-cursos.component';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PanelModule} from 'primeng/primeng';
import {TabViewModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {SplitButtonModule} from 'primeng/primeng';
import { GridCompletaComponent } from './grid-completa/grid-completa.component';
import {MessagesModule} from 'primeng/primeng';
import {MessageModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    AddCursosComponent,
    GridCursosComponent,
    GridCompletaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PanelModule,
    TabViewModule,
    InputTextModule,
    ButtonModule,
    SplitButtonModule,
    MessagesModule,
    MessageModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
