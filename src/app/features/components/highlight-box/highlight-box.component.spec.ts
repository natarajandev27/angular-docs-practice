import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightBoxComponent } from './highlight-box.component';

describe('HighlightBoxComponent', () => {
  let component: HighlightBoxComponent;
  let fixture: ComponentFixture<HighlightBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighlightBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HighlightBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
