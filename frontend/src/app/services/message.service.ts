import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private apiURL = environment.apiURL; 

  constructor(private http: HttpClient) {}

  sendMessage(messageData: any) {
    return this.http.post(`${this.apiURL}/sendMessage`, messageData);
  }
}
