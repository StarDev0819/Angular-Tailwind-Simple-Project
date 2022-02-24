import { AfterViewInit, Component, OnInit } from '@angular/core';

// interface
import { Card } from 'src/app/core/interfaces';

// api service
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-top-cards',
  templateUrl: './top-cards.component.html',
  styleUrls: ['./top-cards.component.scss']
})

export class TopCardsComponent implements OnInit, AfterViewInit {

  loaded = false;
  cards: Card[] = [];

  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
      this.loaded = false;
      // this.apiService.getCards().subscribe(
      //   result => {
      //     this.cards = result;
          
      //     this.loaded = true;
      //   }
      // )
      this.apiService.getCardsAlt().then(
        (result: any) => {
          this.cards = result;

          this.cards.sort((x, y) => +new Date(y.createDate) - +new Date(x.createDate));
          
          this.loaded = true;
        }
      )
  }
}
