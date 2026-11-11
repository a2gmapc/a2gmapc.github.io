// language-selector.js - Selector de idiomas para MapsLink - Versión Modular
class LanguageSelector {
    constructor() {
        // Primero definir los idiomas disponibles
        this.languages = {
            en: { name: 'English', flag: '🇺🇸' },
            hi: { name: 'हिंदी', flag: '🇮🇳' },
            ja: { name: '日本語', flag: '🇯🇵' },
            es: { name: 'Español', flag: '🇪🇸' },
            sw: { name: 'Kiswahili', flag: '🇰🇪' },
            de: { name: 'Deutsch', flag: '🇩🇪' },
            fr: { name: 'Français', flag: '🇫🇷' },
            it: { name: 'Italiano', flag: '🇮🇹' },
            id: { name: 'Bahasa Indonesia', flag: '🇮🇩' },
            ru: { name: 'Русский', flag: '🇷🇺' },
            ur: { name: 'اردو', flag: '🇵🇰' },
            pt: { name: 'Português', flag: '🇧🇷' },
            bn: { name: 'বাংলা', flag: '🇧🇩' },
            ar: { name: 'العربية', flag: '🇸🇦' },
            tr: { name: 'Türkçe', flag: '🇹🇷' },
            zh: { name: '中文', flag: '🇨🇳' }
        };
        // Luego detectar el idioma actual
        this.currentLanguage = this.detectLanguage();
        this.translationLoader = window.translationLoader;
        this.init();
    }

    detectLanguage() {
        // Prioridad: URL parameter > localStorage > browser language > default (es)
        const urlParams = new URLSearchParams(window.location.search);
        const urlLang = urlParams.get('lang');
        
        if (urlLang && this.isValidLanguage(urlLang)) {
            return urlLang;
        }

        const storedLang = localStorage.getItem('MapsLink-language');
        if (storedLang && this.isValidLanguage(storedLang)) {
            return storedLang;
        }

        const browserLang = navigator.language.split('-')[0];
        if (this.isValidLanguage(browserLang)) {
            return browserLang;
        }

        return 'es'; // idioma por defecto
    }

    isValidLanguage(lang) {
        return this.languages && this.languages.hasOwnProperty(lang);
    }

    init() {
        this.initWithRetry();
    }

    async initWithRetry(attempts = 0) {
        const maxAttempts = 5;
        const navbar = document.querySelector('.navbar') || document.querySelector('nav.navbar');
        
        if (navbar) {
            this.createSelector();
            await this.applyTranslations();
            this.updateDocumentLanguage();
        } else if (attempts < maxAttempts) {
            setTimeout(() => {
                this.initWithRetry(attempts + 1);
            }, 100);
        } else {
            console.warn('Selector de idiomas: No se pudo encontrar .navbar');
        }
    }

    createSelector() {
        const header = document.querySelector('.navbar');
        
        if (!header) {
            // Intentar con nav como alternativa
            const navAlt = document.querySelector('nav.navbar');
            if (navAlt) {
                this.createSelectorInElement(navAlt);
                return;
            }
            console.warn('No se encontró el elemento .navbar');
            return;
        }

        this.createSelectorInElement(header);
    }

    createSelectorInElement(header) {
        const languageSelector = document.createElement('div');
        languageSelector.className = 'language-selector';
        languageSelector.innerHTML = `
            <div class="language-current" id="language-current">
                <span class="flag">${this.languages[this.currentLanguage].flag}</span>
                <span class="lang-code">${this.currentLanguage.toUpperCase()}</span>
                <i class="fas fa-chevron-down"></i>
            </div>
            <div class="language-dropdown" id="language-dropdown">
                ${Object.entries(this.languages).map(([code, lang]) => `
                    <div class="language-option" data-lang="${code}">
                        <span class="flag">${lang.flag}</span>
                        <span class="lang-name">${lang.name}</span>
                    </div>
                `).join('')}
            </div>
        `;

        // Insertar antes del burger menu
        const burger = header.querySelector('.burger');
        if (burger) {
            header.insertBefore(languageSelector, burger);
        } else {
            header.appendChild(languageSelector);
        }

        this.attachEvents();
    }

    attachEvents() {
        const currentSelector = document.getElementById('language-current');
        const dropdown = document.getElementById('language-dropdown');
        
        if (!currentSelector || !dropdown) return;

        // Toggle dropdown
        currentSelector.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('show');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            dropdown.classList.remove('show');
        });

        // Language selection
        dropdown.addEventListener('click', async (e) => {
            e.stopPropagation();
            const option = e.target.closest('.language-option');
            if (option) {
                const newLang = option.dataset.lang;
                await this.changeLanguage(newLang);
            }
        });
    }

    async changeLanguage(newLang) {
        if (!this.isValidLanguage(newLang) || newLang === this.currentLanguage) {
            return;
        }

        this.currentLanguage = newLang;
        localStorage.setItem('MapsLink-language', newLang);

        // Update selector display
        const currentSelector = document.getElementById('language-current');
        if (currentSelector) {
            const flag = currentSelector.querySelector('.flag');
            const langCode = currentSelector.querySelector('.lang-code');
            if (flag) flag.textContent = this.languages[newLang].flag;
            if (langCode) langCode.textContent = newLang.toUpperCase();
        }

        // Close dropdown
        const dropdown = document.getElementById('language-dropdown');
        if (dropdown) {
            dropdown.classList.remove('show');
        }

        // Apply translations
        await this.applyTranslations();
        this.updateDocumentLanguage();

        // Update URL
        this.updateURL();
    }

    async applyTranslations() {
        let trans;
        
        // Usar el nuevo sistema modular si está disponible
        if (this.translationLoader) {
            try {
                trans = await this.translationLoader.setLanguage(this.currentLanguage);
            } catch (error) {
                console.error('Error cargando traducción:', error);
                trans = window.translations[this.currentLanguage] || window.translations['es'];
            }
        } else {
            // Fallback al sistema anterior
            trans = window.translations[this.currentLanguage] || window.translations['es'];
        }
        
        if (!trans) {
            console.warn('No se encontraron traducciones para', this.currentLanguage);
            return;
        }
        
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (trans[key]) {
                if (element.tagName === 'INPUT' && element.type === 'submit') {
                    element.value = trans[key];
                } else if (element.tagName === 'INPUT' && element.placeholder !== undefined) {
                    element.placeholder = trans[key];
                } else {
                    element.textContent = trans[key];
                }
            }
        });

        // Update document title
        const titleKey = this.getTitleKey();
        if (titleKey && trans[titleKey]) {
            document.title = trans[titleKey];
        }
    }

    getTitleKey() {
        const path = window.location.pathname;
        if (path.includes('tutorial')) return 'tutorial_title';
        if (path.includes('privacy')) return 'privacy_title';
        return 'hero_title';
    }

    updateDocumentLanguage() {
        document.documentElement.lang = this.currentLanguage;
        
        // Update HTML dir attribute for RTL languages
        if (['ar', 'ur'].includes(this.currentLanguage)) {
            document.documentElement.dir = 'rtl';
        } else {
            document.documentElement.dir = 'ltr';
        }
    }

    updateURL() {
        const url = new URL(window.location);
        url.searchParams.set('lang', this.currentLanguage);
        window.history.replaceState({}, '', url);
    }
}

// Initialize language selector when DOM is loaded
function initLanguageSelector() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            new LanguageSelector();
        });
    } else {
        new LanguageSelector();
    }
}

// Inicializar
initLanguageSelector();