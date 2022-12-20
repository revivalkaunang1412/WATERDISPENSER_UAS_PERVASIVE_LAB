import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispenserDetailComponent } from './dispenser-detail.component';

describe('DispenserDetailComponent', () => {
  let component: DispenserDetailComponent;
  let fixture: ComponentFixture<DispenserDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispenserDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispenserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
