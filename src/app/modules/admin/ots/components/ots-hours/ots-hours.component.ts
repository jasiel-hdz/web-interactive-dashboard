import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LineChartComponent } from 'app/core/shared/components/line-chart/line-chart.component';

@Component({
  selector: 'app-ots-hours',
  templateUrl: './ots-hours.component.html',
  styleUrls: ['./ots-hours.component.css'],
  imports: [
    MatButtonModule,
    MatTooltipModule,
    MatButtonToggleModule,
    FormsModule,
    LineChartComponent,
  ],
  })
export class OtsHoursComponent implements OnInit {
  selectedOption: 'today' | 'yesterday' = 'today';
  constructor() { }

  ngOnInit() {
  }
  
  onSelectionChange(event: any): void {
    console.log('Selected option:', this.selectedOption);
    if (this.selectedOption === 'today') {
      console.log('Today selected');
    } else if (this.selectedOption === 'yesterday') {
      console.log('Yesterday selected');
    }
  }
}
