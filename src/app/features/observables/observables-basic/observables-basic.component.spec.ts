import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablesBasicComponent } from './observables-basic.component';

describe('ObservablesBasicComponent', () => {
  let component: ObservablesBasicComponent;
  let fixture: ComponentFixture<ObservablesBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservablesBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservablesBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
