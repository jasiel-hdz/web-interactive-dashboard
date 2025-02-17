import { CommonModule } from '@angular/common';
import { Component, Input, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
  imports: [
    CommonModule,
  ]
})
export class PieChartComponent implements AfterViewInit {
  @Input() idPieChart: string = ''; // ID of the chart element
  @Input() dataChart: any = {}; // Data for the chart
  
  constructor() {
    // Register all chart.js components
    Chart.register(...registerables);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.renderChart();
    },700);

  }

  public renderChart(): void {
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
    new Chart(ctx, this.dataChart);

  }

}
