import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactInformation } from '../../../core/models/ContactInformation';
import { GetInTouchComponent } from '../get-in-touch/get-in-touch.component';
import { MessageFormComponent } from '../message-form/message-form.component';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-contact',
  imports: [
    CommonModule,
    GetInTouchComponent,
    MessageFormComponent,
    TranslatePipe,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  @Input() contactInformation?: ContactInformation;
}
