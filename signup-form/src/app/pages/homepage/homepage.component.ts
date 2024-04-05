import { Component } from '@angular/core';
import { SignupFormComponent } from '../../components/form/signup-form/signup-form.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [SignupFormComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {}
