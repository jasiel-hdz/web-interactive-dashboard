import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { Chart, registerables } from 'chart.js';
import { FormsModule } from '@angular/forms';
import { BarChartComponent } from '../../charts/bar-chart/bar-chart.component';
import { CommonModule } from '@angular/common';
import { CARD_COUNT_WEEK } from './card-week.static';
import { OtsService } from 'app/core/services/Ots.service';

@Component({
  selector: 'app-card-week',
  templateUrl: './card-week.component.html',
  styleUrls: ['./card-week.component.css'],
  imports: [
    MatButtonModule,
    MatTooltipModule,
    MatButtonToggleModule,
    FormsModule,
    BarChartComponent,
    CommonModule,
  ]
})
export class ChartExampleComponent implements OnInit {
  @Input() title: string = '';
  @Input() idBarChart: string = '';
  @Input() dataChart: any = {};
  @Input() measurements: string[] = [];

  selectedOption: 'lastWeek' | 'thisWeek' = 'thisWeek';
  cardCountWeek: CardCountWeek[] = CARD_COUNT_WEEK;

  constructor(private otsService: OtsService) {
    
  }

  ngOnInit(): void {
    this.initData();
  }

  onSelectionChange(event: any): void {
    if (this.selectedOption === 'lastWeek') {
      this.executeLastWeekAction();
    } else if (this.selectedOption === 'thisWeek') {
      this.executeThisWeekAction();
    }
  }

  initData() {
    // Suscribe to the otsWeek$ observable
    this.otsService.otsWeek$.subscribe((otsWeek) => {
      if (otsWeek) {
        this.mapToCardCountWeek();
      }
    });

    this.mapToCardCountWeek();

  }

  mapToCardCountWeek() {
    this.cardCountWeek = this.cardCountWeek.map((card, index) => ({
      ...card,
      title: index < 2 ? this.dataChart.data.datasets[0].label : this.dataChart.data.datasets[1].label,
      measurements: index < 2 && this.measurements.length > 0 ? this.measurements[0] : (this.measurements.length > 1 ? this.measurements[1] : ''),
      value: card['type'] === 'total' ? this.dataChart.data.datasets[0].data.reduce((a: number, b: number) => a + b, 0) : this.dataChart.data.datasets[1].data.reduce((a: number, b: number) => a + b, 0),
    }));
  }

  executeLastWeekAction() {
    console.log('Executing action for Last Week');
  }

  executeThisWeekAction() {
    console.log('Executing action for This Week');
  }

}

interface CardCountWeek {
  title: string;
  colorClass: string,
  textColor: string,
  value: number;
  type: 'total' | 'media';
  measurements?: string;
}