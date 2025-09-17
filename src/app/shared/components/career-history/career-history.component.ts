import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HistoryExperience } from '../../../core/models/history';
import { CardHistoryComponent } from '../card-history/card-history.component';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-career-history',
  standalone: true,
  imports: [CommonModule, CardHistoryComponent, TranslatePipe],
  templateUrl: './career-history.component.html',
  styleUrl: './career-history.component.css',
})
export class CareerHistoryComponent {
  expandedIndex: number = -1;

  readonly experiences: HistoryExperience[] = [
    {
      title: 'experience.globant.federacion.title',
      company: 'experience.globant.federacion.company',
      period: 'experience.globant.federacion.period',
      location: 'experience.globant.federacion.location',
      type: 'experience.globant.federacion.type',
      achievements: [
        'experience.globant.federacion.achievement1',
        'experience.globant.federacion.achievement2',
        'experience.globant.federacion.achievement3',
        'experience.globant.federacion.achievement4',
        'experience.globant.federacion.achievement5',
        'experience.globant.federacion.achievement6',
      ],
      technologies: [
        'Angular',
        'TypeScript',
        'Micro-frontends',
        'REST APIs',
        'CI/CD',
        'Insurance Platform',
      ],
    },
    {
      title: 'experience.globant.santander.title',
      company: 'experience.globant.santander.company',
      period: 'experience.globant.santander.period',
      location: 'experience.globant.santander.location',
      type: 'experience.globant.santander.type',
      achievements: [
        'experience.globant.santander.achievement1',
        'experience.globant.santander.achievement2',
        'experience.globant.santander.achievement3',
        'experience.globant.santander.achievement4',
        'experience.globant.santander.achievement5',
      ],
      technologies: [
        'Angular',
        'TypeScript',
        'REST APIs',
        'UX/UI Design',
        'Performance Optimization',
        'Technical Documentation',
      ],
    },
    {
      title: 'experience.globant.univision.title',
      company: 'experience.globant.univision.company',
      period: 'experience.globant.univision.period',
      location: 'experience.globant.univision.location',
      type: 'experience.globant.univision.type',
      achievements: [
        'experience.globant.univision.achievement1',
        'experience.globant.univision.achievement2',
        'experience.globant.univision.achievement3',
        'experience.globant.univision.achievement4',
        'experience.globant.univision.achievement5',
        'experience.globant.univision.achievement6',
        'experience.globant.univision.achievement7',
        'experience.globant.univision.achievement8',
      ],
      technologies: [
        'Angular',
        'PHP',
        'AWS',
        'Docker',
        'Ubuntu',
        'Android',
        'RokuTV',
        'FireTV',
        'Google PAL SDK',
      ],
    },
    {
      title: 'experience.istra.title',
      company: 'experience.istra.company',
      period: 'experience.istra.period',
      location: 'experience.istra.location',
      type: 'experience.istra.type',
      achievements: [
        'experience.istra.achievement1',
        'experience.istra.achievement2',
        'experience.istra.achievement3',
        'experience.istra.achievement4',
        'experience.istra.achievement5',
      ],
      technologies: [
        'HTML',
        'CSS',
        'JavaScript',
        'Responsive Design',
        'Web Services',
        'Technical Documentation',
      ],
    },
  ];

  toggleExpanded(index: number): void {
    this.expandedIndex = this.expandedIndex === index ? -1 : index;
  }
}
