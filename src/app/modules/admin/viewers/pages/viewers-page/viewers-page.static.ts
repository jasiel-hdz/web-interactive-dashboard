export const CARD_COUNT_HOURS = [
    {
      id: 1,
      title: 'Observadores identificados por día',
      colorClass: 'text-blue-500',
      primaryValue: 21,
      primaryValueText: 'Total',
      secondaryValue: 13,
      secondaryValueText: 'Esta semana: '
    },
    {
      id: 2,
      title: 'Atención promedio por día',
      colorClass: 'text-green-500',
      primaryValue: 11,
      primaryValueText: 'Media',
      secondaryValue: 18,
      secondaryValueText: 'Esta semana: '
    },
    {
      id: 3,
      title: 'Edad Promedio por día',
      colorClass: 'text-red-500',
      primaryValue: 12,
      primaryValueText: 'Media',
      secondaryValue: 4,
      secondaryValueText: 'Esta semana: '
    },
    {
      id: 4,
      title: 'Promedio de observadores por día',
      colorClass: 'text-yellow-500',
      primaryValue: 21,
      primaryValueText: 'Media',
      secondaryValue: 212,
      secondaryValueText: 'Esta semana: '
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