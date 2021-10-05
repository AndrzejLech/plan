import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfComponentComponent } from './inf-component.component';

describe('InfComponentComponent', () => {
  let component: InfComponentComponent;
  let fixture: ComponentFixture<InfComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
