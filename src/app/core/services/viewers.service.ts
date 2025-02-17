import Swal from 'sweetalert2';
import { Injectable } from '@angular/core';
import moment from 'moment';
import { BehaviorSubject } from 'rxjs';  // Import BehaviorSubject
import { ApiResponse, ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ViewersService {
  defaulDay = moment('2024/11/01', 'YYYY/MM/DD').toDate();  // Default day
  
  // We use a BehaviorSubject to emit the value of viewersDay
  private viewersDaySubject = new BehaviorSubject<any | null>(null);  // Initializes with null
  viewersDay$ = this.viewersDaySubject.asObservable();  // Make the observable available for subscription
  private viewersWeekSubject = new BehaviorSubject<any | null>(null);  // Initializes with null
  viewersWeek$ = this.viewersWeekSubject.asObservable();  // Make the observable available for subscription
  
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

  async initViewers(): Promise<void> {
    const today = this.defaulDay;
    await this.updateViewers(today);
  }

  async updateViewers(date: Date): Promise<void> {
    const formattedDate = moment(date).format('YYYY-MM-DD');
    
    this.showLoading();

    try {
      // Call the API to get the viewersDay, viewersWeek values
      const dayresponse = await this.api.post<ApiResponse<any>>('viewers/day', { start_date: formattedDate, end_date: formattedDate });
    //   const weekresponse = await this.api.post<ApiResponse<any>>('viewers/week', { day_date: formattedDate });

      // Update the viewersDay, viewersWeek values
      this.viewersDaySubject.next(dayresponse);
    //   this.viewersWeekSubject.next(weekresponse);
    
    } catch (error) {
      Swal.fire('Error', 'There was an issue retrieving the viewers data', 'error');
    } finally {
      this.hideLoading();
    }
  }

  // Method to get the current value of viewersDay
  getStoredViewersDay(): any | null {
    return this.viewersDaySubject.value;  // Returns the current stored value
  }

  // Method to get the current value of viewersWeek
  getStoredViewersWeek(): any | null {
    return this.viewersWeekSubject.value;  // Returns the current stored value
  }
}
