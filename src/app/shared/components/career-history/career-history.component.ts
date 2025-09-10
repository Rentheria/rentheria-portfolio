import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HistoryExperience } from '../../../core/models/history';
import { CardHistoryComponent } from '../card-history/card-history.component';

@Component({
  selector: 'app-career-history',
  standalone: true,
  imports: [CommonModule, CardHistoryComponent],
  templateUrl: './career-history.component.html',
  styleUrl: './career-history.component.css',
})
export class CareerHistoryComponent {
  expandedIndex: number = -1;

  readonly experiences: HistoryExperience[] = [
    {
      title: 'Web UI Developer',
      company: 'Globant - Federación Patronal de Seguros S.A',
      period: 'March 2024 - June 2025',
      location: 'Remote',
      type: 'Full-time',
      achievements: [
        'Developed complex forms and screens using Angular 17, translating user stories with business rules, formulas, and parameters into fully functional, scalable interfaces.',
        'Implemented a micro-frontend architecture to enhance modularity and scalability of the insurance platform, improving maintainability and deployment workflows.',
        'Integrated front-end components with RESTful APIs to enable seamless data flow and responsive user interactions, boosting overall system performance.',
        'Participated in discovery sessions with business analysts, designers, and engineers to define requirements and produce technical documentation aligned with legacy and new quoting tools.',
        'Managed the full development cycle across DEV, TEST, and PROD environments, ensuring smooth transitions and system integrity through robust CI/CD practices.',
        'Resolved UI/UX and data-related bugs, strengthening system reliability and improving user experience by enforcing quality standards.',
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
      title: 'Web UI Developer',
      company: 'Globant - Santander',
      period: 'May 2023 - March 2024',
      location: 'Remote',
      type: 'Full-time',
      achievements: [
        'Optimized front-end components using Angular to enhance performance and infrastructure efficiency, resulting in a smoother user experience.',
        'Integrated APIs to implement front-end features, ensuring a seamless UX/UI based on guidelines provided by the UX team.',
        'Adapted to project requirements with minimal guidance, effectively delivering high-quality results and meeting tight deadlines.',
        'Collaborated proactively with cross-functional teams to foster a supportive work environment, improving overall team productivity.',
        'Received recognition for maintaining focus on objectives and consistently showing a high level of autonomy, contributing to continuous project improvement.',
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
      title: 'Web UI Developer',
      company: 'Globant - Univision Communications',
      period: 'Nov 2021 - Apr 2023',
      location: 'Remote',
      type: 'Full-time',
      achievements: [
        'Integrated ads using Google PAL SDK on both front-end and back-end, increasing the platform´s monetization efficiency.',
        'Collaborated with engineering leads, product managers, and designers using Agile methodologies to ensure the delivery of high-quality products and seamless feature integration.',
        'Developed the front-end using Angular and integrated APIs to enhance user experience and streamline data flow.',
        'Managed version control with Git, GitHub, and Bitbucket under Scrum methodology to maintain consistent deployments across Local, Dev, Staging, and Prod environments.',
        'Troubleshot and resolved production issues, implementing new functionalities to ensure system reliability and combining front-end components with server-side logic for optimal performance.',
        'Developed back-end endpoints using PHP, AWS, Docker, and Ubuntu to support front-end functionalities and enhance overall system performance.',
        'Implemented new features on Android, RokuTV, and FireTV, improving device compatibility and aligning with customer requirements.',
        'Tested and developed functionalities for FireTV devices, ensuring they met customer specifications and provided an enhanced user experience.',
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
      title: 'Front-end Developer & Intern',
      company: 'Istra',
      period: 'Jan 2020 - Nov 2021',
      location: 'Guadalajara, México',
      type: 'Full-time',
      achievements: [
        'Managed the full-cycle front-end development process using HTML, CSS, and JavaScript—from conception to delivery—ensuring projects met company guidelines and client expectations.',
        'Designed and updated responsive, user-focused interfaces across devices, enhancing usability, performance, and satisfaction.',
        'Integrated client-side web services and implemented customer-specific requirements to deliver tailored, high-functionality applications.',
        'Created technical documentation including problem domain reports, module flowcharts, and mockups to streamline development and improve team collaboration.',
        'Collaborated directly with stakeholders to verify deliverables aligned with project goals, improving transparency and outcome alignment.',
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
