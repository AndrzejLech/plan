import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarTimetableSelectComponentComponent } from './toolbar-timetable-select-component.component';

describe('ToolbarTimetableSelectComponentComponent', () => {
  let component: ToolbarTimetableSelectComponentComponent;
  let fixture: ComponentFixture<ToolbarTimetableSelectComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarTimetableSelectComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarTimetableSelectComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
