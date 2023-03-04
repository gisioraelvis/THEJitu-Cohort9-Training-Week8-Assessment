import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/State/appState';
import { login } from 'src/app/State/Actions/user.actions';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  error: string | null;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.error = null;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      Email: [null, [Validators.required, Validators.email]],
      Password: [null, Validators.required],
    });
  }

  submitForm() {
    const payload = {
      Email: this.form.get('Email')?.value,
      Password: this.form.get('Password')?.value,
    };

    this.store.dispatch(login(payload));
  }

  Close() {
    this.error = null;
  }
}
