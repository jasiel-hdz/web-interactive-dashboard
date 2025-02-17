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
          data: [0, 0, 0, 0, 0, 0, 0],
          backgroundColor: 'rgba(148, 163, 184, 1)',
          borderColor: 'rgba(148, 163, 184, 1)',
          borderWidth: 1
        },
        {
          label: 'Duración de Observación',
          data: [0, 0, 0, 0, 0, 0, 0],
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

  

  export const LINE_CHART_OTS =   {
      type: 'line',
      data: {
        labels: [
          '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00',
          '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00',
          '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'
        ],
        datasets: [{
          label: 'Observadores No Identificados',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
    }