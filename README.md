# Paisaje de Aprendizaje — USCSS Nostromo

> **Infraestructura de Servidores** — Experiencia de aprendizaje gamificada con temática de *Alien* (1979).

## Descripción

El estudiante es un tripulante de la USCSS Nostromo que debe restaurar los sistemas informáticos de la nave antes de que el soporte vital se agote. Guiado por la IA **MADRE (MU/TH/UR 6000)**, recorre 4 nodos temáticos que cubren contenidos reales de infraestructura de servidores.

Cada error en los quizzes resta oxígeno. El porcentaje de O₂ restante al final se traduce en la calificación.

## Nodos de Aprendizaje

| Nodo | Ubicación | Tema |
|------|-----------|------|
| 01 | Puente de Mando | Windows Server + Active Directory |
| 02 | Laboratorio Científico | Linux Server + PostgreSQL |
| 03 | Sala de Comunicaciones | Servidores Web + Puertos + Firewall |
| 04 | Sala de Máquinas | Scripts Bash/PowerShell + Backups |

## Mecánica de Juego

- **Fase A (Lectura):** El estudiante lee un documento temático con la teoría del módulo.
- **Fase B (Práctica):** Micro-interacciones guiadas que simulan la instalación/configuración. Los errores no restan oxígeno.
- **Quiz Final:** 3 preguntas de evaluación. Cada fallo resta 15-20% de oxígeno.
- **Pantalla Final:** Calificación calculada a partir del oxígeno restante (100% O₂ = 10/10).

## Stack Técnico

- Frontend estático: HTML + CSS + JavaScript vanilla
- Hosting: Firebase Hosting
- Sin dependencias externas de frameworks

## Estructura del Proyecto

```
├── index.html          # Terminal interactiva principal
├── assets/
│   ├── css/style.css   # Estilos retro CRT / tema Alien
│   ├── js/app.js       # Lógica completa del juego
│   └── img/            # GIFs e imágenes temáticas
├── public/             # Archivos de Firebase Hosting
├── firebase.json       # Configuración de hosting
└── .firebaserc         # Proyecto Firebase
```

## Equipo

Proyecto académico de Infraestructura — Universidad.
