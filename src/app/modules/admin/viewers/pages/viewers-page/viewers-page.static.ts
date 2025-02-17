import { Emotion } from "app/core/const/enums/emotion.enum";

export const CARD_COUNT_HOURS = [
    {
      id: 1,
      title: 'Observadores identificados por día',
      colorClass: 'text-blue-500',
      primaryValue: 0,
      primaryValueText: 'Total',
      secondaryValue: 0,
      secondaryValueText: 'El día de hoy: '
    },
    {
      id: 2,
      title: 'Edad Promedio por día',
      colorClass: 'text-green-500',
      primaryValue: 0,
      primaryValueText: 'Media',
      secondaryValue: 0,
      secondaryValueText: 'El día de hoy: '
    },
    {
      id: 3,
      title: 'Observadores Masculinos por día',
      colorClass: 'text-red-500',
      primaryValue: 0,
      primaryValueText: 'Media',
      secondaryValue: 0,
      secondaryValueText: 'El día de hoy: '
    },
    {
      id: 4,
      title: 'Observadores Femeninos por día',
      colorClass: 'text-yellow-500',
      primaryValue: 0,
      primaryValueText: 'Media',
      secondaryValue: 0,
      secondaryValueText: 'El día de hoy: '
    }
];

export const BAR_CHART_VIEWERS = {
    type: 'bar',
    data: {
      labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
      datasets: [
        {
          label: 'Observadores',
          data: [12, 19, 3, 5, 2, 11, 1],
          backgroundColor: 'rgba(148, 163, 184, 1)',
          borderColor: 'rgba(148, 163, 184, 1)',
          borderWidth: 1
        },
        {
          label: 'Duración',
          data: [8, 14, 7, 6, 4, 9, 3],
          backgroundColor: 'rgba(129, 140, 247, 1)',
          borderColor: 'rgba(129, 140, 247, 1)',
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
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
}

export const PIE_CHART_PAY = {
  labels: [
    Emotion.very_happy,   // "Muy Feliz"
    Emotion.happy,        // "Feliz"
    Emotion.neutral,      // "Neutral"
    Emotion.unhappy,      // "Triste"
    Emotion.very_unhappy 
  ],
  datasets: [
    {
      data: [2.0, 3.0, 3.0, 4.0, 2.0],
      backgroundColor: ['#22C55E', '#A855F7', '#EAB308', '#EF4444', '#5365FF'],
      hoverOffset: 4
    }
  ]
};