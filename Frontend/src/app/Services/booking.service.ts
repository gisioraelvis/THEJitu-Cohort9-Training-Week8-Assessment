import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { API_URL } from 'src/constants';
import { AddBooking, Booking, Message } from '../Interfaces';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  constructor(private http: HttpClient) {}
  booking$ = new Subject<Booking[]>();

  addBooking(booking: AddBooking): Observable<Message> {
    return this.http.post<Message>(`${API_URL}/flights`, booking);
  }

  getUserBooking(): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${API_URL}/flights/booking/emails`);
  }

  getOneBooking(id: string): Observable<Booking> {
    return this.http.get<Booking>(`${API_URL}/flights/${id}`);
  }

  deleteBooking(id: string): Observable<Message> {
    return this.http.delete<Message>(`${API_URL}/flights/${id}`);
  }

  updateBooking(id: string, updatedBooking: AddBooking): Observable<Booking> {
    return this.http.put<Booking>(`${API_URL}/flights/${id}`, updatedBooking);
  }
}
