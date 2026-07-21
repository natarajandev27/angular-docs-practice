import { Component, input, TemplateRef } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-frag-renderer',
  imports: [NgTemplateOutlet],
  templateUrl: './frag-renderer.component.html',
  styleUrl: './frag-renderer.component.css',
})
export class FragRendererComponent {
  count = 99; // ← CHILD's count
  frag = input.required<TemplateRef<unknown>>();
}
