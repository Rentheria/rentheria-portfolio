import { Component, Input } from '@angular/core';
import { ContactInformation } from '../../../core/models/ContactInformation';

@Component({
  selector: 'app-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrl: './get-in-touch.component.css',
  standalone: true,
})
export class GetInTouchComponent {
  @Input() contactInformation?: ContactInformation;
}
