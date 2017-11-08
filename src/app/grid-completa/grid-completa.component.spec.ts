import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCompletaComponent } from './grid-completa.component';

describe('GridCompletaComponent', () => {
  let component: GridCompletaComponent;
  let fixture: ComponentFixture<GridCompletaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridCompletaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridCompletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
