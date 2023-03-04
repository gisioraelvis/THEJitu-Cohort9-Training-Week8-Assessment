import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, Message, LoginUser, LoginSuccess } from '../Interfaces/index';
import { Observable } from 'rxjs';
import { API_URL } from 'src/constants';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  registerUser(user: User): Observable<Message> {
    return this.http.post<Message>(`${API_URL}/auth/register`, user);
  }

  loginUser(user: LoginUser): Observable<LoginSuccess> {
    const { Email, Password } = user;
    return this.http.post<LoginSuccess>(`${API_URL}/auth/login`, {
      Email,
      Password,
    });
  }

  updateProfile(user: User): Observable<User> {
    return this.http.put<User>(`${API_URL}/auth/update-profile`, user);
  }
}
