import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoublePlanComponent } from './double-plan.component';

describe('DoublePlanComponent', () => {
  let component: DoublePlanComponent;
  let fixture: ComponentFixture<DoublePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoublePlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoublePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
