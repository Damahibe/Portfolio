# 🚀 Portafolio Web Modernizado - Daniel Hincapié

**Docente:** Juliana Gómez Osorio  
**Asignatura:** Desarrollo Web / Frontend  
**Entrega:** Tercer Corte Evaluativo  
**Estudiante:** Daniel Hincapié ([@Damahibe](https://github.com/Damahibe))  
**Institución:** Universidad Tecnológica de Pereira (UTP)  

---

## 📋 Resumen del Proyecto y Cumplimiento de Requisitos

Este proyecto corresponde a la **modernización visual y técnica del portafolio personal** desarrollado originalmente en HTML y CSS puro durante el primer corte, dando cumplimiento a los 7 requisitos fijados en clase por la docente:

1. **Conservación del proyecto original:** Se preservó el 100% de la semántica, estructura de secciones (`#inicio`, `#proyectos`, `#stack`, `#servicios`, `#contacto`), recursos gráficos (`assets/hero-visual.svg`) y narrativa profesional de Daniel Hincapié (Web, Juegos y Cloud).
2. **Selección de la herramienta de estilización:** Se seleccionó **Bulma CSS (v1.0.2)**, framework basado en Flexbox recomendado directamente por la docente en clase por su compatibilidad nativa con proyectos HTML/CSS sin obligar a usar frameworks de JS pesados.
3. **Integración correcta:** El framework se encuentra integrado tanto de manera **local** (`./css/bulma.min.css`, permitiendo funcionamiento 100% offline) como con enlace de respaldo vía CDN de jsDelivr.
4. **Modernización de la presentación visual:** Diseño moderno estilo *Dark Developer Theme* con efectos de cristal esmerilado (*glassmorphism*), elevación de tarjetas al hacer hover, gradientes sutiles y maquetación fluida.
5. **Incorporación de componentes oficiales de Bulma:**
   * `navbar`: Barra superior fija (`is-fixed-top`) con logotipo de marca, enlaces de navegación y botón de acción hamburguesa (`navbar-burger`) completamente accesible para dispositivos móviles.
   * `hero` & `hero-body`: Sección de bienvenida con jerarquía tipográfica (`title is-1`), badges de estado y panel métrico con `box` y `columns`.
   * `columns` & `column`: Sistema de rejilla flexible y responsive en todas las secciones.
   * `card`, `card-content`, `card-footer`: Tarjetas interactivas para exhibición de proyectos con etiquetas de tecnologías y botones de código fuente.
   * `box`: Contenedores estilizados para la propuesta de valor, los pasos de servicios y el formulario.
   * `tags` & `tag`: Badges y píldoras categorizadas (`is-rounded`, `is-medium`, `is-light`) para el stack tecnológico.
   * `field`, `control has-icons-left`, `input`, `textarea`, `button is-primary`: Formulario de contacto con estilos oficiales y validación nativa.
   * `footer`: Pie de página profesional con enlaces de redes sociales y metadatos académicos.
6. **Personalización de colores, tipografía y distribución:**
   * **Tipografía:** Integración de Google Fonts: *Plus Jakarta Sans* para títulos y textos de alta legibilidad, y *Fira Code* para tags técnicas y números de proyecto.
   * **Paleta de Colores:** Fondo profundo (`#090d14`), acento primario cian/teal (`#2dd4bf`), índigo eléctrico (`#6366f1`) y naranja de contraste (`#f97316`).
   * **Efectos:** Desenfoque de fondo (`backdrop-filter: blur(16px)`), micro-animación pulsante para el indicador de disponibilidad y sombras luminosas (*glow effects*).
7. **Código organizado y funcional:** Archivos separados de manera limpia (`index.html`, `styles.css`, `script.js`), sin dependencias de compilación y listos para abrir en cualquier navegador.

---

## 📂 Estructura de Archivos

```text
Portfolio/
├── index.html          # Estructura semántica con componentes Bulma
├── styles.css          # Personalización de variables de Bulma y diseño de autor
├── script.js           # Lógica para navbar-burger móvil y scroll-spy
├── css/
│   └── bulma.min.css   # Framework Bulma v1.0.2 local (soporte offline)
├── assets/
│   ├── hero-visual.svg # Ilustración vectorial principal
│   └── hero-visual.svg.png
└── README.md           # Documentación de entrega académica
```

---

## 🛠️ Cómo Ejecutar Localmente

No requiere Node.js, compiladores ni servidores locales:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Damahibe/Portfolio.git
   cd Portfolio
   ```
2. Abre `index.html` en tu navegador favorito:
   ```bash
   open index.html # En macOS
   ```

---

## 📡 Secciones del Portafolio

* **Hero / Inicio (`#inicio`):** Presentación de perfil (Web · Juegos · Cloud), botones de llamada a la acción y panel de resumen técnico.
* **Lo que aporto:** Propuesta de valor dividida en tres pilares (Web usable, interactividad con Canvas/Juegos e infraestructura Cloud/DevOps).
* **Proyectos (`#proyectos`):** 3 proyectos destacados (Dashboard en tiempo real con React/Postgres, videojuego en Canvas 2D y arquitectura backend con Docker).
* **Stack (`#stack`):** Habilidades organizadas en 3 categorías: Frontend & UI, Backend & Bases de Datos, y DevOps & Cloud.
* **Servicios (`#servicios`):** Proceso de desarrollo en 4 etapas claras.
* **Contacto (`#contacto`):** Formulario directo y enlaces a GitHub y correo institucional.
