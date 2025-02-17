import { Component, Input, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements AfterViewInit {
  @Input() idPieChart: string = ''; // ID of the chart element
  @Input() dataChart: any = {}; // Data for the chart

  constructor() {
    // Register all chart.js components
    Chart.register(...registerables);
  }

  ngAfterViewInit() {
    this.renderChart();
  }

  renderChart(): void {
     // Check if data is provided for the chart
    if (!this.dataChart || Object.keys(this.dataChart).length === 0) {
      console.error('No data provided for the chart.');
      return;
    }

   // Get the canvas element by ID
    const ctx = document.getElementById(this.idPieChart) as HTMLCanvasElement;
    if (!ctx) {
      console.error(`Canvas with id ${this.idPieChart} not found.`);
      return;
    }

    // Create a new chart with the provided data
    new Chart(ctx, {
      type: 'pie',
      data: this.dataChart,
      
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          }
        }
      }
    });

  }
}
