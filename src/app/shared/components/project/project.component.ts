import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFeaturedProjectComponent } from '../card-featured-project/card-featured-project.component';
import { FeatureProject } from '../../../core/models/featureProject';

@Component({
  selector: 'app-project',
  imports: [CommonModule, CardFeaturedProjectComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent {
  readonly featuredProjects: FeatureProject[] = [
    {
      title: 'Swiss Premier - Mobile App',
      image: {
        src: 'assets/swiss_mobile.png',
        alt: 'Swiss Premier Mobile App - Debt Collection Application',
      },
      duration: 'May 2024 - Aug 2025',
      description:
        'Developed a comprehensive mobile debt collection application using Ionic and Angular 18 for field collectors (cobradores) to manage client routes, track payments (abonos), and generate reports. Built with Capacitor for cross-platform deployment on Android and iOS, featuring offline capabilities with SQLite, PDF generation, and real-time data synchronization.',
      technologies: [
        'Angular 18',
        'Ionic 8',
        'Capacitor',
        'TypeScript',
        'SQLite',
        'PDFMake',
        'Angular Material',
        'RxJS',
        'Sass',
        'Android Studio',
        'Xcode',
        'Firebase',
        'JWT Authentication',
        'PWA',
      ],
    },
    {
      title: 'Swiss Premier - Web',
      image: {
        src: 'assets/swiss_admin.png',
        alt: 'Swiss Premier Web Dashboard - Administrative Interface',
      },
      duration: 'June 2025 - Aug 2025',
      description:
        'Designed and implemented a comprehensive web-based administrative dashboard for debt collection management using Angular 18 and Tailwind CSS. Features include route management, client administration, payment tracking (abonos), report generation, and user role management. Built with Angular Material components, Firebase integration, and responsive design for optimal user experience across devices.',
      technologies: [
        'Angular 18',
        'Tailwind CSS',
        'Angular Material',
        'TypeScript',
        'Firebase',
        'RxJS',
        'Lucide Icons',
        'PDFMake',
        'Moment.js',
        'JWT Authentication',
        'Responsive Design',
        'PWA',
      ],
    },
    {
      title: 'IMTPaveExpress - Web',
      image: {
        src: 'assets/imtpx.png',
        alt: 'IMTPaveExpress Web Application - Pavement Analysis Platform',
      },
      duration: 'March 2024 - Aug 2025',
      description:
        'Built a comprehensive Angular 17 web application for pavement analysis and project management. Features include real-time data visualization, interactive charts, spectral and probabilistic analysis forms, project management, user authentication, and responsive design. Integrated with backend APIs for pavement calculations, file uploads, and user management with Angular Material components and Chart.js for data visualization.',
      technologies: [
        'Angular 17',
        'TypeScript',
        'Angular Material',
        'RxJS',
        'Chart.js',
        'Bootstrap',
        'SCSS',
        'Firebase',
        'JWT Authentication',
        'Angular CDK',
        'Ng-Bootstrap',
        'jsPDF',
        'XLSX',
        'Moment.js',
        'Responsive Design',
      ],
    },
    {
      title: 'Cotizly',
      image: {
        src: 'assets/cotizly.png',
        alt: 'Cotizly SaaS Platform - Quote and Order Management System',
      },
      duration: 'June 2025 - current',
      description:
        'Designed and implemented a comprehensive SaaS platform for quote and order management using Angular 19 frontend and NestJS backend. Built multi-tenant architecture with enterprise-grade security, dynamic quote builder, product catalog management, and real-time analytics dashboard. Features JWT authentication, role-based access control, PDF/Excel export capabilities, and Firebase integration for scalable deployment.',
      technologies: [
        'Angular 19',
        'NestJS',
        'TypeScript',
        'PostgreSQL',
        'TailwindCSS',
        'Angular Material',
        'JWT',
        'Firebase',
        'Docker',
        'Swagger',
        'RxJS',
        'TypeORM',
        'Heroku',
        'CI/CD',
      ],
    },
    {
      title: 'IMTPaveExpress - Backend (Calculations)',
      image: {
        src: 'assets/imtpx_calculos.png',
        alt: 'IMTPaveExpress Backend - Pavement Engineering Calculations API',
      },
      duration: 'March 2024 - Aug 2025',
      description:
        'Developed a high-performance Spring Boot REST API for pavement engineering calculations, performing structural and probabilistic analysis of road pavements. Features include stress, strain, and life prediction analysis under different traffic loads, with support for spectral and probabilistic analysis methods. Built with comprehensive caching, monitoring, and Docker containerization for scalable deployment.',
      technologies: [
        'Java 17',
        'Spring Boot 3.5.3',
        'Maven',
        'Lombok',
        'Micrometer',
        'Spring Cache',
        'Spring Actuator',
        'Docker',
        'Nginx',
        'JWT Authentication',
        'Swagger/OpenAPI',
        'Caffeine Cache',
        'Bean Validation',
        'REST API',
      ],
    },
    {
      title: 'IMTPaveExpress - Backend (User Management)',
      image: {
        src: 'assets/imtpx_users.png',
        alt: 'IMTPaveExpress User Management - NestJS Backend API',
      },
      duration: 'March 2024 - Aug 2025',
      description:
        'Designed and implemented a comprehensive NestJS backend API for user management and project handling in the IMT-PAVE platform. Features include JWT authentication, user registration/login, password recovery, profile management, project file uploads (.imt format), and PostgreSQL integration. Built with TypeORM, Swagger documentation, role-based access control, and Firebase integration for file storage.',
      technologies: [
        'NestJS',
        'TypeScript',
        'PostgreSQL',
        'TypeORM',
        'JWT',
        'Passport',
        'bcrypt',
        'Firebase Admin',
        'Nodemailer',
        'Swagger',
        'Class Validator',
        'Multer',
        'Docker',
        'CORS',
      ],
    },
    {
      title: 'My Portfolio',
      image: {
        src: 'assets/my_portfolio.png',
        alt: 'Personal Portfolio Website - Angular and Tailwind CSS',
      },
      duration: 'August 2025',
      description: 'My portfolio website built with Angular and Tailwind CSS.',
      technologies: ['Angular', 'Tailwind CSS', 'TypeScript'],
    },
  ];
}
