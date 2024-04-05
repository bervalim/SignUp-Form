import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.scss',
})
export class SignupFormComponent {
  signupForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/),
    ]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^\(?(?:\d{2})\)?[-. ]?(?:\d{4,5})[-. ]?\d{4}$/),
    ]),
    sex: new FormControl('', [Validators.required]),
  });

  submitSignUpForm() {
    console.log(this.signupForm.get('name')?.errors);
    if (this.signupForm.status == 'VALID') {
      console.log(this.signupForm.value);
      this.signupForm.reset({ sex: '' });
      alert('Cadastro Realizado com Sucesso!!');
    } else {
      alert('Não foi possível concluir o cadastro!!');
    }
  }
}
