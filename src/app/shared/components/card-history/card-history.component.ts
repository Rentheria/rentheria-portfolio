import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryExperience } from '../../../core/models/history';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-card-history',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './card-history.component.html',
  styleUrl: './card-history.component.css',
})
export class CardHistoryComponent {
  @Input() history!: HistoryExperience;
  @Input() isExpanded: boolean = false;
  @Output() toggleExpanded = new EventEmitter<void>();

  onToggleClick(): void {
    this.toggleExpanded.emit();
  }

  getFirstWord(text: string): string {
    return text.split(' ')[0];
  }

  getRestOfText(text: string): string {
    const words = text.split(' ');
    return words.length > 1 ? ' ' + words.slice(1).join(' ') : '';
  }
}
