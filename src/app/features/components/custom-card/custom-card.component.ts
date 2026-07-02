import {
  AfterViewInit,
  Component,
  computed,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  viewChild,
  ViewChildren,
  viewChildren,
} from '@angular/core';
import { CardHeaderComponent } from '../card-header/card-header.component';
import { CardActionComponent } from '../card-action/card-action.component';

@Component({
  selector: 'app-custom-card',
  imports: [CardHeaderComponent, CardActionComponent],
  templateUrl: './custom-card.component.html',
  styleUrl: './custom-card.component.css',
})
export class CustomCardComponent implements OnInit, AfterViewInit {
  // Signal based query
  // header = viewChild.required(CardHeaderComponent);
  // headerText = computed(() => this.header().text);

  // Decorator based query
  @ViewChild(CardHeaderComponent, { static: true })
  header!: CardHeaderComponent;
  headerText = '';

  // Signal based viewchildren query
  // actions = viewChildren(CardActionComponent);
  // actionTexts = computed(() => this.actions().map((action) => action.text));

  //Decorator based viewchildren query
  @ViewChildren(CardActionComponent) actions!: QueryList<CardActionComponent>;
  actionTexts: string[] = [];

  action = viewChild('save', { read: ElementRef });
  actionText = computed(() => this.action()?.nativeElement);

  ngOnInit() {
    console.log('Header text in constructor' + this.header.text);
  }

  ngAfterViewInit() {
    this.headerText = this.header.text;
    this.actionTexts = this.actions.toArray().map((action) => action.text);
  }
}
