import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService, Doctor } from '../../../dataservice/dataservice'; // Adjust import path accordingly
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-get-all-doctor',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterOutlet,RouterLink],
  templateUrl: './get-all-doctor.component.html',
  styleUrls: ['./get-all-doctor.component.css']
})
export class GetAllDoctorComponent implements OnInit {
  doctors: Doctor[] = [];
  searchTerm: string = ''; // Property to hold the search term

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.fetchDoctors();
  }

  fetchDoctors(): void {
    this.dataService.getAllDoctors().subscribe({
      next: (data) => {
        console.log(data[0]);
        
        this.doctors = data;
      },
      error: (error) => {
        console.error('Error fetching doctors:', error);
      }
    });
  }

  get filteredDoctors(): Doctor[] {
    if (!this.searchTerm) {
      return this.doctors;
    }
    const term = this.searchTerm.toLowerCase();
    return this.doctors.filter(doctor =>
      doctor.fullName.toLowerCase().includes(term) ||
      doctor.specialization.toLowerCase().includes(term) ||
      doctor.email.toLowerCase().includes(term) ||
      doctor.contactInformation.includes(term)
    );
  }
}
