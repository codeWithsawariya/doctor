import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

export interface Doctor {
  id: string;  // Add this line for the doctor ID
  fullName: string;
  specialization: string;
  email: string;
  contactInformation: string;
}


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000'; // Update with your backend URL

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  signIn(email: string, password: string): Observable<any> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/signin`, { email, password });
  }

  handleLoginResponse(response: any): void {
    if (response && response.token) {
      this.cookieService.set('token', response.token, { secure: true, sameSite: 'Strict' });
      console.log('Token stored successfully:', response.token);
    } else {
      console.error('No token received in response');
    }
  }

  getToken(): string | null {
    return this.cookieService.get('token');
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  deleteToken(): void {
    this.cookieService.delete('token');
    console.log('Token deleted successfully');
  }

  addDoctor(doctorData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/doctor/register`, doctorData);
  }

  getAllDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`${this.apiUrl}/doctor/doctors`); // Ensure this matches your API endpoint
  }
  getDoctorById(id: string): Observable<Doctor> {
    return this.http.get<Doctor>(`${this.apiUrl}/doctor/doctors/${id}`); // Adjust this endpoint as necessary
  }
  
}
