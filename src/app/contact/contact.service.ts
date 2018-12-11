import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContactService {
  private emailUrl = '';

  constructor(private http: HttpClient) { }

  sendEmail(message: Email): Promise<Email> {
    return this.http.post(this.emailUrl, message).toPromise();
  }
}

export interface Email {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}
