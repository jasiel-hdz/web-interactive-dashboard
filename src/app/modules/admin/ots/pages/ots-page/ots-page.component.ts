import { Component, OnInit } from '@angular/core';
import { OtsHoursComponent } from '../../../../../core/shared/components/ots-hours/ots-hours.component';
import { CardViewersCountComponent } from 'app/core/shared/components/card-viewers-count/card-viewers-count.component';
import { WatcherCountChartComponent } from '../../../../../core/shared/components/watcher-count-chart/watcher-count-chart.component';
import { ChartExampleComponent } from 'app/core/shared/components/chart-example/chart-example.component';



@Component({
  selector: 'app-ots-page',
  standalone   : true,
  templateUrl: './ots-page.component.html',
  styleUrls: ['./ots-page.component.css'],
  imports: [
      CardViewersCountComponent,
      ChartExampleComponent,
      WatcherCountChartComponent,
      OtsHoursComponent,
    ], 
})
export class OtsPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
