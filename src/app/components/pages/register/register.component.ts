import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule, NavbarComponent, FooterComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  showPass = false;
  showPass2 = false;

  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required]]
    }, {
      validators: this.passwordsIguales('password', 'password2')
    });
  }

  // VALIDACIÓN PERSONALIZADA
  passwordsIguales(pass1: string, pass2: string) {
    return (formGroup: FormGroup) => {
      const p1 = formGroup.controls[pass1];
      const p2 = formGroup.controls[pass2];

      if (p1.value !== p2.value) {
        p2.setErrors({ noIguales: true });
      } else {
        p2.setErrors(null);
      }
    };
  }

  submit() {
    if (this.form.invalid) return;

    console.log("Datos del registro:", this.form.value);
  }

}
