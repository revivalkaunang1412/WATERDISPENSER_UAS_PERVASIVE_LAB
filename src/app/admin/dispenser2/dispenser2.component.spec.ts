import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dispenser2Component } from './dispenser2.component';

describe('Dispenser2Component', () => {
  let component: Dispenser2Component;
  let fixture: ComponentFixture<Dispenser2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dispenser2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dispenser2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
