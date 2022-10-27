import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurAllComponentComponent } from './nur-all-component.component';

describe('NurComponentComponent', () => {
  let component: NurAllComponentComponent;
  let fixture: ComponentFixture<NurAllComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurAllComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NurAllComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
