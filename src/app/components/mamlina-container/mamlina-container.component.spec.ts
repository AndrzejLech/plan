import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MamlinaContainerComponent } from './mamlina-container.component';

describe('MamlinaContainerComponent', () => {
  let component: MamlinaContainerComponent;
  let fixture: ComponentFixture<MamlinaContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MamlinaContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MamlinaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
