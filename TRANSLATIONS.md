# Sistema de Traducciones Modular - A2GMC

## Estructura del Sistema

El sistema de traducciones se ha reestructurado para ser más mantenible y escalable:

### Archivos de Traducción Individuales

```
js/translations/
├── es.js      # Español (idioma base)
├── en.js      # English
├── hi.js      # हिन्दी
├── ja.js      # 日本語
├── sw.js      # Kiswahili
├── de.js      # Deutsch
├── fr.js      # Français
├── it.js      # Italiano
├── id.js      # Bahasa Indonesia
├── ru.js      # Русский
├── ur.js      # اردو
├── pt.js      # Português
├── bn.js      # বাংলা
├── ar.js      # العربية
├── tr.js      # Türkçe
└── zh.js      # 中文
```

### Archivos del Sistema

- **`translation-loader.js`**: Cargador dinámico de traducciones
- **`language-selector.js`**: Selector de idiomas actualizado para el sistema modular
- **`translations.js`**: ❌ OBSOLETO - Ya no se usa

## Ventajas del Nuevo Sistema

1. **Mantenibilidad**: Cada idioma está en su propio archivo
2. **Carga Dinámica**: Los idiomas se cargan bajo demanda
3. **Escalabilidad**: Fácil agregar nuevos idiomas
4. **Rendimiento**: Menor carga inicial, solo se cargan los idiomas necesarios
5. **Organización**: Estructura de carpetas clara y lógica

## Uso

### Agregar un Nuevo Idioma

1. Crear archivo `js/translations/XX.js` donde XX es el código del idioma
2. Usar la estructura de `es.js` como base
3. Agregar el idioma a `languages` en `language-selector.js`
4. El idioma estará disponible automáticamente

### Estructura de Archivo de Traducción

```javascript
// Ejemplo: js/translations/es.js
const es = {
    // Navigation
    nav_home: "Inicio",
    nav_tutorial: "Tutorial",
    nav_privacy: "Política de Privacidad",
    
    // Hero Section
    hero_title: "¿Cansado de que los enlaces de Apple Maps no funcionen bien en Android?",
    // ... más traducciones
};

export default es;
```

## Idiomas Soportados

- 🇪🇸 **Español** (es) - Idioma base completo
- 🇺🇸 **English** (en) - Completo
- 🇮🇳 **हिन्दी** (hi) - Básico
- 🇯🇵 **日本語** (ja) - Básico
- 🇰🇪 **Kiswahili** (sw) - Básico
- 🇩🇪 **Deutsch** (de) - Básico
- 🇫🇷 **Français** (fr) - Básico
- 🇮🇹 **Italiano** (it) - Básico
- 🇮🇩 **Bahasa Indonesia** (id) - Básico
- 🇷🇺 **Русский** (ru) - Básico
- 🇵🇰 **اردو** (ur) - Básico
- 🇧🇷 **Português** (pt) - Básico
- 🇧🇩 **বাংলা** (bn) - Básico
- 🇸🇦 **العربية** (ar) - Básico + RTL
- 🇹🇷 **Türkçe** (tr) - Básico
- 🇨🇳 **中文** (zh) - Básico

## Compatibilidad

El sistema es retrocompatible. El código anterior seguirá funcionando mientras se migra gradualmente al nuevo sistema.

## Próximos Pasos

1. ✅ Crear estructura modular
2. ✅ Implementar cargador dinámico
3. ✅ Actualizar archivos HTML
4. 🔄 Completar traducciones para todos los idiomas
5. 📋 Probar funcionamiento completo
6. 🗑️ Eliminar archivo translations.js obsoleto