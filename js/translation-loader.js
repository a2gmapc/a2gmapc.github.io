// Translation Loader - Cargador dinámico de traducciones
// Sistema modular de traducciones para A2GMC

class TranslationLoader {
    constructor() {
        this.translations = {};
        this.supportedLanguages = ['en', 'hi', 'ja', 'es', 'sw', 'de', 'fr', 'it', 'id', 'ru', 'ur', 'pt', 'bn', 'ar', 'tr', 'zh'];
        this.defaultLanguage = 'es'; // Español como base
        this.currentLanguage = 'es';
    }

    async loadTranslation(lang) {
        if (this.translations[lang]) {
            return this.translations[lang];
        }

        try {
            const module = await import(`./translations/${lang}.js`);
            this.translations[lang] = module.default;
            return this.translations[lang];
        } catch (error) {
            console.warn(`No se pudo cargar la traducción para ${lang}, usando ${this.defaultLanguage}`);
            // Cargar idioma por defecto si falla
            if (lang !== this.defaultLanguage) {
                return await this.loadTranslation(this.defaultLanguage);
            }
            throw new Error(`No se pudo cargar la traducción por defecto: ${error.message}`);
        }
    }

    async setLanguage(lang) {
        if (!this.supportedLanguages.includes(lang)) {
            console.warn(`Idioma ${lang} no soportado, usando ${this.defaultLanguage}`);
            lang = this.defaultLanguage;
        }

        this.currentLanguage = lang;
        return await this.loadTranslation(lang);
    }

    async getCurrentTranslation() {
        return await this.loadTranslation(this.currentLanguage);
    }

    getSupportedLanguages() {
        return this.supportedLanguages;
    }

    getCurrentLanguage() {
        return this.currentLanguage;
    }
}

// Para compatibilidad con el sistema existente, creamos el objeto translations
const translationLoader = new TranslationLoader();

// Función para obtener todas las traducciones (carga bajo demanda)
async function getAllTranslations() {
    const allTranslations = {};
    
    for (const lang of translationLoader.getSupportedLanguages()) {
        try {
            allTranslations[lang] = await translationLoader.loadTranslation(lang);
        } catch (error) {
            console.warn(`Error cargando ${lang}:`, error.message);
        }
    }
    
    return allTranslations;
}

// Exportar para uso global
window.translationLoader = translationLoader;
window.getAllTranslations = getAllTranslations;

// Para compatibilidad con el código existente, crear el objeto translations
// Este se llenará dinámicamente cuando se carguen las traducciones
window.translations = {};

// Inicializar traducciones básicas
(async function initTranslations() {
    try {
        // Cargar al menos español e inglés por defecto
        window.translations.es = await translationLoader.loadTranslation('es');
        window.translations.en = await translationLoader.loadTranslation('en');
        
        // Disparar evento personalizado cuando las traducciones estén listas
        window.dispatchEvent(new CustomEvent('translationsLoaded', {
            detail: { loader: translationLoader }
        }));
    } catch (error) {
        console.error('Error inicializando traducciones:', error);
    }
})();