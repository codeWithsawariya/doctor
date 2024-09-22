import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HomeComponent } from './component/dashboard/home/home.component';
import { PatientsComponent } from './component/dashboard/patients/patients.component';
import { AppointmentComponent } from './component/dashboard/appointment/appointment.component';
import { MedicalStaffComponent } from './component/dashboard/medical-staff/medical-staff.component';
import { ReportsComponent } from './component/dashboard/reports/reports.component';
import { AddDoctorComponent } from './component/dashboard/doctors/add-doctor/add-doctor.component';
import { GetAllDoctorComponent } from './component/dashboard/doctors/get-all-doctor/get-all-doctor.component';
import { ViewProfileComponent } from './component/dashboard/doctors/get-all-doctor/view-profile/view-profile.component'; // Import your component

export const routes: Routes = [
    {
        path: '', component: LoginComponent, pathMatch: 'full'
    },
    {
        path: 'dashboard', component: DashboardComponent,
        children: [
            {
                path: '', component: HomeComponent, pathMatch: 'full' // Default route for Dashboard
            },
            {
                path: 'patients', component: PatientsComponent
            },
            {
                path: 'appointments', component: AppointmentComponent
            },
            {
                path: 'doctors/addDoctor', component: AddDoctorComponent // Route for adding a doctor
            },
            {
                path: 'doctors/getAllDoctor', component: GetAllDoctorComponent,
                children: [
                    {
                        path: 'view/:id', component:ViewProfileComponent // Route for viewing a doctor's profile
                    }
                ]
            },
            {
                path: 'medical-staff', component: MedicalStaffComponent
            },
            {
                path: 'reports', component: ReportsComponent
            }
        ]
    }
];
