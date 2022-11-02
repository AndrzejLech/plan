import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonTimetableComponent } from './common-timetable.component';

describe('CommonTimetableComponent', () => {
  let component: CommonTimetableComponent;
  let fixture: ComponentFixture<CommonTimetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonTimetableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonTimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
