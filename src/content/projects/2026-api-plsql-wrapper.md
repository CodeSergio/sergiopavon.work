---
title: "API para exponer procesos PL/SQL de forma segura"
year: 2026
cover: "/thumbs/proj-api-wrapper.svg"
coverAlt: "Miniatura con texto: API para procesos PL/SQL"
stack: ["APIs REST", "PL/SQL", "Autenticación", "Rate limiting"]
highlights:
  - "Envuelve procesos legacy con un contrato estable y observabilidad."
  - "Separa permisos y reduce riesgo operativo."
---

Un brief de portafolio para envolver procesos PL/SQL legacy con una API estable y controlada.

## Contexto / problema

En sistemas legacy, muchas capacidades viven en PL/SQL. Exponerlas “tal cual” suele generar acoplamiento al esquema interno, falta de control de permisos y riesgo operativo (entradas inválidas, ejecuciones repetidas, falta de trazabilidad).

## Idea / enfoque

Crear una capa de API que funcione como contrato: endpoints por operación, entradas validadas y permisos por rol. La API no reemplaza PL/SQL; lo encapsula para integraciones modernas con gobernanza.

## Alcance previsto

- Endpoints REST por operación (contrato y versionado).
- Validación de entrada (esquemas, límites, sanitización).
- Autenticación y autorización por rol.
- Trazabilidad por request id + logs consistentes.
- Límites operativos: rate limiting, timeouts y reintentos controlados.

## Fuera de alcance

- Migrar lógica de negocio fuera de la base.
- Rediseñar por completo el modelo de datos.
- Resolver identidad corporativa (SSO) o IAM avanzado (se integra con lo existente).

## Estado actual

Proyecto de portafolio, en fase de diseño.

## Valor esperado

- Menos riesgo operativo: entradas controladas y permisos acotados.
- Contrato estable para integraciones (menos acoplamiento).
- Observabilidad mínima para investigar incidentes y errores.

## Próximos pasos

- Definir 3–5 operaciones representativas y su contrato.
- Diseñar esquemas de validación y catálogo de errores.
- Prototipar trazabilidad y límites (timeouts/rate limiting).
