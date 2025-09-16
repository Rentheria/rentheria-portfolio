import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Translation {
  [key: string]: string;
}

export interface Translations {
  [language: string]: Translation;
}

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private currentLanguageSubject = new BehaviorSubject<string>('en');
  public currentLanguage$ = this.currentLanguageSubject.asObservable();

  private translations: Translations = {
    en: {
      // Navigation
      'nav.about': 'About',
      'nav.projects': 'Projects',
      'nav.experience': 'Experience',
      'nav.contact': 'Contact',

      // Hero Section
      'hero.title.software': 'Software',
      'hero.title.development': 'Development',
      'hero.title.engineer': 'Engineer',
      'hero.subtitle.experience': 'Software Engineer with',
      'hero.subtitle.years': '5+ years',
      'hero.subtitle.experienceText':
        'of experience delivering enterprise applications and building digital products.',
      'hero.subtitle.specialized': 'Specialized in',
      'hero.subtitle.creating':
        '— creating scalable, high-impact solutions while staying ahead of emerging technologies.',
      'hero.button.viewWork': 'View My Work',
      'hero.button.experience': 'Experience',
      'hero.button.getInTouch': 'Get In Touch',

      // About Section
      'about.title': 'About ',
      'about.title2': 'Me',
      'about.description1':
        'Manuel Alejandro Hernandez Renteria is a Web UI Developer with over 5 years of experience in enterprise web and hybrid application development. He has led and contributed to projects involving Angular 17, micro-frontend architectures, and cross-platform solutions built with Ionic and NestJS.',
      'about.description2':
        'His strengths include scalable front-end design, API integration, CI/CD pipelines, and performance optimization. Known for translating business needs into robust interfaces and collaborating effectively within cross-functional Agile teams.',
      'about.skills.frontend': 'Front-end',
      'about.skills.frontendDesc': 'Angular, TypeScript',
      'about.skills.mobile': 'Mobile',
      'about.skills.mobileDesc': 'Ionic, Hybrid Apps',
      'about.skills.backend': 'Back-end',
      'about.skills.backendDesc': 'NestJS, Spring',
      'about.skills.devops': 'DevOps',
      'about.skills.devopsDesc': 'CI/CD, Firebase',

      // Projects Section
      'projects.title': 'Featured Projects',
      'projects.subtitle': 'A showcase of my recent work and contributions',

      // Experience Section
      'experience.title': 'Professional Experience',
      'experience.subtitle': 'My career journey and achievements',

      // Contact Section
      'contact.title': 'Get In ',
      'contact.title2': 'Touch',
      'contact.subtitle': "Let's work together to bring your ideas to life",
      'contact.email': 'Email',
      'contact.location': 'Location',
      'contact.locationText': 'Available for Remote Work',
      'contact.coffee': 'Coffee Chat',
      'contact.coffeeText': 'Always open for tech discussions',
      'contact.social': 'Connect on Social',

      // Common
      'common.loading': 'Loading...',
      'common.error': 'Error',
      'common.success': 'Success',
      'common.close': 'Close',
      'common.readMore': 'Read More',
      'common.readLess': 'Read Less',
    },
    es: {
      // Navigation
      'nav.about': 'Acerca de',
      'nav.projects': 'Proyectos',
      'nav.experience': 'Experiencia',
      'nav.contact': 'Contacto',

      // Hero Section
      'hero.title.software': 'Ingeniero ',
      'hero.title.development': 'en desarrollo ',
      'hero.title.engineer': 'de software',
      'hero.subtitle.experience': 'Ingeniero de Software con',
      'hero.subtitle.years': '5+ años',
      'hero.subtitle.experienceText':
        'de experiencia entregando aplicaciones empresariales y construyendo productos digitales.',
      'hero.subtitle.specialized': 'Especializado en',
      'hero.subtitle.creating':
        '— creando soluciones escalables y de alto impacto mientras me mantengo al día con tecnologías emergentes.',
      'hero.button.viewWork': 'Ver Mi Trabajo',
      'hero.button.experience': 'Experiencia',
      'hero.button.getInTouch': 'Ponte en Contacto',

      // About Section
      'about.title': 'Acerca ',
      'about.title2': 'de Mí',
      'about.description1':
        'Manuel Alejandro Hernandez Renteria es un Desarrollador Web UI con más de 5 años de experiencia en desarrollo de aplicaciones web empresariales e híbridas. Ha liderado y contribuido a proyectos que involucran Angular 17, arquitecturas de micro-frontend y soluciones multiplataforma construidas con Ionic y NestJS.',
      'about.description2':
        'Sus fortalezas incluyen diseño front-end escalable, integración de APIs, pipelines CI/CD y optimización de rendimiento. Conocido por traducir necesidades empresariales en interfaces robustas y colaborar efectivamente dentro de equipos ágiles multifuncionales.',
      'about.skills.frontend': 'Front-end',
      'about.skills.frontendDesc': 'Angular, TypeScript',
      'about.skills.mobile': 'Móvil',
      'about.skills.mobileDesc': 'Ionic, Apps Híbridas',
      'about.skills.backend': 'Back-end',
      'about.skills.backendDesc': 'NestJS, Spring',
      'about.skills.devops': 'DevOps',
      'about.skills.devopsDesc': 'CI/CD, Firebase',

      // Projects Section
      'projects.title': 'Proyectos Destacados',
      'projects.subtitle':
        'Una muestra de mi trabajo reciente y contribuciones',

      // Experience Section
      'experience.title': 'Experiencia Profesional',
      'experience.subtitle': 'Mi trayectoria profesional y logros',

      // Contact Section
      'contact.title': 'Ponte en ',
      'contact.title2': 'Contacto',
      'contact.subtitle': 'Trabajemos juntos para dar vida a tus ideas',
      'contact.email': 'Correo',
      'contact.location': 'Ubicación',
      'contact.locationText': 'Disponible para Trabajo Remoto',
      'contact.coffee': 'Charla de Café',
      'contact.coffeeText': 'Siempre abierto para discusiones técnicas',
      'contact.social': 'Conecta en Redes Sociales',

      // Common
      'common.loading': 'Cargando...',
      'common.error': 'Error',
      'common.success': 'Éxito',
      'common.close': 'Cerrar',
      'common.readMore': 'Leer Más',
      'common.readLess': 'Leer Menos',
    },
  };

  constructor() {
    // Load saved language from localStorage or default to 'en'
    const savedLanguage = localStorage.getItem('portfolio-language') || 'en';
    this.setLanguage(savedLanguage);
  }

  getCurrentLanguage(): string {
    return this.currentLanguageSubject.value;
  }

  setLanguage(language: string): void {
    if (this.translations[language]) {
      this.currentLanguageSubject.next(language);
      localStorage.setItem('portfolio-language', language);
    }
  }

  translate(key: string): string {
    const currentLang = this.getCurrentLanguage();
    return this.translations[currentLang]?.[key] || key;
  }

  getAvailableLanguages(): Array<{ code: string; name: string; flag: string }> {
    return [
      { code: 'en', name: 'English', flag: '🇺🇸' },
      { code: 'es', name: 'Español', flag: '🇲🇽' },
    ];
  }
}
