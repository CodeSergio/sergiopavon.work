export type CvRole = {
  title: string;
  company: string;
  start: string;
  end: string;
  bullets: string[];
};

export type Cv = {
  name: string;
  headline: string;
  location: string;
  profile: string[];
  skills: string[];
  specialties: string[];
  experience: CvRole[];
  education: Array<{ title: string; institution: string; details?: string }>;
  certifications: Array<{ label: string; url: string }>;
};

export const cv: Cv = {
  name: 'Sergio Maximiliano Pavón',
  headline: 'Oracle PL/SQL Backend Developer',
  location: 'Buenos Aires, Argentina',
  profile: [
    'Oracle PL/SQL Backend Developer Sr. con más de 15 años de experiencia en automatización, operaciones y soporte a sistemas productivos de alta criticidad.',
    'Especialista en Oracle, PL/SQL y SQL avanzado, con foco en automatización de procesos operativos, análisis y corrección de datos productivos, resolución de incidentes críticos y aseguramiento de la continuidad del servicio.',
    'Experiencia en entornos Unix/Linux, procesos batch, conciliaciones de información, controles operativos y validaciones de integridad de datos. Trabajo colaborativo con Desarrollo, Infraestructura, Seguridad y DBA.'
  ],
  skills: [
    'Unix / Linux',
    'Shell scripting',
    'Automatización de procesos operativos',
    'SQL avanzado / PL/SQL',
    'Procesos batch',
    'Soporte a producción',
    'Análisis y corrección de datos',
    'APIs REST (integración)',
    'Git'
  ],
  specialties: [
    'Operación de sistemas productivos críticos',
    'Procesos batch de gran volumen',
    'SQL tuning y optimización de performance',
    'Conciliaciones y controles operativos',
    'Reingeniería de sistemas legacy'
  ],
  experience: [
    {
      title: 'Backend Data Developer',
      company: 'Claro Video',
      start: 'Julio 2019',
      end: 'Octubre 2025',
      bullets: [
        'Automatización de procesos operativos en entornos productivos mediante Jenkins, Docker y AWS S3.',
        'Interacción con usuarios, QA y equipos técnicos para validación de soluciones.',
        'Resolución de incidentes productivos de alta criticidad y aseguramiento de continuidad del servicio.',
        'Ejecución y mantenimiento de procesos batch.',
        'Análisis, validación y corrección de datos en bases relacionales y NoSQL.',
        'Exposición de procesos PL/SQL vía APIs para integración con aplicaciones PHP.',
        'Conciliaciones (incluyendo pagos) y controles operativos.',
        'Actualización masiva de datos en lotes para minimizar latencia en replicación.',
        'Desarrollo y mantenimiento backend sobre Oracle, Elasticsearch, Apache Cassandra y Python.',
        'Reingeniería de procesos operativos para mejorar performance, estabilidad y escalabilidad.'
      ]
    },
    {
      title: 'Analista Tecnico Funcional',
      company: 'Allianz Argentina',
      start: 'Abril 2016',
      end: 'Julio 2019',
      bullets: [
        'Documentación técnica y funcional.',
        'Elaboración de diagramas UML (casos de uso, flujos, DER) para soporte a desarrollo.',
        'Desarrollo en Oracle 11g, Forms y Reports.',
        'Análisis, mantenimiento y corrección de incidentes.',
        'Conciliaciones para el área de Tesorería.',
        'Estimación de tiempos e implementación de mejoras.',
        'Reingeniería de procesos legacy.'
      ]
    },
    {
      title: 'Analista Tecnico Funcional',
      company: 'Close Up International',
      start: 'Agosto 2015',
      end: 'Abril 2016',
      bullets: [
        'Documentación técnica y funcional.',
        'Elaboración de diagramas UML (casos de uso, flujos, DER) para soporte a desarrollo.',
        'Mantenimiento y corrección de incidentes.',
        'Migración de Oracle 11g a Exadata.',
        'Conciliaciones para el área de Pagos.'
      ]
    },
    {
      title: 'Analista Tecnico Oracle',
      company: 'La Caja Seguros (Huenei IT Services)',
      start: 'Julio 2013',
      end: 'Agosto 2015',
      bullets: [
        'Documentación técnica y funcional.',
        'Análisis, mantenimiento y corrección de incidentes.',
        'Desarrollo en Oracle 11g, Forms y Reports.',
        'Conciliaciones para el área de Tesorería.',
        'Ejecución de procesos y generación de reportes.'
      ]
    },
    {
      title: 'Analista Tecnico Oracle',
      company: 'DirecTV (Everis)',
      start: 'Diciembre 2012',
      end: 'Junio 2013',
      bullets: [
        'Migración del sistema core GO/LIVE IBS.',
        'Optimización (tuning) de scripts de proveedores.',
        'Interacción con proveedores.',
        'Desarrollo de automatizaciones en Fox, T-SQL y PL/SQL.',
        'Ejecución, revisión de procesos y generación de reportes.'
      ]
    },
    {
      title: 'Analista Tecnico Oracle',
      company: 'Cencosud (Everis)',
      start: 'Octubre 2010',
      end: 'Diciembre 2012',
      bullets: [
        'Análisis, mantenimiento y corrección de incidentes.',
        'Creación de nuevos packages y stored procedures en Oracle 10g.',
        'Desarrollo de flujos en CRM Engage.',
        'Asistencia a usuarios del sistema.',
        'Soporte a producción y guardias pasivas.'
      ]
    }
  ],
  education: [
    {
      title: 'Ingeniería Informática (no graduado)',
      institution: 'Universidad Nacional de La Matanza'
    },
    {
      title: 'Técnico Informático Profesional',
      institution: 'Escuela de Educación Técnica N.º 6',
      details: '2002-2006'
    }
  ],
  certifications: [
    {
      label: 'Curso de n8n Self-Hosted para Empresas (2025)',
      url: 'https://platzi.com/p/jejo/curso/12255-n8n-selfhosted/diploma/detalle/'
    },
    {
      label: 'Curso de Workflows Profesionales con n8n (2025)',
      url: 'https://platzi.com/p/jejo/curso/12250-n8n-profesional/diploma/detalle/'
    },
    {
      label: 'Curso de Automatizaciones con n8n (2025)',
      url: 'https://platzi.com/p/jejo/curso/12245-n8n-lowcode/diploma/detalle/'
    },
    { label: 'Python 3 - OpenWebinars (2024)', url: 'https://openwebinars.net/cert/0yfR' },
    { label: 'Flask - Platzi (2022)', url: 'https://platzi.com/p/jejo/curso/1540-flask/diploma/detalle/' },
    {
      label: 'FastAPI Fundamentos - Platzi (2021)',
      url: 'https://platzi.com/p/jejo/curso/2513-fastapi/diploma/detalle/'
    },
    {
      label: 'FastAPI Avanzado - Platzi (2021)',
      url: 'https://platzi.com/p/jejo/curso/2514-fastapi-modularizacion-datos/diploma/detalle/'
    },
    {
      label: 'Python Profesional - Platzi (2021)',
      url: 'https://platzi.com/p/jejo/curso/2397-python-profesional/diploma/detalle/'
    },
    {
      label: 'Git & GitHub - Platzi (2021)',
      url: 'https://platzi.com/p/jejo/curso/1557-git-github/diploma/detalle/'
    },
    {
      label: 'Vue JS + Firebase + MEVN - Udemy (2021)',
      url: 'https://www.udemy.com/certificate/UC-7299a4e2-8606-493c-9eb9-9ddbc5583301/'
    },
    { label: 'Cassandra - OpenWebinars (2020)', url: 'https://openwebinars.net/cert/1JgOb' },
    { label: 'Elasticsearch - OpenWebinars (2020)', url: 'https://openwebinars.net/cert/Jz1Wb' },
    { label: 'MongoDB - OpenWebinars (2020)', url: 'https://openwebinars.net/cert/9ZQGR' },
    { label: 'NumPy - OpenWebinars (2020)', url: 'https://openwebinars.net/cert/dk64b' },
    { label: 'Pandas - OpenWebinars (2020)', url: 'https://openwebinars.net/cert/j5bRA' },
    { label: 'Visualización de Datos - OpenWebinars (2020)', url: 'https://openwebinars.net/cert/87Aa5' }
  ]
};
