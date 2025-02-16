import { Component, Input, OnInit } from '@angular/core';
import { cardViewersCountStatic } from './card-count-day.static';
import { CommonModule } from '@angular/common';
import { CardCountDay } from 'app/core/interfaces/shared/card-count-day.interface';

@Component({
  selector: 'app-card-count-day',
  standalone: true,
  templateUrl: './card-count-day.component.html',
  styleUrls: ['./card-count-day.component.css'],
  imports: [CommonModule],
})
export class CardViewersCountComponent implements OnInit {
  @Input() cardsCountDay: CardCountDay[] = [];
  @Input() title: string = 'Card Count Day';
  constructor() { }

  ngOnInit() {

  }

}
