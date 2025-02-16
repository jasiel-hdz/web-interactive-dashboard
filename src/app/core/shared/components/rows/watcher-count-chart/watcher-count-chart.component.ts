import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-watcher-count-chart',
  standalone: true,
  templateUrl: './watcher-count-chart.component.html',
  styleUrls: ['./watcher-count-chart.component.css'],
})
export class WatcherCountChartComponent implements OnInit {

  @ViewChild('lineChart', { static: true }) lineChart: ElementRef | undefined;

  ngOnInit(): void {
    Chart.register(...registerables);

    const apiData = [
      { "period_start_date": "2024-11-01", "watcher_count": 0 },
      { "period_start_date": "2024-11-02", "watcher_count": 5 },
      { "period_start_date": "2024-11-03", "watcher_count": 10 },
      { "period_start_date": "2024-11-04", "watcher_count": 17 },
      { "period_start_date": "2024-11-05", "watcher_count": 4 },
      { "period_start_date": "2024-11-06", "watcher_count": 10 },
      { "period_start_date": "2024-11-07", "watcher_count": 12 },
      { "period_start_date": "2024-11-08", "watcher_count": 8 },
      { "period_start_date": "2024-11-09", "watcher_count": 14 },
      { "period_start_date": "2024-11-10", "watcher_count": 7 },
      { "period_start_date": "2024-11-11", "watcher_count": 11 }
    ];
    
    new Chart(this.lineChart?.nativeElement, {
      type: 'line',
      data: {
        labels: apiData.map(item => item.period_start_date),
        datasets: [{
          label: 'Número de Espectadores',
          data: apiData.map(item => item.watcher_count),
          borderColor: 'rgba(129, 140, 247, 1)',
          backgroundColor: 'rgba(49, 55, 92, 0.6)',
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            title: {
              display: true,
            },
            grid: {
              display: false,
            }
          },
          y: {
            title: {
              display: false,
            },
            grid: {
              display: false,
            }
          }
        },
        plugins: {
          legend: {
            display: true,
            position: 'top'
          }
        }
      }
    });
  }
}
