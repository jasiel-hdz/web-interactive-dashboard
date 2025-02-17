import { Component, OnInit } from '@angular/core';
import { OtsHoursComponent } from '../../components/ots-hours/ots-hours.component';
import { CardViewersCountComponent } from 'app/core/shared/components/rows/card-viewers-count/card-count-day.component';
import { WatcherCountChartComponent } from '../../../../../core/shared/components/rows/watcher-count-chart/watcher-count-chart.component';
import { ChartExampleComponent } from 'app/core/shared/components/rows/card-week/card-week.component';
import { MatIconModule } from '@angular/material/icon';
import { WatcherAnualChartComponent } from '../../components/watcher-anual-chart/watcher-anual-chart.component';
import { CardCountDay } from 'app/core/interfaces/shared/card-count-day.interface';
import { BAR_CHART_OTS, CARD_COUNT_HOURS, LINE_CHART_OTS } from './ots-page-static';
import { OtsService } from 'app/core/services/Ots.service';

@Component({
  selector: 'app-ots-page',
  standalone   : true,
  templateUrl: './ots-page.component.html',
  styleUrls: ['./ots-page.component.css'],
  imports: [
      MatIconModule,
      CardViewersCountComponent,
      OtsHoursComponent,
      ChartExampleComponent,
      WatcherAnualChartComponent,
    ], 
})
export class OtsPageComponent implements OnInit {
  public cardsCountDay: CardCountDay[] = CARD_COUNT_HOURS;
  public barChartOTS = BAR_CHART_OTS;
  public idBarChart = 'barChartOTS';
  public idLineChart = 'lineChartOTS';
  public lineChartOTS = LINE_CHART_OTS;
  public top3Ots = [];

  constructor(private otsService: OtsService) { }

  ngOnInit() {
    
    // Suscribe to the otsDay$ observable
    this.otsService.otsDay$.subscribe((otsDay) => {
      if (otsDay) {
        this.updatecardsCountDay(otsDay);
        this.updatelineChartOTS(otsDay);
      }
    });

    // Suscribe to the otsWeek$ observable
    this.otsService.otsWeek$.subscribe((otsWeek) => {
      if (otsWeek) {
        this.updateWeekBarChartOTS(otsWeek);
      }
    });
  }

  updatecardsCountDay(otsDay) {
    const { ots_count_sum, ots_count_avg, watcher_count_avg, watcher_count_total } = otsDay;
    this.cardsCountDay[0].primaryValue = ots_count_sum;
    this.cardsCountDay[0].secondaryValue = ots_count_sum;
    this.cardsCountDay[1].primaryValue = watcher_count_avg;
    this.cardsCountDay[1].secondaryValue = watcher_count_avg;
    this.cardsCountDay[2].primaryValue = ots_count_avg;
    this.cardsCountDay[2].secondaryValue = ots_count_avg;
    this.cardsCountDay[3].primaryValue = watcher_count_total;
    this.cardsCountDay[3].secondaryValue = watcher_count_total;
  }

  updatelineChartOTS(otsDay) {
    if (otsDay?.ots?.some(item => item.ots_count > 0)) {
      this.lineChartOTS.data.datasets[0].data = otsDay.ots.map(item => item.ots_count);
      this.top3Ots = otsDay.ots
        .filter(item => item.ots_count > 0)
        .sort((a, b) => b.ots_count - a.ots_count)
        .slice(0, 3);
    }else {
      this.lineChartOTS.data.datasets[0].data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      this.top3Ots = [];
    }
  }

  updateWeekBarChartOTS(otsWeek) {
    this.barChartOTS.data.datasets[0].data = otsWeek?.days?.map(day => day.ots_count) || [];
    this.barChartOTS.data.datasets[1].data = otsWeek?.days?.map(day => day.watcher_count) || [];
  }
}
