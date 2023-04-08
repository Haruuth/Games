import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambioDeMonedaComponent } from './cambio-de-moneda.component';

describe('CambioDeMonedaComponent', () => {
  let component: CambioDeMonedaComponent;
  let fixture: ComponentFixture<CambioDeMonedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambioDeMonedaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CambioDeMonedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
