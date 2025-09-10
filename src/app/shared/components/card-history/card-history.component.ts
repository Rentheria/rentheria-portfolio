import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryExperience } from '../../../core/models/history';

@Component({
  selector: 'app-card-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-history.component.html',
  styleUrls: ['./card-history.component.css'],
})
export class CardHistoryComponent {
  @Input() history!: HistoryExperience;
  @Input() isExpanded = false;
  @Output() toggleExpanded = new EventEmitter<void>();

  onToggleClick(): void {
    this.toggleExpanded.emit();
  }

  getFirstWord(achievement: string): string {
    return achievement.split(' ')[0];
  }

  getRestOfText(achievement: string): string {
    const words = achievement.split(' ');
    return words.slice(1).join(' ');
  }
}
