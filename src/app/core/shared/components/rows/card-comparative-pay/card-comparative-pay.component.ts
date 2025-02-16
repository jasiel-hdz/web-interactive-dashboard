import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { PieChartComponent } from '../../charts/pie-chart/pie-chart.component';
import { Emotion } from 'app/core/const/enums/emotion.enum';

@Component({
  selector: 'app-card-comparative-pay',
  templateUrl: './card-comparative-pay.component.html',
  styleUrls: ['./card-comparative-pay.component.css'],
  imports: [
    CommonModule,
    PieChartComponent,
  ]
})
export class CardComparativePayComponent implements OnInit {
  @Input() public title: string = '';
  @Input() public payChartEmotions:string = "";
  @Input() idPieChart: string = '';
  @Input() dataChart: any = {};
  labels = [
    Emotion.very_happy,
    Emotion.happy,
    Emotion.neutral,
    Emotion.unhappy,
    Emotion.very_unhappy
  ];

  colorClasses = [
    { backgroundColor: 'bg-[#E6F9E2]', textColor: 'text-[#22C55E]' },
    { backgroundColor: 'bg-[#F4EBFF]', textColor: 'text-[#A855F7]' },
    { backgroundColor: 'bg-[#FEF9D8]', textColor: 'text-[#EAB308]' },
    { backgroundColor: 'bg-[#FEECEC]', textColor: 'text-[#EF4444]' },
    { backgroundColor: 'bg-[#D0E1FD]', textColor: 'text-[#5365FF]' }  
  ];

  constructor() { }

  ngOnInit() {
  }

}
