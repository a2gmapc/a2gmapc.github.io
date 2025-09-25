# Apple 2 Google Maps Converter Web

Sitio web oficial para la aplicación Apple 2 Google Maps Converter (A2GMC) con soporte multiidioma.

## Descripción

A2GMC es una aplicación para Android que convierte automáticamente los enlaces de Apple Maps en enlaces de Google Maps, solucionando el problema de compatibilidad entre iOS y Android.

## Estructura del proyecto

- `index.html` - Página principal
- `tutorial.html` - Página de tutorial e instrucciones
- `privacy.html` - Política de privacidad
- `css/styles.css` - Hoja de estilos principal
- `js/script.js` - JavaScript para interactividad base
- `js/translations.js` - Sistema de traducciones
- `js/language-selector.js` - Selector de idiomas
- `img/` - Imágenes y recursos gráficos

## Características

- Diseño responsive
- Navegación móvil con menú hamburguesa
- **Selector de idiomas con 16 idiomas soportados**
- Detección automática del idioma del navegador
- Soporte para idiomas RTL (árabe, urdu)
- Persistencia del idioma seleccionado
- Secciones informativas sobre la aplicación
- Tutorial paso a paso
- Política de privacidad completa

## Idiomas Soportados

El sitio web está disponible en los siguientes idiomas:

- 🇺🇸 **English** (en)
- 🇮🇳 **हिंदी** (hi) - Hindi
- 🇯🇵 **日本語** (ja) - Japonés
- 🇪🇸 **Español** (es) - Español
- 🇰🇪 **Kiswahili** (sw) - Suajili
- 🇩🇪 **Deutsch** (de) - Alemán
- 🇫🇷 **Français** (fr) - Francés
- 🇮🇹 **Italiano** (it) - Italiano
- 🇮🇩 **Bahasa Indonesia** (id) - Indonesio
- 🇷🇺 **Русский** (ru) - Ruso
- 🇵🇰 **اردو** (ur) - Urdu
- 🇧🇷 **Português** (pt) - Portugués
- 🇧🇩 **বাংলা** (bn) - Bengalí
- 🇸🇦 **العربية** (ar) - Árabe
- 🇹🇷 **Türkçe** (tr) - Turco
- 🇨🇳 **中文** (zh) - Chino

## Funcionalidades del Selector de Idiomas

### Detección Automática
El sistema detecta automáticamente el idioma preferido del usuario en el siguiente orden:
1. Parámetro URL (`?lang=es`)
2. Idioma guardado en localStorage
3. Idioma del navegador
4. Idioma por defecto (español)

### Características del Selector
- **Banderas de países**: Cada idioma se muestra con su bandera correspondiente
- **Dropdown elegante**: Interfaz moderna con efectos hover y transiciones
- **Persistencia**: El idioma seleccionado se guarda en localStorage
- **URL actualizada**: El idioma se refleja en la URL para facilitar el compartir
- **Responsive**: Adaptado para dispositivos móviles

### Soporte RTL
Los idiomas de derecha a izquierda (árabe y urdu) tienen soporte completo con:
- Dirección de texto RTL
- Navegación invertida
- Layout adaptado

## Tecnologías utilizadas

- HTML5
- CSS3 (con variables CSS y Flexbox)
- JavaScript vanilla ES6+
- Font Awesome para iconos
- Imágenes WebP optimizadas
- Sistema de internacionalización (i18n) personalizado

## Cómo agregar un nuevo idioma

1. **Agregar la traducción** en `js/translations.js`:
```javascript
nuevo_codigo: {
    nav_home: "Traducción",
    nav_tutorial: "Traducción",
    // ... más traducciones
}
```

2. **Agregar el idioma** en `js/language-selector.js`:
```javascript
nuevo_codigo: { name: 'Nombre del idioma', flag: '🏳️' }
```

3. **Actualizar el README** con el nuevo idioma en la lista.

## Uso

### Cambio de idioma por URL
Puedes cambiar el idioma agregando el parámetro `lang` a la URL:
```
https://tu-sitio.com/?lang=en  # Inglés
https://tu-sitio.com/?lang=ja  # Japonés
https://tu-sitio.com/?lang=ar  # Árabe
```

### Cambio manual
Los usuarios pueden cambiar el idioma usando el selector en la esquina superior derecha de la navegación.

## Instalación y Desarrollo

1. Clona el repositorio
2. Abre cualquier archivo HTML en tu navegador
3. Para desarrollo, usa un servidor local como Live Server de VS Code

No se requieren dependencias ni build process - todo funciona con archivos estáticos.

## Desarrollo Local

Para ejecutar este sitio localmente:

1. Clona este repositorio
2. Abre el archivo `index.html` en tu navegador

## Despliegue

El sitio está desplegado usando GitHub Pages y se puede acceder en: [https://yourusername.github.io/A2GMC](https://yourusername.github.io/A2GMC)

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para más detalles.