import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfzAllContainerComponent } from './mfz-all-container.component';

describe('MfzAllContainerComponent', () => {
  let component: MfzAllContainerComponent;
  let fixture: ComponentFixture<MfzAllContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MfzAllContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MfzAllContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
