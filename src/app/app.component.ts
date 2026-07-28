import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfilePhotoComponent } from './features/components/profile-photo/profile-photo.component';
import { HighlightBoxComponent } from './features/components/highlight-box/highlight-box.component';
import { ParentDemoComponent } from './features/components/parent-demo/parent-demo.component';
import { CustomCardComponent } from './features/components/custom-card/custom-card.component';
import { SignalsDemoComponent } from './features/signals/signals-demo/signals-demo.component';
import { BindingDemoComponent } from './features/templates/binding-demo/binding-demo.component';
import { ObservablesBasicComponent } from './features/rxjs/observables-basic/observables-basic.component';
import { OperatorsComponent } from './features/rxjs/operators/operators.component';

@Component({
  selector: 'app-root',
  imports: [
    // ProfilePhotoComponent,
    // HighlightBoxComponent,
    // ParentDemoComponent,
    // SignalsDemoComponent,
    // BindingDemoComponent,
    // ObservablesBasicComponent,
    OperatorsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-docs-practice';
}
