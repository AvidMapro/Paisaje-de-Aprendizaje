# Paisaje de Aprendizaje USCSS Nostromo

Experiencia web gamificada para estudiar infraestructura de servidores con una ambientación inspirada en *Alien* (1979). El estudiante recorre cuatro nodos, completa actividades y responde evaluaciones mientras administra un indicador de oxígeno.

> Este repositorio es un fork y corresponde a un trabajo colaborativo, no a un proyecto individual de Anthony Manangón. El repositorio de origen es [ZamirAndres19/Paisaje-de-Aprendizaje](https://github.com/ZamirAndres19/Paisaje-de-Aprendizaje).

## Demostración

[Abrir la versión desplegada en Firebase Hosting](https://paisaje-de-aprendizaje-grupo3.web.app)

## Contenido académico

| Nodo | Tema |
| --- | --- |
| Puente de mando | Windows Server y Active Directory |
| Laboratorio científico | Linux Server y PostgreSQL |
| Sala de comunicaciones | Servidores web, puertos y firewalls |
| Sala de máquinas | Automatización y respaldos con Bash y PowerShell |

Cada nodo combina lectura, práctica guiada y un quiz. La calificación final se calcula a partir del oxígeno restante después de los intentos.

## Tecnologías verificadas

- HTML
- CSS
- JavaScript sin frameworks
- Firebase Hosting

Los temas de Windows Server, Linux Server, PostgreSQL, firewalls y automatización forman parte del contenido educativo; no son servicios de backend implementados por la aplicación.

## Estructura

```text
index.html          Aplicación principal
assets/css/         Estilos y efectos visuales
assets/js/app.js    Navegación, actividades y evaluación
assets/img/         Recursos gráficos
public/             Salida para Firebase Hosting
firebase.json       Configuración de despliegue
```

## Ejecución local

Al ser un sitio estático, puede abrirse con cualquier servidor HTTP local. Por ejemplo:

```bash
python3 -m http.server 8000
```

Luego visita `http://localhost:8000`.
