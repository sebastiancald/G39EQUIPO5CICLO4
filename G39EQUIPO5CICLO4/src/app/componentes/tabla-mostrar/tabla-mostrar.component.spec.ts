import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaMostrarComponent } from './tabla-mostrar.component';

describe('TablaMostrarComponent', () => {
  let component: TablaMostrarComponent;
  let fixture: ComponentFixture<TablaMostrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaMostrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
