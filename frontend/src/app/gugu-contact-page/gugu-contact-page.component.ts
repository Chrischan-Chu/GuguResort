import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-gugu-contact-page',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule, HttpClientModule], 
  providers: [MessageService],
  templateUrl: './gugu-contact-page.component.html',
  styleUrls: ['./gugu-contact-page.component.css']
})
export class GuguContactPageComponent {
  
  contact = { firstName: '', lastName: '', email: '', contactNo: '', message: '' };

  constructor(private messageService: MessageService) {}

  addContact(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.messageService.sendMessage(this.contact).subscribe(response => {
      alert("Message Sent Successfully!");
      this.contact = { firstName: '', lastName: '', email: '', contactNo: '', message: '' };
      form.resetForm();
    }, error => {
      alert("Failed to send message!");
      console.error(error);
    });
  }
}
