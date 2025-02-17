import { Component, OnInit } from '@angular/core';
import { OtsHoursComponent } from '../../components/ots-hours/ots-hours.component';
import { CardViewersCountComponent } from 'app/core/shared/components/rows/card-viewers-count/card-count-day.component';
import { WatcherCountChartComponent } from '../../../../../core/shared/components/rows/watcher-count-chart/watcher-count-chart.component';
import { ChartExampleComponent } from 'app/core/shared/components/rows/card-week/card-week.component';
import { MatIconModule } from '@angular/material/icon';
import { WatcherAnualChartComponent } from '../../components/watcher-anual-chart/watcher-anual-chart.component';
import { CardCountDay } from 'app/core/interfaces/shared/card-count-day.interface';
import { BAR_CHART_OTS, CARD_COUNT_HOURS } from './ots-page-static';
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
      WatcherCountChartComponent,
      WatcherAnualChartComponent,
    ], 
})
export class OtsPageComponent implements OnInit {
  public cardsCountDay: CardCountDay[] = CARD_COUNT_HOURS;
  public barChartOTS = BAR_CHART_OTS;
  public idBarChart = 'barChartOTS';
  constructor(private otsService: OtsService) { }

  ngOnInit() {
    // Suscribe to the otsDay$ observable
    this.otsService.otsDay$.subscribe((otsDay) => {
      if (otsDay) {
        this.updateData(otsDay);
      }
    });
  }

  updateData(otsDay) {
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

}
