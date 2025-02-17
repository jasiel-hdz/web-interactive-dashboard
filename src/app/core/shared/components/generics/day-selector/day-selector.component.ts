import { Component, OnInit } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import moment from 'moment';
import { OtsService } from 'app/core/services/Ots.service';


@Component({
  selector: 'app-day-selector',
  standalone: true,
  templateUrl: './day-selector.component.html',
  styleUrls: ['./day-selector.component.css'],
  imports: [
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule
  ]

})
export class DaySelectorComponent implements OnInit {
  dateSelected: Date = moment('2024/11/01', 'YYYY/MM/DD').toDate();
  constructor(private otsService: OtsService) { 
  }

  ngOnInit(): void {
  }

  // Funtion realoads data when date changes
  async onDateChange(event: any): Promise<void> {
    try {
      const selectedDate = event.value;
      await this.otsService.updateOTS(selectedDate);
    } catch (error) {
      console.error('Error al obtener OTS:', error);
    }
  }
}