import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/core/interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {

  @Input() card: Card;
  constructor() {
    this.card = {
      imageUrl: '',
      price: 0,
      name: '',
      description: '',
      itemCount: 0,
      createDate: "",
      avatars: []
    }
  }

  ngOnInit(): void {
    console.log(this.card);
  }

}
