import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataservice/dataservice';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { jwtDecode } from 'jwt-decode'; // Import jwt-decode
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule, RouterOutlet, MatIconModule, MatMenuModule,RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DataService]
})
export class DashboardComponent implements OnInit {
  token: string | null = null; // To store the retrieved token
  decodedToken: any; // Variable to hold the decoded token
  username: string | undefined; // To hold the username
  role: string | undefined; // To hold the role

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    // Retrieve the token when the component initializes
    this.token = this.dataService.getToken();

    if (this.token) {
      console.log('Retrieved token:', this.token);
      
      // Decode the token
      try {
        this.decodedToken = jwtDecode(this.token);
        console.log('Decoded token:', this.decodedToken);
        
        // Access values from the token
        this.username = this.decodedToken.username; // Adjust according to your token structure
        this.role = this.decodedToken.role; // Adjust according to your token structure
        console.log('Username:', this.username);
        console.log('Role:', this.role);
        
      } catch (error) {
        console.error('Error decoding token:', error);
      }
      
    } else {
      console.log('No token found. User is not logged in.');
      this.router.navigate(['/']); // Redirect to login if no token is found
    }
  }

  logout(): void {
    this.dataService.deleteToken(); // Assuming this method deletes the token from storage
    this.router.navigate(['/']); // Redirect to the login page
  }
}
