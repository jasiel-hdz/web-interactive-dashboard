import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DoughnutChartComponent } from 'app/core/shared/components/charts/doughnut-chart/doughnut-chart.component';

@Component({
  selector: 'app-watcher-anual-chart',
  templateUrl: './watcher-anual-chart.component.html',
  styleUrls: ['./watcher-anual-chart.component.css'],
  imports: [
    CommonModule,
    DoughnutChartComponent,
  ],
})
export class WatcherAnualChartComponent implements OnInit {
  monthlyData = [
    { mes: 'Enero', cantidad: 1200, total: 3500 },
    { mes: 'Febrero', cantidad: 1500, total: 4200 },
    { mes: 'Marzo', cantidad: 1800, total: 4700 },
    { mes: 'Abril', cantidad: 1400, total: 3900 },
    { mes: 'Mayo', cantidad: 1700, total: 4400 },
    { mes: 'Junio', cantidad: 1600, total: 4100 },
    { mes: 'Julio', cantidad: 1900, total: 4800 },
    { mes: 'Agosto', cantidad: 1500, total: 4300 },
    { mes: 'Septiembre', cantidad: 1200, total: 3700 },
    { mes: 'Octubre', cantidad: 1400, total: 3900 },
    { mes: 'Noviembre', cantidad: 1300, total: 3600 },
    { mes: 'Diciembre', cantidad: 1600, total: 4200 }
  ];

  getRandomColor(): string {
    const colors = [
     '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
      '#FF9F40', '#F06292', '#42A5F5', '#FFEB3B', '#26A69A',
      '#7E57C2', '#FF7043',
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  constructor() { }

  ngOnInit() {
    this.assignRandomColors();
  }

  assignRandomColors(): void {
    this.monthlyData = this.monthlyData.map(item => {
      item['color'] = this.getRandomColor();
      return item;
    });
  }
  

}