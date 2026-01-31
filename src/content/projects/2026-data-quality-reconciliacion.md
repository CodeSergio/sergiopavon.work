---
title: "Data quality y conciliaciones reproducibles"
year: 2026
cover: "/thumbs/proj-data-quality.svg"
coverAlt: "Miniatura con texto: Data quality"
stack: ["SQL", "PL/SQL", "Validaciones", "Controles", "Auditoría"]
highlights:
  - "Define reglas de integridad con reportes repetibles y auditables."
  - "Evita correcciones manuales sin trazabilidad."
---

Un brief de portafolio para diseñar controles de integridad y conciliaciones con evidencia reproducible.

## Contexto / problema

Cuando aparecen diferencias en conciliaciones, el problema no es solo “la diferencia”: es la falta de un mecanismo repetible para detectarla, explicarla y corregirla con trazabilidad. Sin reglas claras, se termina en correcciones manuales y discusiones sin evidencia.

## Idea / enfoque

Tratar la conciliación como un proceso controlado: reglas versionadas, reportes con evidencia y un flujo de corrección con aprobación. El objetivo es que cualquier diferencia sea investigable y reproducible.

## Alcance previsto

- Catálogo de reglas de validación (definición, owner, motivo, severidad).
- Reportes repetibles con evidencia (consultas versionadas, resultados y timestamps).
- Flujo de corrección: propuesta, revisión, ejecución y registro.
- Controles de integridad (pre y post corrección) y plan de rollback.

## Fuera de alcance

- Resolver discrepancias de negocio sin consenso (solo provee evidencia).
- Sustituir sistemas de tesorería o contabilidad.
- Automatizar el 100% de los casos (se priorizan los más frecuentes y críticos).

## Estado actual

Proyecto de portafolio, en fase de diseño.

## Valor esperado

- Menos trabajo manual y menos “operación artesanal”.
- Auditoría clara: qué se cambió, por qué y con qué evidencia.
- Base para prevención: reglas que detectan antes de que se convierta en incidente.

## Próximos pasos

- Definir el esquema de reglas y la estructura de evidencia.
- Prototipar 3 conciliaciones típicas con casos de diferencia.
- Diseñar el flujo de aprobación y el registro de correcciones.
