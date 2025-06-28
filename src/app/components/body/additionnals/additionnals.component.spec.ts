import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionnalsComponent } from './additionnals.component';

describe('AdditionnalsComponent', () => {
  let component: AdditionnalsComponent;
  let fixture: ComponentFixture<AdditionnalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdditionnalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionnalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
