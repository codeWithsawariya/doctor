import { DataService,Doctor } from '../../../../dataservice/dataservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, RouterLink, } from '@angular/router';
@Component({
  selector: 'app-view-profile',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './view-profile.component.html',
  styleUrl: './view-profile.component.css'
})
export class ViewProfileComponent implements OnInit {
  doctorId: string | null = null;
  doctor: Doctor | null = null;

  constructor(private route:ActivatedRoute, private dataService: DataService) {}

  ngOnInit(): void {
    // Get the doctor ID from the route parameters
    this.doctorId = this.route.snapshot.paramMap.get('id');

    if (this.doctorId) {
      this.fetchDoctorById(this.doctorId);
    }
  }

  fetchDoctorById(id: string): void {
    this.dataService.getDoctorById(id).subscribe({
      next: (data) => {
        this.doctor = data;
      },
      error: (error) => {
        console.error('Error fetching doctor:', error);
      }
    });
  }
}