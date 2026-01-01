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
      'hero.subtitle.years': '6 years',
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
      'projects.title': 'Featured ',
      'projects.title2': 'Projects',
      'projects.subtitle': 'A showcase of my recent work and contributions',
      'projects.techs': 'techs',

      // Project Descriptions
      'projects.swiss.mobile.description':
        'Developed a comprehensive mobile debt collection application using Ionic and Angular 18 for field collectors (cobradores) to manage client routes, track payments (abonos), and generate reports. Built with Capacitor for cross-platform deployment on Android and iOS, featuring offline capabilities with SQLite, PDF generation, and real-time data synchronization.',
      'projects.swiss.web.description':
        'Designed and implemented a comprehensive web-based administrative dashboard for debt collection management using Angular 18 and Tailwind CSS. Features include route management, client administration, payment tracking (abonos), report generation, and user role management. Built with Angular Material components, Firebase integration, and responsive design for optimal user experience across devices.',
      'projects.imtpx.web.description':
        'Built a comprehensive Angular 17 web application for pavement analysis and project management. Features include real-time data visualization, interactive charts, spectral and probabilistic analysis forms, project management, user authentication, and responsive design. Integrated with backend APIs for pavement calculations, file uploads, and user management with Angular Material components and Chart.js for data visualization.',
      'projects.cotizly.description':
        'Designed and implemented a comprehensive SaaS platform for quote and order management using Angular 19 frontend and NestJS backend. Built multi-tenant architecture with enterprise-grade security, dynamic quote builder, product catalog management, and real-time analytics dashboard. Features JWT authentication, role-based access control, PDF/Excel export capabilities, and Firebase integration for scalable deployment.',
      'projects.imtpx.calculations.description':
        'Developed a high-performance Spring Boot REST API for pavement engineering calculations, performing structural and probabilistic analysis of road pavements. Features include stress, strain, and life prediction analysis under different traffic loads, with support for spectral and probabilistic analysis methods. Built with comprehensive caching, monitoring, and Docker containerization for scalable deployment.',
      'projects.imtpx.users.description':
        'Designed and implemented a comprehensive NestJS backend API for user management and project handling in the IMT-PAVE platform. Features include JWT authentication, user registration/login, password recovery, profile management, project file uploads (.imt format), and PostgreSQL integration. Built with TypeORM, Swagger documentation, role-based access control, and Firebase integration for file storage.',
      'projects.portfolio.description':
        'My portfolio website built with Angular and Tailwind CSS.',
      'projects.orkesta.description':
        'Comprehensive event management system allowing organizers to create and host events with digital invitations, intelligent RSVP, interactive table planning, automated messaging, and real-time check-in. Developed with Angular 19 (Standalone Components, Signals, SSR) and NestJS 11 (Modular Architecture, Prisma ORM). Features multi-role system, WhatsApp Business API integration, and scalable architecture deployed on Railway with Docker.',
      'projects.realDelPaso.description':
        'Premium corporate website for luxury event venue with modern architecture, advanced SEO optimization, and lead conversion focus. Implements Server-Side Rendering (SSR) and Static Site Generation (SSG) for maximum performance and better indexing. Features interactive gallery with lightbox, contact forms, WhatsApp integration, dynamic testimonials, and responsive design with custom design system.',

      // Experience Section
      'experience.title': 'Professional ',
      'experience.title2': 'Experience',
      'experience.subtitle': 'My career journey and achievements',
      'experience.achievements': 'KEY ACHIEVEMENTS',
      'experience.technologies': 'Technologies',

      // Experience Details
      'experience.globant.federacion.title': 'Web UI Developer',
      'experience.globant.federacion.company':
        'Globant - Federación Patronal de Seguros S.A',
      'experience.globant.federacion.period': 'March 2024 - June 2025',
      'experience.globant.federacion.location': 'Remote',
      'experience.globant.federacion.type': 'Full-time',
      'experience.globant.federacion.achievement1':
        'Developed complex forms and screens using Angular 17, translating user stories with business rules, formulas, and parameters into fully functional, scalable interfaces.',
      'experience.globant.federacion.achievement2':
        'Implemented a micro-frontend architecture to enhance modularity and scalability of the insurance platform, improving maintainability and deployment workflows.',
      'experience.globant.federacion.achievement3':
        'Integrated front-end components with RESTful APIs to enable seamless data flow and responsive user interactions, boosting overall system performance.',
      'experience.globant.federacion.achievement4':
        'Participated in discovery sessions with business analysts, designers, and engineers to define requirements and produce technical documentation aligned with legacy and new quoting tools.',
      'experience.globant.federacion.achievement5':
        'Managed the full development cycle across DEV, TEST, and PROD environments, ensuring smooth transitions and system integrity through robust CI/CD practices.',
      'experience.globant.federacion.achievement6':
        'Resolved UI/UX and data-related bugs, strengthening system reliability and improving user experience by enforcing quality standards.',

      'experience.globant.santander.title': 'Web UI Developer',
      'experience.globant.santander.company': 'Globant - Santander',
      'experience.globant.santander.period': 'May 2023 - March 2024',
      'experience.globant.santander.location': 'Remote',
      'experience.globant.santander.type': 'Full-time',
      'experience.globant.santander.achievement1':
        'Optimized front-end components using Angular to enhance performance and infrastructure efficiency, resulting in a smoother user experience.',
      'experience.globant.santander.achievement2':
        'Integrated APIs to implement front-end features, ensuring a seamless UX/UI based on guidelines provided by the UX team.',
      'experience.globant.santander.achievement3':
        'Adapted to project requirements with minimal guidance, effectively delivering high-quality results and meeting tight deadlines.',
      'experience.globant.santander.achievement4':
        'Collaborated proactively with cross-functional teams to foster a supportive work environment, improving overall team productivity.',
      'experience.globant.santander.achievement5':
        'Received recognition for maintaining focus on objectives and consistently showing a high level of autonomy, contributing to continuous project improvement.',

      'experience.globant.univision.title': 'Web UI Developer',
      'experience.globant.univision.company':
        'Globant - Univision Communications',
      'experience.globant.univision.period': 'Nov 2021 - Apr 2023',
      'experience.globant.univision.location': 'Remote',
      'experience.globant.univision.type': 'Full-time',
      'experience.globant.univision.achievement1':
        'Integrated ads using Google PAL SDK on both front-end and back-end, increasing the platform´s monetization efficiency.',
      'experience.globant.univision.achievement2':
        'Collaborated with engineering leads, product managers, and designers using Agile methodologies to ensure the delivery of high-quality products and seamless feature integration.',
      'experience.globant.univision.achievement3':
        'Developed the front-end using Angular and integrated APIs to enhance user experience and streamline data flow.',
      'experience.globant.univision.achievement4':
        'Managed version control with Git, GitHub, and Bitbucket under Scrum methodology to maintain consistent deployments across Local, Dev, Staging, and Prod environments.',
      'experience.globant.univision.achievement5':
        'Troubleshot and resolved production issues, implementing new functionalities to ensure system reliability and combining front-end components with server-side logic for optimal performance.',
      'experience.globant.univision.achievement6':
        'Developed back-end endpoints using PHP, AWS, Docker, and Ubuntu to support front-end functionalities and enhance overall system performance.',
      'experience.globant.univision.achievement7':
        'Implemented new features on Android, RokuTV, and FireTV, improving device compatibility and aligning with customer requirements.',
      'experience.globant.univision.achievement8':
        'Tested and developed functionalities for FireTV devices, ensuring they met customer specifications and provided an enhanced user experience.',

      'experience.istra.title': 'Front-end Developer & Intern',
      'experience.istra.company': 'Istra',
      'experience.istra.period': 'Jan 2020 - Nov 2021',
      'experience.istra.location': 'Guadalajara, México',
      'experience.istra.type': 'Full-time',
      'experience.istra.achievement1':
        'Managed the full-cycle front-end development process using HTML, CSS, and JavaScript—from conception to delivery—ensuring projects met company guidelines and client expectations.',
      'experience.istra.achievement2':
        'Designed and updated responsive, user-focused interfaces across devices, enhancing usability, performance, and satisfaction.',
      'experience.istra.achievement3':
        'Integrated client-side web services and implemented customer-specific requirements to deliver tailored, high-functionality applications.',
      'experience.istra.achievement4':
        'Created technical documentation including problem domain reports, module flowcharts, and mockups to streamline development and improve team collaboration.',
      'experience.istra.achievement5':
        'Collaborated directly with stakeholders to verify deliverables aligned with project goals, improving transparency and outcome alignment.',

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

      // Contact Form
      'contact.form.title': 'Send me a message',
      'contact.form.fields.name': 'Name',
      'contact.form.fields.email': 'Email',
      'contact.form.fields.subject': 'Subject',
      'contact.form.fields.message': 'Message',
      'contact.form.labels.name': 'Your Name',
      'contact.form.labels.email': 'Your Email',
      'contact.form.labels.subject': 'Subject',
      'contact.form.labels.message': 'Your Message',
      'contact.form.send': 'Send Message',
      'contact.form.sending': 'Sending...',
      'contact.form.success':
        'Email client opened! Please send the message from your email client.',
      'contact.form.error': 'Failed to open email client. Please try again.',
      'contact.form.validation.required': 'is required',
      'contact.form.validation.email': 'Please enter a valid email address',
      'contact.form.validation.minLength': 'must be at least',
      'contact.form.validation.maxLength': 'must not exceed',
      'contact.form.validation.characters': 'characters',

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
      'hero.subtitle.years': '6 años',
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
      'projects.title': 'Proyectos ',
      'projects.title2': 'Destacados',
      'projects.subtitle':
        'Una muestra de mi trabajo reciente y contribuciones',
      'projects.techs': 'tecnologías',

      // Project Descriptions
      'projects.swiss.mobile.description':
        'Desarrollé una aplicación móvil de recolección de deudas completa utilizando Ionic y Angular 18 para los cobradores de campo (cobradores) para gestionar rutas de clientes, rastrear pagos (abonos) y generar informes. Construido con Capacitor para la implementación cruzada en Android e iOS, con capacidades de funcionamiento sin conexión con SQLite, generación de PDF y sincronización de datos en tiempo real.',
      'projects.swiss.web.description':
        'Diseñé e implementé un panel administrativo web completo para el manejo de deudas utilizando Angular 18 y Tailwind CSS. Incluye gestión de rutas, administración de clientes, seguimiento de pagos (abonos), generación de informes y gestión de roles de usuario. Construido con componentes Angular Material, integración con Firebase y diseño responsivo para una experiencia de usuario óptima en todos los dispositivos.',
      'projects.imtpx.web.description':
        'Construí una aplicación web Angular 17 completa para análisis de pavimentos y gestión de proyectos. Incluye visualización de datos en tiempo real, gráficos interactivos, formularios de análisis espectral y probabilístico, gestión de proyectos, autenticación de usuarios y diseño responsivo. Integrado con API de backend para cálculos de pavimentos, subida de archivos y gestión de usuarios con componentes Angular Material y Chart.js para visualización de datos.',
      'projects.cotizly.description':
        'Diseñé e implementé una plataforma SaaS completa para la gestión de cotizaciones y pedidos utilizando un frontend Angular 19 y un backend NestJS. Construí una arquitectura multi-cliente con seguridad de nivel empresarial, constructor de cotizaciones dinámicas, gestión de catálogo de productos y panel de análisis en tiempo real. Incluye autenticación JWT, control de acceso basado en roles, capacidades de exportación PDF/Excel y integración con Firebase para un despliegue escalable.',
      'projects.imtpx.calculations.description':
        'Desarrollé una API REST de Spring Boot de alto rendimiento para cálculos de ingeniería de pavimentos, realizando análisis estructural y probabilístico de pavimentos de carreteras. Incluye análisis de predicción de vida y esfuerzo bajo diferentes cargas de tráfico, con soporte para métodos de análisis espectral y probabilístico. Construido con caché completo, monitoreo y contenedorización con Docker para un despliegue escalable.',
      'projects.imtpx.users.description':
        'Diseñé e implementé una API de backend NestJS completa para la gestión de usuarios y manejo de proyectos en la plataforma IMT-PAVE. Incluye autenticación JWT, registro/inicio de sesión de usuarios, recuperación de contraseña, gestión de perfil, subida de archivos de proyecto (.imt), y integración con PostgreSQL. Construido con TypeORM, documentación Swagger, control de acceso basado en roles y almacenamiento en Firebase para archivos.',
      'projects.portfolio.description':
        'Mi sitio web de portafolio construido con Angular y Tailwind CSS.',
      'projects.orkesta.description':
        'Sistema completo de gestión de eventos que permite a organizadores crear, gestionar y organizar eventos con invitaciones digitales, RSVP inteligente, planner de mesas interactivo, mensajería automatizada y check-in en tiempo real. Desarrollado con Angular 19 (Standalone Components, Signals, SSR) y NestJS 11 (Arquitectura modular, Prisma ORM). Implementa sistema multi-rol, integración con WhatsApp Business API, y arquitectura escalable desplegada en Railway con Docker.',
      'projects.realDelPaso.description':
        'Sitio web corporativo premium para salón de eventos de lujo con arquitectura moderna, optimización SEO avanzada y enfoque en conversión de leads. Implementa Server-Side Rendering (SSR) y Static Site Generation (SSG) para máximo rendimiento y mejor indexación. Incluye galería interactiva con lightbox, formularios de contacto, integración WhatsApp, testimonios dinámicos y diseño responsive con sistema de diseño personalizado.',

      // Experience Section
      'experience.title': 'Experiencia ',
      'experience.title2': 'Profesional',
      'experience.subtitle': 'Mi trayectoria profesional y logros',
      'experience.achievements': 'LOGROS CLAVE',
      'experience.technologies': 'Tecnologías',

      // Experience Details
      'experience.globant.federacion.title': 'Desarrollador Web UI',
      'experience.globant.federacion.company':
        'Globant - Federación Patronal de Seguros S.A',
      'experience.globant.federacion.period': 'Marzo 2024 - Junio 2025',
      'experience.globant.federacion.location': 'Remoto',
      'experience.globant.federacion.type': 'Tiempo Completo',
      'experience.globant.federacion.achievement1':
        'Desarrollé formularios y pantallas complejas utilizando Angular 17, traduciendo historias de usuario con reglas de negocio, fórmulas y parámetros en interfaces completamente funcionales, escalables.',
      'experience.globant.federacion.achievement2':
        'Implementé una arquitectura de micro-frontend para mejorar la modularidad y escalabilidad de la plataforma de seguros, mejorando la mantenibilidad y los flujos de despliegue.',
      'experience.globant.federacion.achievement3':
        'Integré componentes front-end con APIs REST para habilitar un flujo de datos fluido y interacciones de usuario responsivas, aumentando el rendimiento general del sistema.',
      'experience.globant.federacion.achievement4':
        'Participé en sesiones de descubrimiento con analistas de negocios, diseñadores y ingenieros para definir requisitos y producir documentación técnica alineada con herramientas de cotización heredadas y nuevas.',
      'experience.globant.federacion.achievement5':
        'Gestioné el ciclo completo de desarrollo en DEV, TEST y PROD, asegurando transiciones suaves y integridad del sistema a través de prácticas robustas de CI/CD.',
      'experience.globant.federacion.achievement6':
        'Resolví errores de UI/UX y datos, fortaleciendo la confiabilidad del sistema y mejorando la experiencia del usuario al aplicar estándares de calidad.',

      'experience.globant.santander.title': 'Desarrollador Web UI',
      'experience.globant.santander.company': 'Globant - Santander',
      'experience.globant.santander.period': 'Mayo 2023 - Marzo 2024',
      'experience.globant.santander.location': 'Remoto',
      'experience.globant.santander.type': 'Tiempo Completo',
      'experience.globant.santander.achievement1':
        'Optimicé componentes front-end utilizando Angular para mejorar el rendimiento y la eficiencia de la infraestructura, resultando en una experiencia de usuario más suave.',
      'experience.globant.santander.achievement2':
        'Integré APIs para implementar características front-end, asegurando una UX/UI sinérgica basada en las guías proporcionadas por el equipo de UX.',
      'experience.globant.santander.achievement3':
        'Adapté a los requisitos del proyecto con mínima guía, entregando resultados de alta calidad y cumpliendo plazos ajustados.',
      'experience.globant.santander.achievement4':
        'Colaboré proactivamente con equipos multifuncionales para fomentar un ambiente de trabajo inclusivo, mejorando la productividad general del equipo.',
      'experience.globant.santander.achievement5':
        'Fue reconocido por mantener el foco en objetivos y mostrar un alto nivel de autonomía consistentemente, contribuyendo al mejoramiento continuo del proyecto.',

      'experience.globant.univision.title': 'Desarrollador Web UI',
      'experience.globant.univision.company':
        'Globant - Univision Communications',
      'experience.globant.univision.period': 'Noviembre 2021 - Abril 2023',
      'experience.globant.univision.location': 'Remoto',
      'experience.globant.univision.type': 'Tiempo Completo',
      'experience.globant.univision.achievement1':
        'Integré anuncios utilizando Google PAL SDK tanto en front-end como en back-end, aumentando la eficiencia de monetización de la plataforma.',
      'experience.globant.univision.achievement2':
        'Colaboré con líderes de ingeniería, gerentes de productos y diseñadores utilizando metodologías Ágiles para asegurar la entrega de productos de alta calidad y integración de características sinérgicas.',
      'experience.globant.univision.achievement3':
        'Desarrollé el front-end utilizando Angular e integré APIs para mejorar la experiencia del usuario y el flujo de datos.',
      'experience.globant.univision.achievement4':
        'Gestioné el control de versiones con Git, GitHub y Bitbucket bajo metodología Scrum para mantener implementaciones consistentes en entornos Local, Dev, Staging y Prod.',
      'experience.globant.univision.achievement5':
        'Solucioné y resolví problemas de producción, implementando nuevas funcionalidades para asegurar la confiabilidad del sistema y combinar componentes front-end con lógica del lado del servidor para un rendimiento óptimo.',
      'experience.globant.univision.achievement6':
        'Desarrollé puntos finales back-end utilizando PHP, AWS, Docker y Ubuntu para apoyar funcionalidades front-end y mejorar el rendimiento general del sistema.',
      'experience.globant.univision.achievement7':
        'Implementé nuevas características en Android, RokuTV y FireTV, mejorando la compatibilidad de dispositivos y alineando con los requisitos del cliente.',
      'experience.globant.univision.achievement8':
        'Probé y desarrollé funcionalidades para dispositivos FireTV, asegurando que cumplieran con las especificaciones del cliente y proporcionaran una experiencia de usuario mejorada.',

      'experience.istra.title': 'Desarrollador Front-end & Interno',
      'experience.istra.company': 'Istra',
      'experience.istra.period': 'Enero 2020 - Noviembre 2021',
      'experience.istra.location': 'Guadalajara, México',
      'experience.istra.type': 'Tiempo Completo',
      'experience.istra.achievement1':
        'Gestioné el proceso completo de desarrollo front-end utilizando HTML, CSS y JavaScript—desde la concepción hasta la entrega—asegurando que los proyectos cumplieran con las guías de la empresa y las expectativas del cliente.',
      'experience.istra.achievement2':
        'Diseñé e actualicé interfaces responsivas, enfocadas en el usuario, a través de dispositivos, mejorando la usabilidad, el rendimiento y la satisfacción.',
      'experience.istra.achievement3':
        'Integré servicios web del lado del cliente y implementé requisitos específicos del cliente para entregar aplicaciones de alta funcionalidad personalizadas.',
      'experience.istra.achievement4':
        'Creé documentación técnica que incluía informes de dominio de problemas, diagramas de flujo de módulos y maquetas para facilitar el desarrollo y mejorar la colaboración del equipo.',
      'experience.istra.achievement5':
        'Colaboré directamente con los stakeholders para verificar entregables alineados con los objetivos del proyecto, mejorando la transparencia y la alineación de resultados.',

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

      // Contact Form
      'contact.form.title': 'Envíame un mensaje',
      'contact.form.fields.name': 'Nombre',
      'contact.form.fields.email': 'Correo',
      'contact.form.fields.subject': 'Asunto',
      'contact.form.fields.message': 'Mensaje',
      'contact.form.labels.name': 'Tu Nombre',
      'contact.form.labels.email': 'Tu Correo',
      'contact.form.labels.subject': 'Asunto',
      'contact.form.labels.message': 'Tu Mensaje',
      'contact.form.send': 'Enviar Mensaje',
      'contact.form.sending': 'Enviando...',
      'contact.form.success':
        '¡Cliente de correo abierto! Por favor envía el mensaje desde tu cliente de correo.',
      'contact.form.error':
        'Error al abrir el cliente de correo. Por favor intenta de nuevo.',
      'contact.form.validation.required': 'es requerido',
      'contact.form.validation.email':
        'Por favor ingresa una dirección de correo válida',
      'contact.form.validation.minLength': 'debe tener al menos',
      'contact.form.validation.maxLength': 'no debe exceder',
      'contact.form.validation.characters': 'caracteres',

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
      // { code: 'es', name: 'Español', flag: '🇲��' },
    ];
  }
}
