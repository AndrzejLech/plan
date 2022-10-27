import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfzWeekContainerComponent } from './mfz-week-container.component';

describe('MfzComponentComponent', () => {
  let component: MfzWeekContainerComponent;
  let fixture: ComponentFixture<MfzWeekContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MfzWeekContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MfzWeekContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
