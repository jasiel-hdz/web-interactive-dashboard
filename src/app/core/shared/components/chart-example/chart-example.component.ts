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
            data: [12, 19, 3, 5, 2, 11, 1], // Primer conjunto de datos
            backgroundColor: 'rgba(148, 163, 184, 1)', // Color de las barras del primer conjunto
            borderColor: 'rgba(148, 163, 184, 1)',
            borderWidth: 1
          },
          {
            label: 'Duración de Observación',
            data: [8, 14, 7, 6, 4, 9, 3], // Segundo conjunto de datos
            backgroundColor: 'rgba(129, 140, 247, 1)', // Color de las barras del segundo conjunto
            borderColor: 'rgba(129, 140, 247, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        plugins: {
          legend: {
            display: true // Mostrar la leyenda para identificar ambos datasets
          }
        },
        scales: {
          x: {
            grid: {
              display: false // Ocultar las líneas de la cuadrícula en el eje X
            }
          },
          y: {
            beginAtZero: true // Comenzar el eje Y desde cero
          }
        }
      }
    });
  }

  onSelectionChange(event: any): void {
    console.log('Selected option:', this.selectedOption);
    // Puedes agregar aquí el comportamiento de cada opción seleccionada
    if (this.selectedOption === 'lastWeek') {
      this.executeLastWeekAction();
    } else if (this.selectedOption === 'thisWeek') {
      this.executeThisWeekAction();
    }
  }

  // Acciones para las diferentes opciones
  executeLastWeekAction() {
    console.log('Executing action for Last Week');
    // Lógica para la semana pasada
  }

  executeThisWeekAction() {
    console.log('Executing action for This Week');
    // Lógica para esta semana
  }

}