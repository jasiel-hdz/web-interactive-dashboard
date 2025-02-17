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
    const data = {
      start_date: formattedDate,
      end_date: formattedDate,
    };

    this.showLoading();

    try {
      const response = await this.api.post<ApiResponse<any>>('ots', data);
      // Update the otsDay value by emitting the new value
      this.otsDaySubject.next(response);  // Emit the new value to subscribers
      console.log('OTS:', response);
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
}
