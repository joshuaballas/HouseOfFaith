import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactService, Email } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  public contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _cs: ContactService
  ) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  public sendEmail(email: Email) {
    this._cs.sendEmail(email).then(data => {
      console.log(data);
      alert('success');
    }).catch(error => {
      console.log(error);
    });
  }
}
