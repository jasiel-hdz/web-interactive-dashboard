import { Component, OnInit } from '@angular/core';
import { CardViewersCountComponent } from '../../components/card-viewers-count/card-viewers-count.component';
import { ChartExampleComponent } from '../../components/chart-example/chart-example.component';
import { WatcherCountChartComponent } from '../../components/watcher-count-chart/watcher-count-chart.component';

@Component({
  selector: 'app-viewers-page',
  standalone: true,
  templateUrl: './viewers-page.component.html',
  styleUrls: ['./viewers-page.component.css'],
  imports: [
    CardViewersCountComponent,
    ChartExampleComponent,
    WatcherCountChartComponent,
  ] 
})
export class ViewersPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
