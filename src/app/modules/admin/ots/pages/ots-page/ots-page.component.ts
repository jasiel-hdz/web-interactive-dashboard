import { Component, OnInit } from '@angular/core';
import { OtsHoursComponent } from '../../components/ots-hours/ots-hours.component';
import { CardViewersCountComponent } from 'app/core/shared/components/card-viewers-count/card-viewers-count.component';
import { WatcherCountChartComponent } from '../../../../../core/shared/components/watcher-count-chart/watcher-count-chart.component';
import { ChartExampleComponent } from 'app/core/shared/components/chart-example/chart-example.component';
import { MatIconModule } from '@angular/material/icon';
import { WatcherAnualChartComponent } from '../../components/watcher-anual-chart/watcher-anual-chart.component';

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
  
  constructor() { }

  ngOnInit() {
  }

}
