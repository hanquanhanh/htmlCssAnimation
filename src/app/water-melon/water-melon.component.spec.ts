import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterMelonComponent } from './water-melon.component';

describe('WaterMelonComponent', () => {
  let component: WaterMelonComponent;
  let fixture: ComponentFixture<WaterMelonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterMelonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterMelonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
