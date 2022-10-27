import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurWeekComponentComponent } from './nur-week-component.component';

describe('NurWeekComponentComponent', () => {
  let component: NurWeekComponentComponent;
  let fixture: ComponentFixture<NurWeekComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurWeekComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NurWeekComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
