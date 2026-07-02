import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-action',
  imports: [],
  templateUrl: './card-action.component.html',
  styleUrl: './card-action.component.css',
})
export class CardActionComponent implements OnInit {
  text = 'Action Text';

  ngOnInit() {
    console.log('Base Class');
  }
}
