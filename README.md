# Portfolio Web Personal · Juan Cruz Rafart Barrionuevo

Trabajo Final de **Diseño UX-UI 2026** · Licenciatura en Sistemas de Información · UADER, FCyT (Mg. Ernesto Ledesma).

## Enlaces

- **Sitio en producción:** https://trabajojc.netlify.app/
- **Figma (research, wireframes, design system y prototipo):** https://www.figma.com/design/fzTYl7nUi5zuahpfslFtmY/Sin-t%C3%ADtulo?node-id=0-1&p=f&t=8zo71RnevgCBuBek-0
- **Repositorio:** https://github.com/Juan-Cruz-facu/TP-UX-UI-FINAL

## Concepto visual

Tres palabras clave: **claro, preciso y cercano**.

- **Color:** fondo crema (`#FAF7F2`), verde azulado como primario (`#0F6E6E`) y terracota como acento (`#B4532A`), con contraste AA en texto.
- **Tipografía:** Fraunces para títulos (carácter cercano) y DM Sans para texto (precisión y legibilidad).
- **Imágenes:** mockups limpios de los proyectos y un retrato, sobre fondos suaves.

## Estructura del sitio

One-page con navegación por anclas: Header, Hero, Métricas, Skills, Proyectos (con caso de estudio en modal), Experiencia y formación, Sobre mí, Contacto y Footer.

## Proyectos

| Proyecto | Qué aprendí | Enlace |
|---|---|---|
| Cubrí Seguros: contratación digital | A validar el diseño con personas antes de codear | Caso de estudio en el sitio y Figma |
| Landing page integradora | A pensar mobile-first con Flexbox y Grid | [Repo](https://github.com/Juan-Cruz-facu/landing-page-) |
| Mesa de Ayuda: análisis y diseño | A traducir necesidades en casos de uso | [Repo](https://github.com/Juan-Cruz-facu/mesa-de-ayuda) |

## Stack

- HTML5 semántico
- CSS3 puro con variables `:root`, Flexbox y Grid (mobile-first, breakpoints 375, 768 y 1280 px)
- JavaScript vanilla (menú mobile y modal del caso de estudio)
- Figma, Git y GitHub, Netlify
- Sin frameworks JS ni constructores visuales

## Accesibilidad y rendimiento

- WCAG 2.2 AA: enlace "Saltar al contenido", foco visible, navegación completa con teclado, `aria-expanded` y `aria-controls` en el menú, `prefers-reduced-motion`.
- Imágenes con `alt`, `width`/`height` y `loading="lazy"`; fuentes con `display=swap` (2 familias).
- **Lighthouse mobile (9/11/2026): 100 en Rendimiento, Accesibilidad, Recomendaciones y SEO.**

![Reporte Lighthouse mobile](assets/img/lighthouse-mobile.png)

## Despliegue

Desplegado en **Netlify** con integración continua desde GitHub: cada push a `main` publica automáticamente.

1. En Netlify: **Add new site → Import an existing project → GitHub**.
2. Elegir el repositorio `TP-UX-UI-FINAL` y la rama `main`.
3. Dejar vacío el *build command* y poner `.` como *publish directory* (sitio estático).
4. **Deploy site**. Netlify entrega la URL con HTTPS.

## Fuentes y recursos

- Fuentes: [DM Sans](https://fonts.google.com/specimen/DM+Sans) y [Fraunces](https://fonts.google.com/specimen/Fraunces) (Google Fonts).
- No se usó ningún template: el diseño y la maquetación son propios.
- Herramientas de verificación: Lighthouse (Chrome DevTools).

## Uso de IA

Se usó **Claude (Anthropic)** para generar el código base (HTML, CSS y JS) y el texto inicial del sitio y de este README. Yo revisé, probé y adapté el resultado: definí el concepto visual y el diseño en Figma, completé el contenido real, corregí enlaces y verifiqué accesibilidad y rendimiento con Lighthouse.

## Estructura del repositorio

```
├── index.html
├── css/styles.css
├── js/main.js
└── assets/
    ├── favicon.svg
    └── img/
```