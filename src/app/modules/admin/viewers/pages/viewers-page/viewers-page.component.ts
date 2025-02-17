import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CardCountDay } from 'app/core/interfaces/shared/card-count-day.interface';
import { ChartExampleComponent } from 'app/core/shared/components/rows/card-week/card-week.component';
import { CardViewersCountComponent } from 'app/core/shared/components/rows/card-viewers-count/card-count-day.component';
import { WatcherCountChartComponent } from 'app/core/shared/components/rows/watcher-count-chart/watcher-count-chart.component';
import { OtsHoursComponent } from 'app/modules/admin/ots/components/ots-hours/ots-hours.component';
import { BAR_CHART_VIEWERS, CARD_COUNT_HOURS, LINE_CHART_VIEW, PIE_CHART_PAY } from './viewers-page.static';
import { CardComparativePayComponent } from 'app/core/shared/components/rows/card-comparative-pay/card-comparative-pay.component';
import { ViewersService } from 'app/core/services/viewers.service';
import { PieChartComponent } from 'app/core/shared/components/charts/pie-chart/pie-chart.component';
@Component({
  selector: 'app-viewers-page',
  standalone: true,
  templateUrl: './viewers-page.component.html',
  styleUrls: ['./viewers-page.component.css'],
  imports: [
        MatIconModule,
        CardViewersCountComponent,
        OtsHoursComponent,
        ChartExampleComponent,
        WatcherCountChartComponent,
        CardComparativePayComponent,
      ], 
})
export class ViewersPageComponent implements OnInit {
  @ViewChild(PieChartComponent) pieChartComponent!: PieChartComponent;

  public cardsCountDay: CardCountDay[] = CARD_COUNT_HOURS ;
  // bar chart
  public barChartViewers = BAR_CHART_VIEWERS;
  public idBarChart = 'barViewersChart';
  // pay chart
  public idPieChart = 'payChartEmotions';
  public dataPieChart = PIE_CHART_PAY;
  // line chart
  // pay chart
  public idLineChart = 'lineChartEmotions';
  public dataLineChart = LINE_CHART_VIEW;
  top3Ots = [];

  constructor(private viewersService : ViewersService) { }

  ngOnInit() {
    // Suscribe to the viewersDay$ observable
    this.viewersService.viewersDay$.subscribe((viewersDay) => {
      if (viewersDay) {
        this.updatecardsCountDay(viewersDay);
        this.updateEmotionsPieChart(viewersDay);
        this.updatelineChartViewers(viewersDay);
        console.log('viewersDay', viewersDay);
      }
    });
    // Suscribe to the viewersWeek$ observable

  }

  updatecardsCountDay(viewersDay) {
    const { avg_age, total_male, total_female, total_viewers } = viewersDay;
    this.cardsCountDay[0].primaryValue = total_viewers;
    this.cardsCountDay[0].secondaryValue = total_viewers;
    this.cardsCountDay[1].primaryValue = avg_age;
    this.cardsCountDay[1].secondaryValue = avg_age;
    this.cardsCountDay[2].primaryValue = total_male;
    this.cardsCountDay[2].secondaryValue = total_male;
    this.cardsCountDay[3].primaryValue = total_female;
    this.cardsCountDay[3].secondaryValue = total_female;
  }
  
  updateEmotionsPieChart(viewersDay) {
    const { very_happy, happy, neutral, unhappy, very_unhappy } = viewersDay;
    this.dataPieChart.data.datasets[0].data = [very_happy, happy, neutral, unhappy, very_unhappy];
  }

  updatelineChartViewers(viewersDay) {
    if(viewersDay.viewers && Array.isArray(viewersDay.viewers) && viewersDay.viewers.length > 0){
      let data = new Array(24).fill(0);
      viewersDay.viewers.forEach(item => {
        const hour = parseInt(item.hour, 10);
        const totalViewers = item.total_viewers;
        if (hour >= 0 && hour < 24) {
          data[hour] = totalViewers;
        }
      });
      
      this.dataLineChart.data.datasets[0].data = data;
      this.top3Ots = viewersDay.viewers
      .filter(item => item.total_viewers > 0)
      .sort((a, b) => b.total_viewers - a.total_viewers)
      .slice(0, 3);
      }else {
      this.dataLineChart.data.datasets[0].data = new Array(24).fill(0);
    }
  }

}