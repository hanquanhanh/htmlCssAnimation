import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSpinderComponent } from './super-spinder.component';

describe('SuperSpinderComponent', () => {
  let component: SuperSpinderComponent;
  let fixture: ComponentFixture<SuperSpinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperSpinderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperSpinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
