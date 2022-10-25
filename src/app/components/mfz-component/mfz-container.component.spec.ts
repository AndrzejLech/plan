import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfzContainerComponent } from './mfz-container.component';

describe('MfzComponentComponent', () => {
  let component: MfzContainerComponent;
  let fixture: ComponentFixture<MfzContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MfzContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MfzContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
