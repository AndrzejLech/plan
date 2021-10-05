import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzyminComponentComponent } from './szymin-component.component';

describe('SzyminComponentComponent', () => {
  let component: SzyminComponentComponent;
  let fixture: ComponentFixture<SzyminComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SzyminComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SzyminComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
