import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CardCountDay } from 'app/core/interfaces/shared/card-count-day.interface';
import { ChartExampleComponent } from 'app/core/shared/components/rows/card-week/card-week.component';
import { CardViewersCountComponent } from 'app/core/shared/components/rows/card-viewers-count/card-count-day.component';
import { WatcherCountChartComponent } from 'app/core/shared/components/rows/watcher-count-chart/watcher-count-chart.component';
import { OtsHoursComponent } from 'app/modules/admin/ots/components/ots-hours/ots-hours.component';
import { WatcherAnualChartComponent } from 'app/modules/admin/ots/components/watcher-anual-chart/watcher-anual-chart.component';
import { BAR_CHART_VIEWERS, CARD_COUNT_HOURS, PIE_CHART_PAY } from './viewers-page.static';
import { CardComparativePayComponent } from 'app/core/shared/components/rows/card-comparative-pay/card-comparative-pay.component';
import { ViewersService } from 'app/core/services/viewers.service';
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
        WatcherAnualChartComponent,
        CardComparativePayComponent,
      ], 
})
export class ViewersPageComponent implements OnInit {
  public cardsCountDay: CardCountDay[] = CARD_COUNT_HOURS ;
  // bar chart
  public barChartViewers = BAR_CHART_VIEWERS;
  public idBarChart = 'barViewersChart';
  // pay chart
  public idPieChart = 'payChartEmotions';
  public dataPieChart = PIE_CHART_PAY;
  
  constructor(private viewersService : ViewersService) { }

  ngOnInit() {
    // Suscribe to the viewersDay$ observable
    this.viewersService.viewersDay$.subscribe((viewersDay) => {
      if (viewersDay) {
        this.updatecardsCountDay(viewersDay);
      }
    });
    // Suscribe to the viewersWeek$ observable

  }

  updatecardsCountDay(viewersDay) {
    const { avg_age, total_male, total_female, total_viewers } = viewersDay;
    console.log('Viewers day:', viewersDay);
    this.cardsCountDay[0].primaryValue = total_viewers;
    this.cardsCountDay[0].secondaryValue = total_viewers;
    this.cardsCountDay[1].primaryValue = avg_age;
    this.cardsCountDay[1].secondaryValue = avg_age;
    this.cardsCountDay[2].primaryValue = total_male;
    this.cardsCountDay[2].secondaryValue = total_male;
    this.cardsCountDay[3].primaryValue = total_female;
    this.cardsCountDay[3].secondaryValue = total_female;
  }

}
