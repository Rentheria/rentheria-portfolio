import { Component } from '@angular/core';
import { ContactInformation } from '../../../core/models/ContactInformation';
import { GetInTouchComponent } from '../get-in-touch/get-in-touch.component';
import { MessageFormComponent } from '../message-form/message-form.component';

@Component({
  selector: 'app-contact',
  imports: [GetInTouchComponent, MessageFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  readonly contactInformation: ContactInformation = {
    email: 'rentheria.dev@gmail.com',
    phone: '+523334714285',
    address: 'Zapopan, Jalisco, Mexico',
    location: 'Available for Remote Work',
    coffeeChat: 'Always open for tech discussions',
  };
}
