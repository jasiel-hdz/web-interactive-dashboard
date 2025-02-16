import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CardCountDay } from 'app/core/interfaces/shared/card-count-day.interface';
import { ChartExampleComponent } from 'app/core/shared/components/charts/card-week/card-week.component';
import { CardViewersCountComponent } from 'app/core/shared/components/rows/card-viewers-count/card-count-day.component';
import { WatcherCountChartComponent } from 'app/core/shared/components/rows/watcher-count-chart/watcher-count-chart.component';
import { OtsHoursComponent } from 'app/modules/admin/ots/components/ots-hours/ots-hours.component';
import { WatcherAnualChartComponent } from 'app/modules/admin/ots/components/watcher-anual-chart/watcher-anual-chart.component';
import { BAR_CHART_VIEWERS, CARD_COUNT_HOURS } from './viewers-page.static';
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
      ], 
})
export class ViewersPageComponent implements OnInit {
  public cardsCountDay: CardCountDay[] = CARD_COUNT_HOURS ;
  public barChartViewers = BAR_CHART_VIEWERS;
  public idBarChart = 'barViewersChart';

  constructor() { }

  ngOnInit() {
  }

}
