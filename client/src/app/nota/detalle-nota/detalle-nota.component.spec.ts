import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleNotaComponent } from './detalle-nota.component';

describe('DetalleNotaComponent', () => {
  let component: DetalleNotaComponent;
  let fixture: ComponentFixture<DetalleNotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleNotaComponent]
    });
    fixture = TestBed.createComponent(DetalleNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
