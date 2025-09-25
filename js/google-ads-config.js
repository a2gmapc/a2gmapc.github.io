/**
 * Configuración de Google Ads para A2GMC
 * 
 * Para configurar tus ads:
 * 1. Reemplaza "ca-pub-XXXXXXXXXXXXXXXXX" con tu ID de AdSense real
 * 2. Reemplaza los data-ad-slot con los IDs reales de tus unidades de anuncios
 * 3. Personaliza los tipos de anuncios según tus necesidades
 */

const GoogleAdsConfig = {
    // ID de tu cuenta de AdMob/AdSense
    publisherId: "ca-app-pub-9657415184487447",
    
    // Configuración de slots de anuncios
    adSlots: {
        // Página principal (index.html)
        homeBannerTop: "9789392271",      // Banner después del hero
        homeBannerBottom: "9789392271",   // Banner antes de descarga (reutilizando el mismo slot)
        
        // Página de tutorial (tutorial.html)
        tutorialBannerMid: "9789392271",  // Banner en medio del tutorial
        tutorialBannerFaq: "9789392271",  // Banner antes del FAQ
        
        // Página de privacidad (privacy.html)
        privacyBanner: "9789392271",      // Banner en privacy
        
        // Ads adicionales (todos usando el mismo slot por ahora)
        sidebarAd: "9789392271",          // Ad lateral
        footerAd: "9789392271"            // Ad en footer
    },
    
    // Configuración de tipos de anuncios
    adFormats: {
        responsiveBanner: {
            format: "auto",
            fullWidth: true
        },
        rectangle: {
            format: "rectangle", 
            width: 300,
            height: 250
        },
        leaderboard: {
            format: "leaderboard",
            width: 728,
            height: 90
        }
    },
    
    // Configuración de AdSense
    adsenseConfig: {
        // Habilitar ads automáticos (opcional)
        autoAds: true,
        
        // Configuraciones de privacidad
        npa: false, // Non-personalized ads
        
        // Configuración de cookies
        cookieConsent: true
    }
};

/**
 * Función para inicializar AdSense automático
 */
function initAutoAds() {
    if (GoogleAdsConfig.adsenseConfig.autoAds) {
        // Auto ads se configuran automáticamente con el script de AdSense
        console.log('Google Auto Ads habilitado');
    }
}

/**
 * Función para cargar ads con configuración de privacidad
 */
function loadAdsWithPrivacy() {
    // Verificar consentimiento de cookies si es necesario
    if (GoogleAdsConfig.adsenseConfig.cookieConsent) {
        // Aquí podrías integrar con un sistema de gestión de cookies
        console.log('Cargando ads con configuración de privacidad');
    }
}

/**
 * Función para actualizar los placeholders de ads en todas las páginas
 * Usar esto para actualizar los data-ad-client y data-ad-slot automáticamente
 */
function updateAdPlaceholders() {
    const ads = document.querySelectorAll('.adsbygoogle');
    ads.forEach(ad => {
        // Actualizar el data-ad-client si está usando placeholder
        if (ad.dataset.adClient === 'ca-pub-XXXXXXXXXXXXXXXXX') {
            ad.dataset.adClient = GoogleAdsConfig.publisherId;
        }
    });
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initAutoAds();
    loadAdsWithPrivacy();
    updateAdPlaceholders();
});

// Exportar configuración para uso en otros scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GoogleAdsConfig;
}