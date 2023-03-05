import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/State/appState';
import { register } from 'src/app/State/Actions/user.actions';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      Name: [null, Validators.required],
      Email: [null, [Validators.required, Validators.email]],
      Password: [null, Validators.required],
    });
  }

  submitForm() {
    const payload = {
      Name: this.form.get('Name')?.value,
      Email: this.form.get('Email')?.value,
      Password: this.form.get('Password')?.value,
    };
    this.store.dispatch(register(payload));
    this.router.navigate(['login']);
  }
}
