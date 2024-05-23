import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoNotaComponent } from './nuevo-nota.component';

describe('NuevoNotaComponent', () => {
  let component: NuevoNotaComponent;
  let fixture: ComponentFixture<NuevoNotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevoNotaComponent]
    });
    fixture = TestBed.createComponent(NuevoNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
