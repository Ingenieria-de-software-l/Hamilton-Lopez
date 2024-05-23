import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaNotaComponent } from './lista-nota.component';

describe('ListaNotaComponent', () => {
  let component: ListaNotaComponent;
  let fixture: ComponentFixture<ListaNotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaNotaComponent]
    });
    fixture = TestBed.createComponent(ListaNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
