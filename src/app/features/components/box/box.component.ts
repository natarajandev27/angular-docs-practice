import {
  AfterContentInit,
  Component,
  computed,
  ContentChild,
  contentChild,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { StarComponent } from '../star/star.component';

@Component({
  selector: 'app-box',
  imports: [],
  templateUrl: './box.component.html',
  styleUrl: './box.component.css',
})
export class BoxComponent implements AfterContentInit {
  //Signal based content child
  // star = contentChild(StarComponent, { descendants: false });
  // starMessage = computed(() => this.star()?.message);

  //Decarator based content child
  @ContentChild(StarComponent) star!: StarComponent;
  starMessage: string = '';
  @ContentChildren(StarComponent, { descendants: true })
  stars!: QueryList<StarComponent>;

  ngAfterContentInit() {
    this.starMessage = this.star.message;
    console.log(this.stars.length);
  }
}
