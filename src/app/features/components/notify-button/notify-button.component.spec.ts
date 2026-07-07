import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifyButtonComponent } from './notify-button.component';

describe('NotifyButtonComponent', () => {
  let component: NotifyButtonComponent;
  let fixture: ComponentFixture<NotifyButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotifyButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotifyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
