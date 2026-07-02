import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialCardActionComponent } from './special-card-action.component';

describe('SpecialCardActionComponent', () => {
  let component: SpecialCardActionComponent;
  let fixture: ComponentFixture<SpecialCardActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialCardActionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialCardActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
