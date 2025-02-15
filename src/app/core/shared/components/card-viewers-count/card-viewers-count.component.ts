import { Component, OnInit } from '@angular/core';
import { cardViewersCountStatic } from './card-viewers-count.static';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-viewers-count',
  standalone: true,
  templateUrl: './card-viewers-count.component.html',
  styleUrls: ['./card-viewers-count.component.css'],
  imports: [CommonModule],
})
export class CardViewersCountComponent implements OnInit {
  public cardsViewers: CardViewersCount[] = cardViewersCountStatic;
  
  constructor() { }

  ngOnInit() {
    console.log('CardViewersCountComponent initialized');
    console.log('cardsViewers', this.cardsViewers);
  }

}

export interface CardViewersCount {
  id: number;
  title: string;
  colorClass: string;
  primaryValue: number;
  primaryValueText: string;
  secondaryValue: number;
  secondaryValueText: string;
}