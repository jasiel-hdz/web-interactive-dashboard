import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.renderChart();
  }

  renderChart() {
    const hourLabels = [
      '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00',
      '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00',
      '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'
    ];

    const observersData = [5, 12, 3, 8, 4, 6, 7, 15, 20, 18, 25, 22, 30, 28, 15, 12, 9, 8, 10, 11, 17, 19, 21, 13];

    new Chart("lineChart", {
      type: 'line',
      data: {
        labels: hourLabels,
        datasets: [{
          label: 'Observadores No Identificados',
          data: observersData,
          borderColor: 'rgba(129, 140, 247, 1)',
          backgroundColor: 'rgba(49, 55, 92, 0.6)',
          borderWidth: 3,
          tension: 0.4,
          fill: true,
        }]
      },
      options: {
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Horas del Día'
            },
            grid: {
              display: false
            }
          },
          y: {
            title: {
              display: true,
              text: 'Conteo de Observadores'
            },
            beginAtZero: true
          }
        },
        responsive: true,
        maintainAspectRatio: false,
      }
    });
  }
}
