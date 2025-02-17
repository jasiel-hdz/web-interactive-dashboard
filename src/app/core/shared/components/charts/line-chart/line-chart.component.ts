import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements AfterViewInit {
  @Input() idLineChart: string = '1'; // ID of the chart element
  @Input() dataChart: any = {}; // Data for the chart
  

  constructor() {
    // Register all chart.js components
    Chart.register(...registerables);
  }

  ngAfterViewInit() {
    // Call the method to render the chart after the view initializes
    this.renderChart();
  }

  renderChart(): void {
    // Check if data is provided for the chart
    if (!this.dataChart || Object.keys(this.dataChart).length === 0) {
      console.error('No data provided for the chart.');
      return;
    }

    // Get the canvas element by ID
    const ctx = document.getElementById(this.idLineChart) as HTMLCanvasElement;
    if (!ctx) {
      console.error(`Canvas with id ${this.idLineChart} not found.`);
      return;
    }
    
    // Create a new chart with the provided data
    new Chart(ctx, this.dataChart);
  }

}
