import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FragRendererComponent } from './frag-renderer.component';

describe('FragRendererComponent', () => {
  let component: FragRendererComponent;
  let fixture: ComponentFixture<FragRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FragRendererComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FragRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
