import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../dataservice/dataservice'; // Ensure this path is correct
import Swal from 'sweetalert2';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatLabel } from '@angular/material/form-field';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css'],
  standalone: true,
  imports: [CommonModule, MatLabel, MatFormField, MatInput, MatOption, MatSelect, ReactiveFormsModule, HttpClientModule, MatDatepicker, MatNativeDateModule, MatDatepickerModule],
  providers: [DataService]
})
export class AddDoctorComponent implements OnInit {
  addDoctorForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private router: Router,
  ) {
    this.addDoctorForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
      contactInformation: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      specialization: ['', Validators.required],
      workSchedule: ['', Validators.required],
      documentation: ['', Validators.required],
      profileStatus: ['', Validators.required],
      authentication: this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]],
      }),
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log("doctor", this.addDoctorForm.value); // Log the form values
    console.log("value", this.addDoctorForm.valid);  // Log the form validity
    console.log("dfdfd", this.addDoctorForm.errors); // Log any form errors

    if (this.addDoctorForm.valid) {
      this.dataService.addDoctor(this.addDoctorForm.value).subscribe(
        (response: any) => {
          Swal.fire({
            icon: 'success',
            title: 'Doctor Added Successfully',
            text: 'The doctor has been added to the system!',
          }).then(() => {
            this.router.navigate(['/dashboard']); // Navigate to dashboard or desired page
          });
        },
        (error: HttpErrorResponse) => {
          Swal.fire({
            icon: 'error',
            title: 'Add Doctor Failed',
            text: error.error.message || 'There was an error adding the doctor',
          });
        }
      );
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Form Invalid',
        text: 'Please fill in all fields correctly.',
      });
    }
  }
}
