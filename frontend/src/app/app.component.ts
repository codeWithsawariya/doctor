import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
/* In your styles.css or main CSS file */


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent ,HttpClientModule,ReactiveFormsModule,MatIconModule,MatButtonModule,MatDatepickerModule,MatInputModule,MatFormFieldModule,MatNativeDateModule,MatSelectModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 title="bhjkghjkhuj"          
}
