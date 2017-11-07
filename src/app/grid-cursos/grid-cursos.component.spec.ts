import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCursosComponent } from './grid-cursos.component';

describe('GridCursosComponent', () => {
  let component: GridCursosComponent;
  let fixture: ComponentFixture<GridCursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridCursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
