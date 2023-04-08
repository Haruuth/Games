import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuentraElTesoroComponent } from './encuentra-el-tesoro.component';

describe('EncuentraElTesoroComponent', () => {
  let component: EncuentraElTesoroComponent;
  let fixture: ComponentFixture<EncuentraElTesoroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncuentraElTesoroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncuentraElTesoroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
