import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from 'express';
import { AuthService } from '../../services/auth.service';
import { confirmPasswordValidator } from '../../validators/confirm-password.validator';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export default class UserEditComponent {

  // fb = inject(FormBuilder);
  // authService = inject(AuthService);
  // router = inject(Router);

  // registerForm !: FormGroup;

  // ngOnInit(): void {
  //   this.registerForm = this.fb.group(
  //     {
  //       firstName : ['', Validators.required],
  //       lastName : ['', Validators.required],
  //       email : ['', Validators.compose([Validators.required, Validators.email])],
  //       username : ['', Validators.required]
  //     },
  //     {
  //       validator: confirmPasswordValidator('password', 'confirmPassword')
  //     }
  //   );
  // }


}
