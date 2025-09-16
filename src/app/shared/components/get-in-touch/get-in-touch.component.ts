import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactInformation } from '../../../core/models/ContactInformation';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-get-in-touch',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './get-in-touch.component.html',
  styleUrl: './get-in-touch.component.css',
})
export class GetInTouchComponent {
  @Input() contactInformation?: ContactInformation;
}
