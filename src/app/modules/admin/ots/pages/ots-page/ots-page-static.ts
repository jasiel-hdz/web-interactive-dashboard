export const CARD_COUNT_HOURS = [
    {
      id: 1,
      title: 'Observadores No identificados por día',
      colorClass: 'text-purple-500',
      primaryValue: 0,
      primaryValueText: 'Total',
      secondaryValue: 0,
      secondaryValueText: 'El día de hoy: '
    },
    {
      id: 2,
      title: 'Atención promedio por día',
      colorClass: 'text-blue-500',
      primaryValue: 0,
      primaryValueText: 'Media',
      secondaryValue: 0,
      secondaryValueText: 'El día de hoy: '
    },
    {
      id: 3,
      title: 'Promedio de observadores por día',
      colorClass: 'text-green-500',
      primaryValue: 0,
      primaryValueText: 'Total',
      secondaryValue: 0,
      secondaryValueText: 'El día de hoy: '
    },
    {
      id: 4,
      title: 'Atención total por día',
      colorClass: 'text-red-500',
      primaryValue: 0,
      primaryValueText: 'Media',
      secondaryValue: 0,
      secondaryValueText: 'El día de hoy: '
    }
];

export const BAR_CHART_OTS = {
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
          label: 'Duración de Observación',
          data: [8, 14, 7, 6, 4, 9, 3],
          backgroundColor: 'rgba(129, 140, 247, 1)',
          borderColor: 'rgba(129, 140, 247, 1)',
          borderWidth: 1
        }
      ]
    },
    options: {
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