import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/User';
import { AuthService } from '../__services/auth.service'; 
import { Router } from '@angular/router';
import { ErrorService } from '../__services/error.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService,
    private errorHandler: ErrorService,
    private router: Router) { } 

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  register() {
    if (this.registerForm.valid) {
      const user: User = this.registerForm.value;
      user.role = 'user'; 
      this.authService.register(user.name, user.email, user.password, user.role).subscribe( 
        res => console.log("success"), 
        err => this.errorHandler.handleError 
      );
      this.router.navigate(['/login']);
    }
  }
}
