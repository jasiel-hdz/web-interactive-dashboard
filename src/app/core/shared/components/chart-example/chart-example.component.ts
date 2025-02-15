import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { Chart, registerables } from 'chart.js';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chart-example',
  templateUrl: './chart-example.component.html',
  styleUrls: ['./chart-example.component.css'],
  imports: [
    MatButtonModule,
    MatTooltipModule,
    MatButtonToggleModule,
    FormsModule, 
  ]
})
export class ChartExampleComponent implements OnInit {
  selectedOption: 'lastWeek' | 'thisWeek' = 'thisWeek';

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.renderChart();
  }

  renderChart() {
    new Chart("barChart", {
      type: 'bar',
      data: {
        labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
        datasets: [
          {
            label: 'Observadores No Identificados',
            data: [12, 19, 3, 5, 2, 11, 1],
            backgroundColor: 'rgba(148, 163, 184, 1)',
            borderColor: 'rgba(148, 163, 184, 1)',
            borderWidth: 1
          },
          {
            label: 'Duración de Observación',
            data: [8, 14, 7, 6, 4, 9, 3],
            backgroundColor: 'rgba(129, 140, 247, 1)',
            borderColor: 'rgba(129, 140, 247, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        plugins: {
          legend: {
            display: true
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  onSelectionChange(event: any): void {
    console.log('Selected option:', this.selectedOption);
    if (this.selectedOption === 'lastWeek') {
      this.executeLastWeekAction();
    } else if (this.selectedOption === 'thisWeek') {
      this.executeThisWeekAction();
    }
  }

  executeLastWeekAction() {
    console.log('Executing action for Last Week');
  }

  executeThisWeekAction() {
    console.log('Executing action for This Week');
  }

}