import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurComponentComponent } from './nur-component.component';

describe('NurComponentComponent', () => {
  let component: NurComponentComponent;
  let fixture: ComponentFixture<NurComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NurComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
