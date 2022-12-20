import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dispenser1Component } from './dispenser1.component';

describe('Dispenser1Component', () => {
  let component: Dispenser1Component;
  let fixture: ComponentFixture<Dispenser1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dispenser1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dispenser1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
