import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarEquipamentoComponent } from './consultar-equipamento.component';

describe('ConsultarEquipamentoComponent', () => {
  let component: ConsultarEquipamentoComponent;
  let fixture: ComponentFixture<ConsultarEquipamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarEquipamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarEquipamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
