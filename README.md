# Herramienta de Estudio para Oposiciones de Informática

Una aplicación web interactiva y moderna desarrollada en React para estudiar el temario de las oposiciones de Informática / S.A.I. El objetivo de este proyecto es transformar el material de estudio estático en una experiencia de aprendizaje dinámica, visual y efectiva.

![Captura de la aplicación](https://i.ibb.co/L5QyL3s/screenshot-temario-app.png)

## Características Clave

*   **Interfaz Responsive y Moderna:** Diseño limpio y oscuro, totalmente adaptable a dispositivos de escritorio, tablets y móviles.
*   **Navegación Jerárquica:** La barra lateral y los índices de tema presentan una estructura con sangría para una fácil orientación visual. En escritorio, la barra lateral es redimensionable.
*   **Contenido Didáctico y Visual:**
    *   **Resaltado de Texto:** Los conceptos clave, términos técnicos y nombres propios se resaltan con colores para facilitar la lectura y la retención.
    *   **Diagramas Dinámicos:** Los diagramas de flujo y esquemas se generan con código (`React Flow`), asegurando una calidad visual perfecta, interactividad y coherencia con el tema de la aplicación.
    *   **Formato Matemático:** Las ecuaciones se renderizan correctamente usando KaTeX, mostrando una notación matemática clara y profesional.
*   **Modo de Práctica Inmersivo:**
    *   Una sección de "Índice del Tema" permite navegar directamente a cualquier apartado.
    *   Desde el índice, se puede acceder a un **Modo Práctica** a pantalla completa que oculta todas las ayudas visuales y presenta una "página en blanco" para que el usuario rellene los títulos de cada sección, forzando la memorización activa de la estructura del temario.
*   **Arquitectura Escalable:** Construido con una arquitectura de componentes (`Vite` + `React`) que permite añadir nuevos temas y tipos de contenido de forma sencilla y mantenible.
*   **Despliegue Continuo:** Alojado en **Google Cloud (Project IDX / Firebase App Hosting)** con un flujo de trabajo automatizado que despliega la última versión directamente desde el repositorio de GitHub.

## Estado del Proyecto

Actualmente en desarrollo. Se están procesando y añadiendo los temas de forma progresiva.

## Cómo Ejecutar el Proyecto

Este proyecto está diseñado para funcionar en un entorno de desarrollo en la nube como Project IDX, pero también puede ejecutarse localmente si se tiene Node.js instalado.

1.  Clona el repositorio:
    ```bash
    git clone https://github.com/koskartoni/temario_oposiciones.git
    ```
2.  Entra en el directorio del proyecto:
    ```bash
    cd temario_oposiciones
    ```
3.  Instala las dependencias:
    ```bash
    npm install
    ```
4.  Inicia el servidor de desarrollo:
    ```bash
    npm run dev
    ```

---

_Este proyecto está siendo guiado y desarrollado con la asistencia de una IA para la arquitectura del software y el procesamiento del contenido._