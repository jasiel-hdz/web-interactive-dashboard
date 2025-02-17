import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.renderAnnualPieChart();
  }

  renderAnnualPieChart() {
    const monthLabels = [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    const observersData = [12, 15, 20, 18, 25, 30, 28, 22, 19, 17, 14, 10];

    new Chart("DoughnutChart", {
      type: 'doughnut',
      data: {
        labels: monthLabels,
        datasets: [{
          data: observersData,
          backgroundColor: [
            '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40',
            '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'
          ],
          hoverBackgroundColor: [
            '#FF6384AA', '#36A2EBAA', '#FFCE56AA', '#4BC0C0AA', '#9966FFAA', '#FF9F40AA',
            '#FF6384AA', '#36A2EBAA', '#FFCE56AA', '#4BC0C0AA', '#9966FFAA', '#FF9F40AA'
          ]
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
          }
        }
      }
    });
  }

}
