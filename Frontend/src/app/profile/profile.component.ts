import { Component, OnInit } from '@angular/core';
import { filter, Observable } from 'rxjs';
import * as UserSelectors from '../State/selectors/user.selector';
import * as UserActions from '../State/Actions/user.actions';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { User } from '../Interfaces';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user$!: Observable<User | null>;
  profileForm!: FormGroup;

  constructor(private store: Store, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.user$ = this.store
      .select(UserSelectors.selectUser)
      .pipe(filter((user) => user !== null));

    this.profileForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.user$.subscribe((user) => {
      this.profileForm.patchValue({
        name: user?.Name || '',
        email: user?.Email || '',
        password: '',
      });
    });
  }

  onUpdateProfile() {
    if (this.profileForm.valid) {
      this.user$.pipe(filter((user) => user !== null)).subscribe((user) => {
        const updatedUser: User = {
          ...user,
          ...this.profileForm.value,
        };
        this.store.dispatch(UserActions.updateProfile({ user: updatedUser }));
      });
    }
  }
}
