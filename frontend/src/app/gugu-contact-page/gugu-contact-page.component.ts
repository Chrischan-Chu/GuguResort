import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

@Component({
  selector: 'app-gugu-contact-page',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule, HttpClientModule], 
  templateUrl: './gugu-contact-page.component.html',
  styleUrls: ['./gugu-contact-page.component.css']
})
export class GuguContactPageComponent {
  readonly APIUrl = "http://localhost:5038/api/contact/";

  contact = { firstName: '', lastName: '', email: '', contactNo: '', message: '' };
  contacts: any[] = [];

  constructor(private http: HttpClient) {
    this.getContacts();
  }

 addContact(form: NgForm) {
  if (form.invalid) {
    return;
  }

  this.http.post(this.APIUrl + 'AddContact', this.contact).subscribe(response => {
    alert("Message Sent Successfully!");
    this.contact = { firstName: '', lastName: '', email: '', contactNo: '', message: '' };
    

    form.resetForm(); 

    this.getContacts();
  }, error => {
    alert("Failed to send message!");
    console.error(error);
  });
}

  getContacts() {
    this.http.get<any[]>(this.APIUrl + 'GetContacts').subscribe(response => {
      this.contacts = response;
    }, error => {
      console.error("Error fetching contacts", error);
    });
  }
}