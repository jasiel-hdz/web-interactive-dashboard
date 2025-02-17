import Swal from 'sweetalert2';
import { Injectable } from '@angular/core';
import moment from 'moment';
import { BehaviorSubject } from 'rxjs';  // Import BehaviorSubject
import { ApiResponse, ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class OtsService {
  defaulDay = moment('2024/11/01', 'YYYY/MM/DD').toDate();  // Default day
  
  // We use a BehaviorSubject to emit the value of otsDay
  private otsDaySubject = new BehaviorSubject<any | null>(null);  // Initializes with null
  otsDay$ = this.otsDaySubject.asObservable();  // Make the observable available for subscription
  private otsWeekSubject = new BehaviorSubject<any | null>(null);  // Initializes with null
  otsWeek$ = this.otsWeekSubject.asObservable();  // Make the observable available for subscription
  
  
  constructor(private api: ApiService) {}

  private minimumLoadingTime = 1;

  private showLoading() {
    Swal.fire({
      title: 'Loading...',
      text: 'Please wait...',
      didOpen: () => {
        Swal.showLoading();
      },
      allowOutsideClick: false,
      backdrop: true,
    });
  }

  private hideLoading() {
    setTimeout(() => {
      Swal.close();
    }, this.minimumLoadingTime);
  }

  async initOTS(): Promise<void> {
    const today = this.defaulDay;
    await this.updateOTS(today);
  }

  async updateOTS(date: Date): Promise<void> {
    const formattedDate = moment(date).format('YYYY-MM-DD');
    
    this.showLoading();

    try {
      // Call the API to get the otsDay, otsWeek and otsYear values
      const dayresponse = await this.api.post<ApiResponse<any>>('ots/day', { start_date: formattedDate, end_date: formattedDate});
      const weekresponse = await this.api.post<ApiResponse<any>>('ots/week', { day_date: formattedDate });

      // Update the otsDay, otsWeek and otsYear values
      this.otsDaySubject.next(dayresponse);
      this.otsWeekSubject.next(weekresponse);

      console.log('OTS day:', dayresponse);
      console.log('OTS week:', weekresponse);

    } catch (error) {
      Swal.fire('Error', 'There was an issue retrieving', 'error');
    } finally {
      this.hideLoading();
    }
  }

  // Method to get the current value of otsDay
  getStoredOtsDay(): any | null {
    return this.otsDaySubject.value;  // Returns the current stored value
  }
  // Method to get the current value of otsWeek
  getStoredOtsWeek(): any | null {
    return this.otsWeekSubject.value;  // Returns the current stored value
  }
}
