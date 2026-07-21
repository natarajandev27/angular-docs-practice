import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeavyWidgetComponent } from './heavy-widget.component';

describe('HeavyWidgetComponent', () => {
  let component: HeavyWidgetComponent;
  let fixture: ComponentFixture<HeavyWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeavyWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeavyWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
