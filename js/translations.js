//translations.js - Sistema de traducción para MapsLink
const translations = {
    en: {
        // Navigation
        nav_home: "Home",
        nav_tutorial: "Tutorial",
        nav_privacy: "Privacy Policy",
        
        // Hero Section
        hero_title: "Tired of Apple Maps links not working properly on Android?",
        hero_subtitle: "MapsLink Converter solves this problem once and for all.",
        hero_button: "Download Now",
        
        // Features Section
        features_title: "Why do you need MapsLink?",
        feature1_title: "Broken links",
        feature1_text: "Apple Maps links don't work properly on Android devices, taking you to web pages instead of the maps app.",
        feature2_title: "Time wasted",
        feature2_text: "Manually copying coordinates or searching for the location again is tedious and wastes valuable time.",
        feature3_title: "Direct navigation",
        feature3_text: "With MapsLink, any Apple Maps link will automatically open in Google Maps, ready to navigate.",
        
        // How it works
        howitworks_title: "How does it work?",
        step1_text: "Receive an Apple Maps link",
        step2_text: "Share it with MapsLink or open it directly",
        step3_text: "Ready! It will open in Google Maps automatically",
        
        // Download Section
        download_title: "Download the app",
        download_subtitle: "Available on Google Play Store for all Android devices",
        download_compatibility: "Compatible with Android 6.0 and later versions",
        
        // Footer
        footer_links: "Links",
        footer_social: "Follow us",
        footer_copyright: "© 2023 MapsLink Converter. All rights reserved.",
        
        // Tutorial Page
        tutorial_title: "How to use MapsLink Converter",
        tutorial_subtitle: "Follow these simple steps to configure and use our application",
        
        tutorial_setup_title: "Initial setup",
        tutorial_step1_title: "Install the app",
        tutorial_step1_text: "Download and install MapsLink from Google Play Store.",
        tutorial_step2_title: "Open the app",
        tutorial_step2_text: "Open MapsLink for the first time to configure necessary permissions.",
        tutorial_step3_title: "Grant permissions",
        tutorial_step3_text: "When prompted, grant permission to the app to open links.",
        
        tutorial_devices_title: "Setup on specific devices",
        tutorial_general: "General",
        tutorial_xiaomi: "Xiaomi/Redmi/Poco",
        
        tutorial_general_title: "Setup on standard Android devices",
        tutorial_general_step1: "Open Settings",
        tutorial_general_step1_text: "Go to \"Settings\" on your Android device.",
        tutorial_general_step2: "Apps",
        tutorial_general_step2_text: "Select \"Apps\" or \"App Manager\".",
        tutorial_general_step3: "Find MapsLink",
        tutorial_general_step3_text: "Find and select \"MapsLink Converter\".",
        tutorial_general_step4: "Open by default",
        tutorial_general_step4_text: "Select \"Open by default\" or \"Set as default\".",
        tutorial_general_step5: "Enable \"Open supported links\"",
        tutorial_general_step5_text: "Make sure the \"Open supported links\" option is enabled.",
        
        tutorial_xiaomi_title: "Setup on Xiaomi devices",
        tutorial_xiaomi_step1: "Open Settings",
        tutorial_xiaomi_step1_text: "Go to \"Settings\" on your Xiaomi device.",
        tutorial_xiaomi_step2: "Apps",
        tutorial_xiaomi_step2_text: "Select \"Apps\" and then \"Manage apps\".",
        tutorial_xiaomi_step3: "Find MapsLink",
        tutorial_xiaomi_step3_text: "Find and select \"MapsLink Converter\".",
        tutorial_xiaomi_step4: "Permissions",
        tutorial_xiaomi_step4_text: "Select \"Permissions\" and make sure all necessary permissions are granted.",
        tutorial_xiaomi_step5: "Other settings",
        tutorial_xiaomi_step5_text: "Select \"Other settings\" and then \"Open by default\".",
        tutorial_xiaomi_step6: "Enable \"Open supported links\"",
        tutorial_xiaomi_step6_text: "Make sure the \"Open supported links\" option is enabled.",
        
        tutorial_usage_title: "Daily use",
        tutorial_method1_title: "Method 1: Share link",
        tutorial_method1_step1: "When you receive an Apple Maps link, press and hold the link.",
        tutorial_method1_step2: "Select \"Share\" from the menu that appears.",
        tutorial_method1_step3: "Find and select \"MapsLink\" in the sharing options.",
        tutorial_method1_step4: "The app will process the link and automatically open it in Google Maps.",
        
        tutorial_method2_title: "Method 2: Open directly",
        tutorial_method2_step1: "If you have correctly configured permissions, simply tap the Apple Maps link.",
        tutorial_method2_step2: "The system will ask which app you want to open it with.",
        tutorial_method2_step3: "Select \"MapsLink\" and check \"Always\" if you want it to be the default option.",
        tutorial_method2_step4: "The app will process the link and automatically open it in Google Maps.",
        
        // FAQ
        faq_title: "Frequently Asked Questions",
        faq_q1: "Why does the app need permission to open links?",
        faq_a1: "MapsLink needs this permission to intercept Apple Maps links and redirect them to Google Maps. Without this permission, the app won't work properly.",
        faq_q2: "Does the app collect my location data?",
        faq_a2: "No. MapsLink doesn't collect or store any location data. The app only processes links to convert them to Google Maps format and doesn't save any information about the places you visit.",
        faq_q3: "Does it work with all Apple Maps links?",
        faq_a3: "Yes, MapsLink is designed to work with all Apple Maps link formats, including locations, routes, and searches.",
        
        // Tutorial Page - Complete translations
        tutorial_setup_title: "Initial setup",
        tutorial_step1_title: "Install the app",
        tutorial_step1_text: "Download and install MapsLink from Google Play Store.",
        tutorial_step2_title: "Open the app",
        tutorial_step2_text: "Open MapsLink for the first time to configure necessary permissions.",
        tutorial_step3_title: "Grant permissions",
        tutorial_step3_text: "When prompted, grant permission to the app to open links.",
        
        tutorial_devices_title: "Setup on specific devices",
        tutorial_general: "General",
        tutorial_xiaomi: "Xiaomi/Redmi/Poco",
        
        tutorial_general_title: "Setup on standard Android devices",
        tutorial_general_step1: "Open Settings",
        tutorial_general_step1_text: "Go to \"Settings\" on your Android device.",
        tutorial_general_step2: "Apps",
        tutorial_general_step2_text: "Select \"Apps\" or \"App Manager\".",
        tutorial_general_step3: "Find MapsLink",
        tutorial_general_step3_text: "Find and select \"MapsLink Converter\".",
        tutorial_general_step4: "Open by default",
        tutorial_general_step4_text: "Select \"Open by default\" or \"Set as default\".",
        tutorial_general_step5: "Enable \"Open supported links\"",
        tutorial_general_step5_text: "Make sure the \"Open supported links\" option is enabled.",
        
        tutorial_xiaomi_title: "Setup on Xiaomi devices",
        tutorial_xiaomi_step1: "Open Settings",
        tutorial_xiaomi_step1_text: "Go to \"Settings\" on your Xiaomi device.",
        tutorial_xiaomi_step2: "Apps",
        tutorial_xiaomi_step2_text: "Select \"Apps\" and then \"Manage apps\".",
        tutorial_xiaomi_step3: "Find MapsLink",
        tutorial_xiaomi_step3_text: "Find and select \"MapsLink Converter\".",
        tutorial_xiaomi_step4: "Permissions",
        tutorial_xiaomi_step4_text: "Select \"Permissions\" and make sure all necessary permissions are granted.",
        tutorial_xiaomi_step5: "Other settings",
        tutorial_xiaomi_step5_text: "Select \"Other settings\" and then \"Open by default\".",
        tutorial_xiaomi_step6: "Enable \"Open supported links\"",
        tutorial_xiaomi_step6_text: "Make sure the \"Open supported links\" option is enabled.",
        
        tutorial_usage_title: "Daily use",
        tutorial_method1_title: "Method 1: Share link",
        tutorial_method1_step1: "When you receive an Apple Maps link, press and hold the link.",
        tutorial_method1_step2: "Select \"Share\" from the menu that appears.",
        tutorial_method1_step3: "Find and select \"MapsLink\" in the sharing options.",
        tutorial_method1_step4: "The app will process the link and automatically open it in Google Maps.",
        
        tutorial_method2_title: "Method 2: Open directly",
        tutorial_method2_step1: "If you have correctly configured permissions, simply tap the Apple Maps link.",
        tutorial_method2_step2: "The system will ask which app you want to open it with.",
        tutorial_method2_step3: "Select \"MapsLink\" and check \"Always\" if you want it to be the default option.",
        tutorial_method2_step4: "The app will process the link and automatically open it in Google Maps.",

        // FAQ Section
        faq_title: "Frequently Asked Questions",
        faq_q1: "Why does the app need permission to open links?",
        faq_a1: "MapsLink needs this permission to intercept Apple Maps links and redirect them to Google Maps. Without this permission, the app won't work properly.",
        faq_q2: "Does the app collect my location data?",
        faq_a2: "No. MapsLink doesn't collect or store any location data. The app only processes links to convert them to Google Maps format and doesn't save any information about the places you visit.",
        faq_q3: "Does it work with all Apple Maps links?",
        faq_a3: "Yes, MapsLink is designed to work with all Apple Maps link formats, including locations, routes, and searches.",

        // Privacy Policy
        privacy_title: "Privacy Policy",
        privacy_updated: "Last updated: June 1, 2023",
        privacy_intro_title: "Introduction",
        privacy_intro_text1: "At MapsLink Converter (MapsLink), we respect your privacy and are committed to protecting it. This Privacy Policy explains how our application handles information.",
        privacy_intro_text2: "Our application is designed with a \"privacy by design\" approach, which means we have built MapsLink to work without needing to collect personal data.",
        
        privacy_nocollect_title: "Information we DO NOT collect",
        privacy_nocollect_text: "MapsLink does not collect, store, or transmit any type of personal information, including but not limited to:",
        privacy_nocollect_list1: "Location data or location history",
        privacy_nocollect_list2: "Personal identification information",
        privacy_nocollect_list3: "Browsing or search history",
        privacy_nocollect_list4: "Device information",
        privacy_nocollect_list5: "Email addresses or contact information",
        
        privacy_howworks_title: "How our application works",
        privacy_howworks_text: "MapsLink works as follows:",
        privacy_howworks_step1: "When you receive or open an Apple Maps link, our application intercepts this link.",
        privacy_howworks_step2: "The application processes the link locally on your device to extract location information.",
        privacy_howworks_step3: "Then, the application creates a new Google Maps-compatible link and opens it in the Google Maps app.",
        privacy_howworks_step4: "This entire process happens instantly and locally on your device, without sending any information to our servers or third parties.",
        
        privacy_permissions_title: "Required permissions",
        privacy_permissions_text: "To function properly, MapsLink requires the following permissions:",
        privacy_permissions_url: "URL Handling access: This permission is necessary for the application to intercept and process Apple Maps links. Without this permission, the application cannot function.",
        privacy_permissions_note: "We do not request any other permissions that are not strictly necessary for the core functionality of the application.",
        
        privacy_thirdparty_title: "Third-party services",
        privacy_thirdparty_text1: "MapsLink does not use third-party services for analytics, advertising, or any other purpose that could compromise your privacy.",
        privacy_thirdparty_text2: "When the application opens Google Maps, you are using the Google Maps application, which has its own privacy policy. We recommend reviewing Google Maps' privacy policy to understand how they handle your information.",
        
        privacy_security_title: "Security",
        privacy_security_text: "Although we don't collect data, we take the security of our application seriously. MapsLink is designed to be secure and not expose your device to vulnerabilities.",
        
        privacy_changes_title: "Changes to this policy",
        privacy_changes_text1: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the \"last updated\" date.",
        privacy_changes_text2: "We recommend reviewing this Privacy Policy periodically to stay informed about how we are protecting your information.",
        
        privacy_contact_title: "Contact",
        privacy_contact_text: "If you have any questions about this Privacy Policy, please don't hesitate to contact us:",
        privacy_contact_email: "By email: a2gmapc@gmail.com"
    },
    
    es: {
        // Navigation
        nav_home: "Inicio",
        nav_tutorial: "Tutorial",
        nav_privacy: "Política de Privacidad",
        
        // Hero Section
        hero_title: "¿Cansado de que los enlaces de Apple Maps no funcionen bien en Android?",
        hero_subtitle: "MapsLink Converter soluciona este problema de una vez por todas.",
        hero_button: "Descargar Ahora",
        
        // Features Section
        features_title: "¿Por qué necesitas MapsLink?",
        feature1_title: "Enlaces rotos",
        feature1_text: "Los enlaces de Apple Maps no funcionan correctamente en dispositivos Android, llevándote a páginas web en lugar de a la aplicación de mapas.",
        feature2_title: "Pérdida de tiempo",
        feature2_text: "Copiar coordenadas manualmente o buscar de nuevo la ubicación es tedioso y consume tiempo valioso.",
        feature3_title: "Navegación directa",
        feature3_text: "Con MapsLink, cualquier enlace de Apple Maps se abrirá automáticamente en Google Maps, listo para navegar.",
        
        // How it works
        howitworks_title: "¿Cómo funciona?",
        step1_text: "Recibe un enlace de Apple Maps",
        step2_text: "Compártelo con MapsLink o ábrelo directamente",
        step3_text: "¡Listo! Se abrirá en Google Maps automáticamente",
        
        // Download Section
        download_title: "Descarga la aplicación",
        download_subtitle: "Disponible en Google Play Store para todos los dispositivos Android",
        download_compatibility: "Compatible con Android 6.0 y versiones posteriores",
        
        // Footer
        footer_links: "Enlaces",
        footer_social: "Síguenos",
        footer_copyright: "© 2023 MapsLink Converter. Todos los derechos reservados.",
        
        // Tutorial Page
        tutorial_title: "Cómo usar MapsLink Converter",
        tutorial_subtitle: "Sigue estos sencillos pasos para configurar y utilizar nuestra aplicación",
        
        tutorial_setup_title: "Configuración inicial",
        tutorial_step1_title: "Instala la aplicación",
        tutorial_step1_text: "Descarga e instala MapsLink desde Google Play Store.",
        tutorial_step2_title: "Abre la aplicación",
        tutorial_step2_text: "Abre MapsLink por primera vez para configurar los permisos necesarios.",
        tutorial_step3_title: "Concede permisos",
        tutorial_step3_text: "Cuando se te solicite, concede permiso a la aplicación para abrir enlaces.",
        
        tutorial_devices_title: "Configuración en dispositivos específicos",
        tutorial_general: "General",
        tutorial_xiaomi: "Xiaomi/Redmi/Poco",
        
        tutorial_general_title: "Configuración en dispositivos Android estándar",
        tutorial_general_step1: "Abre Ajustes",
        tutorial_general_step1_text: "Ve a \"Ajustes\" en tu dispositivo Android.",
        tutorial_general_step2: "Aplicaciones",
        tutorial_general_step2_text: "Selecciona \"Aplicaciones\" o \"Administrador de aplicaciones\".",
        tutorial_general_step3: "Busca MapsLink",
        tutorial_general_step3_text: "Encuentra y selecciona \"MapsLink Converter\".",
        tutorial_general_step4: "Abrir por defecto",
        tutorial_general_step4_text: "Selecciona \"Abrir por defecto\" o \"Establecer como predeterminado\".",
        tutorial_general_step5: "Activar \"Abrir enlaces compatibles\"",
        tutorial_general_step5_text: "Asegúrate de que la opción \"Abrir enlaces compatibles\" esté activada.",
        
        tutorial_xiaomi_title: "Configuración en dispositivos Xiaomi",
        tutorial_xiaomi_step1: "Abre Ajustes",
        tutorial_xiaomi_step1_text: "Ve a \"Ajustes\" en tu dispositivo Xiaomi.",
        tutorial_xiaomi_step2: "Aplicaciones",
        tutorial_xiaomi_step2_text: "Selecciona \"Aplicaciones\" y luego \"Administrar aplicaciones\".",
        tutorial_xiaomi_step3: "Busca MapsLink",
        tutorial_xiaomi_step3_text: "Encuentra y selecciona \"MapsLink Converter\".",
        tutorial_xiaomi_step4: "Permisos",
        tutorial_xiaomi_step4_text: "Selecciona \"Permisos\" y asegúrate de que todos los permisos necesarios estén concedidos.",
        tutorial_xiaomi_step5: "Otras configuraciones",
        tutorial_xiaomi_step5_text: "Selecciona \"Otras configuraciones\" y luego \"Abrir por defecto\".",
        tutorial_xiaomi_step6: "Activar \"Abrir enlaces compatibles\"",
        tutorial_xiaomi_step6_text: "Asegúrate de que la opción \"Abrir enlaces compatibles\" esté activada.",
        
        tutorial_usage_title: "Uso diario",
        tutorial_method1_title: "Método 1: Compartir enlace",
        tutorial_method1_step1: "Cuando recibas un enlace de Apple Maps, mantén presionado el enlace.",
        tutorial_method1_step2: "Selecciona \"Compartir\" en el menú que aparece.",
        tutorial_method1_step3: "Busca y selecciona \"MapsLink\" en las opciones de compartir.",
        tutorial_method1_step4: "La aplicación procesará el enlace y lo abrirá automáticamente en Google Maps.",
        
        tutorial_method2_title: "Método 2: Abrir directamente",
        tutorial_method2_step1: "Si has configurado correctamente los permisos, simplemente toca el enlace de Apple Maps.",
        tutorial_method2_step2: "El sistema te preguntará con qué aplicación deseas abrirlo.",
        tutorial_method2_step3: "Selecciona \"MapsLink\" y marca \"Siempre\" si deseas que sea la opción predeterminada.",
        tutorial_method2_step4: "La aplicación procesará el enlace y lo abrirá automáticamente en Google Maps.",
        
        // FAQ
        faq_title: "Preguntas frecuentes",
        faq_q1: "¿Por qué la aplicación necesita permisos para abrir enlaces?",
        faq_a1: "MapsLink necesita este permiso para poder interceptar los enlaces de Apple Maps y redirigirlos a Google Maps. Sin este permiso, la aplicación no podrá funcionar correctamente.",
        faq_q2: "¿La aplicación recopila mis datos de ubicación?",
        faq_a2: "No. MapsLink no recopila ni almacena ningún dato de ubicación. La aplicación solo procesa los enlaces para convertirlos al formato de Google Maps y no guarda ninguna información sobre los lugares que visitas.",
        faq_q3: "¿Funciona con todos los enlaces de Apple Maps?",
        faq_a3: "Sí, MapsLink está diseñado para funcionar con todos los formatos de enlaces de Apple Maps, incluyendo ubicaciones, rutas y búsquedas.",
        
        // Tutorial Page - Complete translations
        tutorial_setup_title: "Configuración inicial",
        tutorial_step1_title: "Instala la aplicación",
        tutorial_step1_text: "Descarga e instala MapsLink desde Google Play Store.",
        tutorial_step2_title: "Abre la aplicación",
        tutorial_step2_text: "Abre MapsLink por primera vez para configurar los permisos necesarios.",
        tutorial_step3_title: "Concede permisos",
        tutorial_step3_text: "Cuando se te solicite, concede permiso a la aplicación para abrir enlaces.",
        
        tutorial_devices_title: "Configuración en dispositivos específicos",
        tutorial_general: "General",
        tutorial_xiaomi: "Xiaomi/Redmi/Poco",
        
        tutorial_general_title: "Configuración en dispositivos Android estándar",
        tutorial_general_step1: "Abre Ajustes",
        tutorial_general_step1_text: "Ve a \"Ajustes\" en tu dispositivo Android.",
        tutorial_general_step2: "Aplicaciones",
        tutorial_general_step2_text: "Selecciona \"Aplicaciones\" o \"Administrador de aplicaciones\".",
        tutorial_general_step3: "Busca MapsLink",
        tutorial_general_step3_text: "Encuentra y selecciona \"MapsLink Converter\".",
        tutorial_general_step4: "Abrir por defecto",
        tutorial_general_step4_text: "Selecciona \"Abrir por defecto\" o \"Establecer como predeterminado\".",
        tutorial_general_step5: "Activar \"Abrir enlaces compatibles\"",
        tutorial_general_step5_text: "Asegúrate de que la opción \"Abrir enlaces compatibles\" esté activada.",
        
        tutorial_xiaomi_title: "Configuración en dispositivos Xiaomi",
        tutorial_xiaomi_step1: "Abre Ajustes",
        tutorial_xiaomi_step1_text: "Ve a \"Ajustes\" en tu dispositivo Xiaomi.",
        tutorial_xiaomi_step2: "Aplicaciones",
        tutorial_xiaomi_step2_text: "Selecciona \"Aplicaciones\" y luego \"Administrar aplicaciones\".",
        tutorial_xiaomi_step3: "Busca MapsLink",
        tutorial_xiaomi_step3_text: "Encuentra y selecciona \"MapsLink Converter\".",
        tutorial_xiaomi_step4: "Permisos",
        tutorial_xiaomi_step4_text: "Selecciona \"Permisos\" y asegúrate de que todos los permisos necesarios estén concedidos.",
        tutorial_xiaomi_step5: "Otras configuraciones",
        tutorial_xiaomi_step5_text: "Selecciona \"Otras configuraciones\" y luego \"Abrir por defecto\".",
        tutorial_xiaomi_step6: "Activar \"Abrir enlaces compatibles\"",
        tutorial_xiaomi_step6_text: "Asegúrate de que la opción \"Abrir enlaces compatibles\" esté activada.",
        
        tutorial_usage_title: "Uso diario",
        tutorial_method1_title: "Método 1: Compartir enlace",
        tutorial_method1_step1: "Cuando recibas un enlace de Apple Maps, mantén presionado el enlace.",
        tutorial_method1_step2: "Selecciona \"Compartir\" en el menú que aparece.",
        tutorial_method1_step3: "Busca y selecciona \"MapsLink\" en las opciones de compartir.",
        tutorial_method1_step4: "La aplicación procesará el enlace y lo abrirá automáticamente en Google Maps.",
        
        tutorial_method2_title: "Método 2: Abrir directamente",
        tutorial_method2_step1: "Si has configurado correctamente los permisos, simplemente toca el enlace de Apple Maps.",
        tutorial_method2_step2: "El sistema te preguntará con qué aplicación deseas abrirlo.",
        tutorial_method2_step3: "Selecciona \"MapsLink\" y marca \"Siempre\" si deseas que sea la opción predeterminada.",
        tutorial_method2_step4: "La aplicación procesará el enlace y lo abrirá automáticamente en Google Maps.",

        // FAQ Section
        faq_title: "Preguntas frecuentes",
        faq_q1: "¿Por qué la aplicación necesita permisos para abrir enlaces?",
        faq_a1: "MapsLink necesita este permiso para poder interceptar los enlaces de Apple Maps y redirigirlos a Google Maps. Sin este permiso, la aplicación no podrá funcionar correctamente.",
        faq_q2: "¿La aplicación recopila mis datos de ubicación?",
        faq_a2: "No. MapsLink no recopila ni almacena ningún dato de ubicación. La aplicación solo procesa los enlaces para convertirlos al formato de Google Maps y no guarda ninguna información sobre los lugares que visitas.",
        faq_q3: "¿Funciona con todos los enlaces de Apple Maps?",
        faq_a3: "Sí, MapsLink está diseñado para funcionar con todos los formatos de enlaces de Apple Maps, incluyendo ubicaciones, rutas y búsquedas.",

        // Privacy Policy
        privacy_title: "Política de Privacidad",
        privacy_updated: "Última actualización: 1 de junio de 2023",
        privacy_intro_title: "Introducción",
        privacy_intro_text1: "En MapsLink Converter (MapsLink), respetamos tu privacidad y nos comprometemos a protegerla. Esta Política de Privacidad explica cómo nuestra aplicación maneja la información.",
        privacy_intro_text2: "Nuestra aplicación está diseñada con un enfoque de \"privacidad por diseño\", lo que significa que hemos construido MapsLink para funcionar sin necesidad de recopilar datos personales.",
        
        privacy_nocollect_title: "Información que NO recopilamos",
        privacy_nocollect_text: "MapsLink no recopila, almacena ni transmite ningún tipo de información personal, incluyendo pero no limitado a:",
        privacy_nocollect_list1: "Datos de ubicación o historial de ubicaciones",
        privacy_nocollect_list2: "Información de identificación personal",
        privacy_nocollect_list3: "Historial de navegación o búsquedas",
        privacy_nocollect_list4: "Información del dispositivo",
        privacy_nocollect_list5: "Direcciones de correo electrónico o información de contacto",
        
        privacy_howworks_title: "Cómo funciona nuestra aplicación",
        privacy_howworks_text: "MapsLink funciona de la siguiente manera:",
        privacy_howworks_step1: "Cuando recibes o abres un enlace de Apple Maps, nuestra aplicación intercepta este enlace.",
        privacy_howworks_step2: "La aplicación procesa el enlace localmente en tu dispositivo para extraer la información de ubicación.",
        privacy_howworks_step3: "Luego, la aplicación crea un nuevo enlace compatible con Google Maps y lo abre en la aplicación de Google Maps.",
        privacy_howworks_step4: "Todo este proceso ocurre instantáneamente y localmente en tu dispositivo, sin enviar ninguna información a nuestros servidores o a terceros.",
        
        privacy_permissions_title: "Permisos requeridos",
        privacy_permissions_text: "Para funcionar correctamente, MapsLink requiere los siguientes permisos:",
        privacy_permissions_url: "Acceso a enlaces (URL Handling): Este permiso es necesario para que la aplicación pueda interceptar y procesar los enlaces de Apple Maps. Sin este permiso, la aplicación no podrá funcionar.",
        privacy_permissions_note: "No solicitamos ningún otro permiso que no sea estrictamente necesario para la funcionalidad principal de la aplicación.",
        
        privacy_thirdparty_title: "Servicios de terceros",
        privacy_thirdparty_text1: "MapsLink no utiliza servicios de terceros para análisis, publicidad o cualquier otro propósito que pudiera comprometer tu privacidad.",
        privacy_thirdparty_text2: "Cuando la aplicación abre Google Maps, estás utilizando la aplicación de Google Maps, que tiene su propia política de privacidad. Te recomendamos revisar la política de privacidad de Google Maps para entender cómo manejan tu información.",
        
        privacy_security_title: "Seguridad",
        privacy_security_text: "Aunque no recopilamos datos, nos tomamos en serio la seguridad de nuestra aplicación. MapsLink está diseñada para ser segura y no exponer tu dispositivo a vulnerabilidades.",
        
        privacy_changes_title: "Cambios a esta política",
        privacy_changes_text1: "Podemos actualizar nuestra Política de Privacidad de vez en cuando. Te notificaremos cualquier cambio publicando la nueva Política de Privacidad en esta página y actualizando la fecha de \"última actualización\".",
        privacy_changes_text2: "Te recomendamos revisar esta Política de Privacidad periódicamente para estar informado sobre cómo estamos protegiendo tu información.",
        
        privacy_contact_title: "Contacto",
        privacy_contact_text: "Si tienes alguna pregunta sobre esta Política de Privacidad, no dudes en contactarnos:",
        privacy_contact_email: "Por correo electrónico: a2gmapc@gmail.com"
    },
    
    hi: {
        // Navigation
        nav_home: "मुख्य पृष्ठ",
        nav_tutorial: "ट्यूटोरियल",
        nav_privacy: "गोपनीयता नीति",
        
        // Hero Section
        hero_title: "Android पर Apple Maps लिंक सही तरीके से काम नहीं करने से परेशान हैं?",
        hero_subtitle: "MapsLink Converter इस समस्या को हमेशा के लिए हल कर देता है।",
        hero_button: "अभी डाउनलोड करें",
        
        // Features Section
        features_title: "आपको MapsLink की आवश्यकता क्यों है?",
        feature1_title: "टूटे हुए लिंक",
        feature1_text: "Apple Maps लिंक Android उपकरणों पर सही तरीके से काम नहीं करते, आपको मैप्स ऐप के बजाय वेब पेज पर ले जाते हैं।",
        feature2_title: "समय की बर्बादी",
        feature2_text: "मैन्युअल रूप से निर्देशांक कॉपी करना या स्थान को फिर से खोजना थकाऊ है और कीमती समय बर्बाद करता है।",
        feature3_title: "प्रत्यक्ष नेविगेशन",
        feature3_text: "MapsLink के साथ, कोई भी Apple Maps लिंक अपने आप Google Maps में खुल जाएगा, नेविगेट करने के लिए तैयार।",
        
        // How it works
        howitworks_title: "यह कैसे काम करता है?",
        step1_text: "Apple Maps लिंक प्राप्त करें",
        step2_text: "इसे MapsLink के साथ साझा करें या सीधे खोलें",
        step3_text: "तैयार! यह Google Maps में अपने आप खुल जाएगा",
        
        // Download Section
        download_title: "ऐप डाउनलोड करें",
        download_subtitle: "सभी Android उपकरणों के लिए Google Play Store पर उपलब्ध",
        download_compatibility: "Android 6.0 और बाद के संस्करणों के साथ संगत",
        
        // Footer
        footer_links: "लिंक",
        footer_social: "हमें फॉलो करें",
        footer_copyright: "© 2023 MapsLink Converter. सभी अधिकार सुरक्षित।",
        
        // Tutorial Page - Basic translations
        tutorial_setup_title: "प्रारंभिक सेटअप",
        tutorial_devices_title: "विशिष्ट डिवाइस पर सेटअप",
        tutorial_usage_title: "दैनिक उपयोग"
    },
    
    ja: {
        // Navigation
        nav_home: "ホーム",
        nav_tutorial: "チュートリアル",
        nav_privacy: "プライバシーポリシー",
        
        // Hero Section
        hero_title: "AndroidでApple Mapsのリンクが正常に動作しないことにうんざりしていませんか？",
        hero_subtitle: "MapsLink Converterがこの問題を一度で解決します。",
        hero_button: "今すぐダウンロード",
        
        // Features Section
        features_title: "なぜMapsLinkが必要なのか？",
        feature1_title: "壊れたリンク",
        feature1_text: "Apple MapsのリンクはAndroidデバイスで正常に動作せず、マップアプリではなくWebページに移動します。",
        feature2_title: "時間の無駄",
        feature2_text: "座標を手動でコピーしたり、場所を再検索したりするのは面倒で貴重な時間を浪費します。",
        feature3_title: "直接ナビゲーション",
        feature3_text: "MapsLinkを使用すると、Apple MapsのリンクがGoogle Mapsで自動的に開き、ナビゲーションの準備が整います。",
        
        // How it works
        howitworks_title: "どのように機能しますか？",
        step1_text: "Apple Mapsのリンクを受信",
        step2_text: "MapsLinkと共有するか直接開く",
        step3_text: "完了！Google Mapsで自動的に開きます",
        
        // Download Section
        download_title: "アプリをダウンロード",
        download_subtitle: "すべてのAndroidデバイス用にGoogle Play Storeで利用可能",
        download_compatibility: "Android 6.0以降のバージョンと互換性があります",
        
        // Footer
        footer_links: "リンク",
        footer_social: "フォローしてください",
        footer_copyright: "© 2023 MapsLink Converter. 無断転載を禁じます。",
        
        // Tutorial Page - Basic translations
        tutorial_setup_title: "初期設定",
        tutorial_devices_title: "特定のデバイスでの設定",
        tutorial_usage_title: "日常の使用"
    },
    
    sw: {
        // Navigation
        nav_home: "Nyumbani",
        nav_tutorial: "Mfumo wa Kufundisha",
        nav_privacy: "Sera ya Faragha",
        
        // Hero Section
        hero_title: "Umechoka na viungo vya Apple Maps visivyofanya kazi vizuri kwenye Android?",
        hero_subtitle: "MapsLink Converter inasuluhisha tatizo hili mara moja na kwa yote.",
        hero_button: "Pakua Sasa",
        
        // Features Section
        features_title: "Kwa nini unahitaji MapsLink?",
        feature1_title: "Viungo vilivyovunjika",
        feature1_text: "Viungo vya Apple Maps havifanyi kazi vizuri kwenye vifaa vya Android, vikikupeleka kwenye kurasa za mtandao badala ya programu ya ramani.",
        feature2_title: "Upotevu wa wakati",
        feature2_text: "Kunakili kuratibu kwa mkono au kutafuta mahali tena ni kuchoshi na kuongeza wakati wa thamani.",
        feature3_title: "Uongozaji wa moja kwa moja",
        feature3_text: "Kwa MapsLink, kiungo chochote cha Apple Maps kitafunguka kiotomatiki katika Google Maps, tayari kwa uongozaji.",
        
        // How it works
        howitworks_title: "Inafanyaje kazi?",
        step1_text: "Pokea kiungo cha Apple Maps",
        step2_text: "Shiriki na MapsLink au ufungue moja kwa moja",
        step3_text: "Tayari! Itafunguka kiotomatiki katika Google Maps",
        
        // Download Section
        download_title: "Pakua programu",
        download_subtitle: "Inapatikana kwenye Google Play Store kwa vifaa vyote vya Android",
        download_compatibility: "Inafanana na Android 6.0 na matoleo ya baadaye",
        
        // Footer
        footer_links: "Viungo",
        footer_social: "Tufuate",
        footer_copyright: "© 2023 MapsLink Converter. Haki zote zimehifadhiwa."
    },
    
    de: {
        // Navigation
        nav_home: "Startseite",
        nav_tutorial: "Tutorial",
        nav_privacy: "Datenschutzrichtlinie",
        
        // Hero Section
        hero_title: "Müde von Apple Maps-Links, die auf Android nicht richtig funktionieren?",
        hero_subtitle: "MapsLink Converter löst dieses Problem ein für alle Mal.",
        hero_button: "Jetzt herunterladen",
        
        // Features Section
        features_title: "Warum brauchen Sie MapsLink?",
        feature1_title: "Defekte Links",
        feature1_text: "Apple Maps-Links funktionieren auf Android-Geräten nicht richtig und führen Sie zu Webseiten statt zur Karten-App.",
        feature2_title: "Zeitverschwendung",
        feature2_text: "Koordinaten manuell zu kopieren oder den Standort erneut zu suchen ist mühsam und verschwendet wertvolle Zeit.",
        feature3_title: "Direkte Navigation",
        feature3_text: "Mit MapsLink öffnet sich jeder Apple Maps-Link automatisch in Google Maps, bereit zur Navigation.",
        
        // How it works
        howitworks_title: "Wie funktioniert es?",
        step1_text: "Apple Maps-Link erhalten",
        step2_text: "Mit MapsLink teilen oder direkt öffnen",
        step3_text: "Fertig! Öffnet sich automatisch in Google Maps",
        
        // Download Section
        download_title: "App herunterladen",
        download_subtitle: "Verfügbar im Google Play Store für alle Android-Geräte",
        download_compatibility: "Kompatibel mit Android 6.0 und späteren Versionen",
        
        // Footer
        footer_links: "Links",
        footer_social: "Folgen Sie uns",
        footer_copyright: "© 2023 MapsLink Converter. Alle Rechte vorbehalten."
    },
    
    fr: {
        // Navigation
        nav_home: "Accueil",
        nav_tutorial: "Tutoriel",
        nav_privacy: "Politique de Confidentialité",
        
        // Hero Section
        hero_title: "Fatigué que les liens Apple Maps ne fonctionnent pas correctement sur Android ?",
        hero_subtitle: "MapsLink Converter résout ce problème une fois pour toutes.",
        hero_button: "Télécharger Maintenant",
        
        // Features Section
        features_title: "Pourquoi avez-vous besoin d'MapsLink ?",
        feature1_title: "Liens cassés",
        feature1_text: "Les liens Apple Maps ne fonctionnent pas correctement sur les appareils Android, vous emmenant vers des pages web au lieu de l'application de cartes.",
        feature2_title: "Perte de temps",
        feature2_text: "Copier manuellement les coordonnées ou rechercher à nouveau l'emplacement est fastidieux et fait perdre un temps précieux.",
        feature3_title: "Navigation directe",
        feature3_text: "Avec MapsLink, tout lien Apple Maps s'ouvrira automatiquement dans Google Maps, prêt à naviguer.",
        
        // How it works
        howitworks_title: "Comment ça marche ?",
        step1_text: "Recevoir un lien Apple Maps",
        step2_text: "Le partager avec MapsLink ou l'ouvrir directement",
        step3_text: "Prêt ! Il s'ouvrira automatiquement dans Google Maps",
        
        // Download Section
        download_title: "Télécharger l'application",
        download_subtitle: "Disponible sur Google Play Store pour tous les appareils Android",
        download_compatibility: "Compatible avec Android 6.0 et versions ultérieures",
        
        // Footer
        footer_links: "Liens",
        footer_social: "Suivez-nous",
        footer_copyright: "© 2023 MapsLink Converter. Tous droits réservés."
    },
    
    it: {
        // Navigation
        nav_home: "Home",
        nav_tutorial: "Tutorial",
        nav_privacy: "Politica sulla Privacy",
        
        // Hero Section
        hero_title: "Stanco dei link di Apple Maps che non funzionano correttamente su Android?",
        hero_subtitle: "MapsLink Converter risolve questo problema una volta per tutte.",
        hero_button: "Scarica Ora",
        
        // Features Section
        features_title: "Perché hai bisogno di MapsLink?",
        feature1_title: "Link rotti",
        feature1_text: "I link di Apple Maps non funzionano correttamente sui dispositivi Android, portandoti alle pagine web invece che all'app mappe.",
        feature2_title: "Perdita di tempo",
        feature2_text: "Copiare manualmente le coordinate o cercare di nuovo la posizione è noioso e spreca tempo prezioso.",
        feature3_title: "Navigazione diretta",
        feature3_text: "Con MapsLink, qualsiasi link di Apple Maps si aprirà automaticamente in Google Maps, pronto per navigare.",
        
        // How it works
        howitworks_title: "Come funziona?",
        step1_text: "Ricevi un link di Apple Maps",
        step2_text: "Condividilo con MapsLink o aprilo direttamente",
        step3_text: "Pronto! Si aprirà automaticamente in Google Maps",
        
        // Download Section
        download_title: "Scarica l'app",
        download_subtitle: "Disponibile su Google Play Store per tutti i dispositivi Android",
        download_compatibility: "Compatibile con Android 6.0 e versioni successive",
        
        // Footer
        footer_links: "Link",
        footer_social: "Seguici",
        footer_copyright: "© 2023 MapsLink Converter. Tutti i diritti riservati."
    },
    
    id: {
        // Navigation
        nav_home: "Beranda",
        nav_tutorial: "Tutorial",
        nav_privacy: "Kebijakan Privasi",
        
        // Hero Section
        hero_title: "Lelah dengan tautan Apple Maps yang tidak berfungsi dengan baik di Android?",
        hero_subtitle: "MapsLink Converter menyelesaikan masalah ini sekali dan untuk selamanya.",
        hero_button: "Unduh Sekarang",
        
        // Features Section
        features_title: "Mengapa Anda membutuhkan MapsLink?",
        feature1_title: "Tautan rusak",
        feature1_text: "Tautan Apple Maps tidak berfungsi dengan baik pada perangkat Android, membawa Anda ke halaman web alih-alih aplikasi peta.",
        feature2_title: "Membuang waktu",
        feature2_text: "Menyalin koordinat secara manual atau mencari lokasi lagi adalah membosankan dan membuang waktu berharga.",
        feature3_title: "Navigasi langsung",
        feature3_text: "Dengan MapsLink, tautan Apple Maps apa pun akan terbuka secara otomatis di Google Maps, siap untuk navigasi.",
        
        // How it works
        howitworks_title: "Bagaimana cara kerjanya?",
        step1_text: "Terima tautan Apple Maps",
        step2_text: "Bagikan dengan MapsLink atau buka langsung",
        step3_text: "Siap! Akan terbuka secara otomatis di Google Maps",
        
        // Download Section
        download_title: "Unduh aplikasi",
        download_subtitle: "Tersedia di Google Play Store untuk semua perangkat Android",
        download_compatibility: "Kompatibel dengan Android 6.0 dan versi yang lebih baru",
        
        // Footer
        footer_links: "Tautan",
        footer_social: "Ikuti kami",
        footer_copyright: "© 2023 MapsLink Converter. Semua hak dilindungi."
    },
    
    ru: {
        // Navigation
        nav_home: "Главная",
        nav_tutorial: "Руководство",
        nav_privacy: "Политика Конфиденциальности",
        
        // Hero Section
        hero_title: "Устали от того, что ссылки Apple Maps не работают должным образом на Android?",
        hero_subtitle: "MapsLink Converter решает эту проблему раз и навсегда.",
        hero_button: "Скачать Сейчас",
        
        // Features Section
        features_title: "Зачем вам нужен MapsLink?",
        feature1_title: "Сломанные ссылки",
        feature1_text: "Ссылки Apple Maps не работают должным образом на устройствах Android, перенаправляя вас на веб-страницы вместо приложения карт.",
        feature2_title: "Потеря времени",
        feature2_text: "Ручное копирование координат или повторный поиск местоположения утомительны и тратят драгоценное время.",
        feature3_title: "Прямая навигация",
        feature3_text: "С MapsLink любая ссылка Apple Maps автоматически откроется в Google Maps, готовая для навигации.",
        
        // How it works
        howitworks_title: "Как это работает?",
        step1_text: "Получить ссылку Apple Maps",
        step2_text: "Поделиться с MapsLink или открыть напрямую",
        step3_text: "Готово! Автоматически откроется в Google Maps",
        
        // Download Section
        download_title: "Скачать приложение",
        download_subtitle: "Доступно в Google Play Store для всех устройств Android",
        download_compatibility: "Совместимо с Android 6.0 и более поздними версиями",
        
        // Footer
        footer_links: "Ссылки",
        footer_social: "Подписывайтесь на нас",
        footer_copyright: "© 2023 MapsLink Converter. Все права защищены."
    },
    
    ur: {
        // Navigation
        nav_home: "صفحہ اول",
        nav_tutorial: "ٹیوٹوریل",
        nav_privacy: "رازداری کی پالیسی",
        
        // Hero Section
        hero_title: "کیا آپ Android پر Apple Maps کے لنکس کے صحیح طریقے سے کام نہ کرنے سے تنگ ہیں؟",
        hero_subtitle: "MapsLink Converter اس مسئلے کو ہمیشہ کے لیے حل کر دیتا ہے۔",
        hero_button: "ابھی ڈاؤن لوڈ کریں",
        
        // Features Section
        features_title: "آپ کو MapsLink کی ضرورت کیوں ہے؟",
        feature1_title: "ٹوٹے ہوئے لنکس",
        feature1_text: "Apple Maps کے لنکس Android ڈیوائسز پر صحیح طریقے سے کام نہیں کرتے، آپ کو نقشہ ایپ کی بجائے ویب صفحات پر لے جاتے ہیں۔",
        feature2_title: "وقت کا ضیاع",
        feature2_text: "دستی طور پر کوآرڈینیٹس کاپی کرنا یا دوبارہ جگہ تلاش کرنا مشکل ہے اور قیمتی وقت ضائع کرتا ہے۔",
        feature3_title: "براہ راست نیویگیشن",
        feature3_text: "MapsLink کے ساتھ، کوئی بھی Apple Maps لنک خودکار طور پر Google Maps میں کھل جائے گا، نیویگیٹ کرنے کے لیے تیار۔",
        
        // How it works
        howitworks_title: "یہ کیسے کام کرتا ہے؟",
        step1_text: "Apple Maps لنک حاصل کریں",
        step2_text: "MapsLink کے ساتھ شیئر کریں یا براہ راست کھولیں",
        step3_text: "تیار! یہ خودکار طور پر Google Maps میں کھل جائے گا",
        
        // Download Section
        download_title: "ایپ ڈاؤن لوڈ کریں",
        download_subtitle: "تمام Android ڈیوائسز کے لیے Google Play Store پر دستیاب",
        download_compatibility: "Android 6.0 اور بعد کے ورژنز کے ساتھ مطابقت رکھتا ہے",
        
        // Footer
        footer_links: "لنکس",
        footer_social: "ہمیں فالو کریں",
        footer_copyright: "© 2023 MapsLink Converter۔ تمام حقوق محفوظ ہیں۔"
    },
    
    pt: {
        // Navigation
        nav_home: "Início",
        nav_tutorial: "Tutorial",
        nav_privacy: "Política de Privacidade",
        
        // Hero Section
        hero_title: "Cansado de links do Apple Maps não funcionarem corretamente no Android?",
        hero_subtitle: "MapsLink Converter resolve este problema de uma vez por todas.",
        hero_button: "Baixar Agora",
        
        // Features Section
        features_title: "Por que você precisa do MapsLink?",
        feature1_title: "Links quebrados",
        feature1_text: "Links do Apple Maps não funcionam corretamente em dispositivos Android, levando você para páginas da web em vez do aplicativo de mapas.",
        feature2_title: "Perda de tempo",
        feature2_text: "Copiar coordenadas manualmente ou pesquisar a localização novamente é tedioso e desperdiça tempo valioso.",
        feature3_title: "Navegação direta",
        feature3_text: "Com o MapsLink, qualquer link do Apple Maps abrirá automaticamente no Google Maps, pronto para navegar.",
        
        // How it works
        howitworks_title: "Como funciona?",
        step1_text: "Receba um link do Apple Maps",
        step2_text: "Compartilhe com MapsLink ou abra diretamente",
        step3_text: "Pronto! Abrirá automaticamente no Google Maps",
        
        // Download Section
        download_title: "Baixar o aplicativo",
        download_subtitle: "Disponível na Google Play Store para todos os dispositivos Android",
        download_compatibility: "Compatível com Android 6.0 e versões posteriores",
        
        // Footer
        footer_links: "Links",
        footer_social: "Siga-nos",
        footer_copyright: "© 2023 MapsLink Converter. Todos os direitos reservados."
    },
    
    bn: {
        // Navigation
        nav_home: "হোম",
        nav_tutorial: "টিউটোরিয়াল",
        nav_privacy: "গোপনীয়তা নীতি",
        
        // Hero Section
        hero_title: "Android-এ Apple Maps লিঙ্কগুলি সঠিকভাবে কাজ না করায় ক্লান্ত?",
        hero_subtitle: "MapsLink Converter এই সমস্যার চিরতরে সমাধান করে।",
        hero_button: "এখনই ডাউনলোড করুন",
        
        // Features Section
        features_title: "কেন আপনার MapsLink প্রয়োজন?",
        feature1_title: "ভাঙা লিঙ্ক",
        feature1_text: "Apple Maps লিঙ্কগুলি Android ডিভাইসে সঠিকভাবে কাজ করে না, আপনাকে ম্যাপ অ্যাপের পরিবর্তে ওয়েব পেজে নিয়ে যায়।",
        feature2_title: "সময়ের অপচয়",
        feature2_text: "ম্যানুয়ালি কোঅর্ডিনেট কপি করা বা অবস্থান আবার খোঁজা ক্লান্তিকর এবং মূল্যবান সময় নষ্ট করে।",
        feature3_title: "সরাসরি নেভিগেশন",
        feature3_text: "MapsLink দিয়ে, যেকোনো Apple Maps লিঙ্ক স্বয়ংক্রিয়ভাবে Google Maps এ খুলবে, নেভিগেট করার জন্য প্রস্তুত।",
        
        // How it works
        howitworks_title: "এটি কীভাবে কাজ করে?",
        step1_text: "একটি Apple Maps লিঙ্ক পান",
        step2_text: "MapsLink এর সাথে শেয়ার করুন বা সরাসরি খুলুন",
        step3_text: "প্রস্তুত! এটি স্বয়ংক্রিয়ভাবে Google Maps এ খুলবে",
        
        // Download Section
        download_title: "অ্যাপ ডাউনলোড করুন",
        download_subtitle: "সমস্ত Android ডিভাইসের জন্য Google Play Store এ উপলব্ধ",
        download_compatibility: "Android 6.0 এবং পরবর্তী সংস্করণগুলির সাথে সামঞ্জস্যপূর্ণ",
        
        // Footer
        footer_links: "লিঙ্ক",
        footer_social: "আমাদের অনুসরণ করুন",
        footer_copyright: "© 2023 MapsLink Converter। সকল অধিকার সংরক্ষিত।"
    },
    
    ar: {
        // Navigation
        nav_home: "الرئيسية",
        nav_tutorial: "البرنامج التعليمي",
        nav_privacy: "سياسة الخصوصية",
        
        // Hero Section
        hero_title: "متعب من روابط Apple Maps التي لا تعمل بشكل صحيح على Android؟",
        hero_subtitle: "MapsLink Converter يحل هذه المشكلة مرة واحدة وإلى الأبد.",
        hero_button: "تحميل الآن",
        
        // Features Section
        features_title: "لماذا تحتاج MapsLink؟",
        feature1_title: "روابط معطلة",
        feature1_text: "روابط Apple Maps لا تعمل بشكل صحيح على أجهزة Android، تأخذك إلى صفحات الويب بدلاً من تطبيق الخرائط.",
        feature2_title: "إضاعة الوقت",
        feature2_text: "نسخ الإحداثيات يدوياً أو البحث عن الموقع مرة أخرى أمر مرهق ويضيع وقتاً ثميناً.",
        feature3_title: "التنقل المباشر",
        feature3_text: "مع MapsLink، أي رابط Apple Maps سيفتح تلقائياً في Google Maps، جاهز للتنقل.",
        
        // How it works
        howitworks_title: "كيف يعمل؟",
        step1_text: "احصل على رابط Apple Maps",
        step2_text: "شاركه مع MapsLink أو افتحه مباشرة",
        step3_text: "جاهز! سيفتح تلقائياً في Google Maps",
        
        // Download Section
        download_title: "تحميل التطبيق",
        download_subtitle: "متاح على Google Play Store لجميع أجهزة Android",
        download_compatibility: "متوافق مع Android 6.0 والإصدارات الأحدث",
        
        // Footer
        footer_links: "الروابط",
        footer_social: "تابعنا",
        footer_copyright: "© 2023 MapsLink Converter. جميع الحقوق محفوظة."
    },
    
    tr: {
        // Navigation
        nav_home: "Ana Sayfa",
        nav_tutorial: "Eğitim",
        nav_privacy: "Gizlilik Politikası",
        
        // Hero Section
        hero_title: "Apple Maps bağlantılarının Android'de düzgün çalışmamasından yorgun musunuz?",
        hero_subtitle: "MapsLink Converter bu sorunu bir kez ve kalıcı olarak çözer.",
        hero_button: "Şimdi İndir",
        
        // Features Section
        features_title: "Neden MapsLink'ye ihtiyacınız var?",
        feature1_title: "Bozuk bağlantılar",
        feature1_text: "Apple Maps bağlantıları Android cihazlarda düzgün çalışmıyor, sizi harita uygulaması yerine web sayfalarına götürüyor.",
        feature2_title: "Zaman kaybı",
        feature2_text: "Koordinatları manuel olarak kopyalamak veya konumu tekrar aramak yorucu ve değerli zamanı harcıyor.",
        feature3_title: "Doğrudan navigasyon",
        feature3_text: "MapsLink ile herhangi bir Apple Maps bağlantısı otomatik olarak Google Maps'te açılacak, navigasyon için hazır.",
        
        // How it works
        howitworks_title: "Nasıl çalışır?",
        step1_text: "Apple Maps bağlantısı alın",
        step2_text: "MapsLink ile paylaşın veya doğrudan açın",
        step3_text: "Hazır! Google Maps'te otomatik olarak açılacak",
        
        // Download Section
        download_title: "Uygulamayı indir",
        download_subtitle: "Tüm Android cihazlar için Google Play Store'da mevcut",
        download_compatibility: "Android 6.0 ve sonraki sürümlerle uyumlu",
        
        // Footer
        footer_links: "Bağlantılar",
        footer_social: "Bizi takip edin",
        footer_copyright: "© 2023 MapsLink Converter. Tüm hakları saklıdır."
    },
    
    zh: {
        // Navigation
        nav_home: "首页",
        nav_tutorial: "教程",
        nav_privacy: "隐私政策",
        
        // Hero Section
        hero_title: "厌倦了Apple Maps链接在Android上无法正常工作？",
        hero_subtitle: "MapsLink Converter一次性解决这个问题。",
        hero_button: "立即下载",
        
        // Features Section
        features_title: "为什么需要MapsLink？",
        feature1_title: "链接损坏",
        feature1_text: "Apple Maps链接在Android设备上无法正常工作，会把您带到网页而不是地图应用。",
        feature2_title: "浪费时间",
        feature2_text: "手动复制坐标或重新搜索位置既繁琐又浪费宝贵时间。",
        feature3_title: "直接导航",
        feature3_text: "使用MapsLink，任何Apple Maps链接都会自动在Google Maps中打开，准备导航。",
        
        // How it works
        howitworks_title: "如何工作？",
        step1_text: "接收Apple Maps链接",
        step2_text: "与MapsLink分享或直接打开",
        step3_text: "完成！将自动在Google Maps中打开",
        
        // Download Section
        download_title: "下载应用",
        download_subtitle: "在Google Play商店为所有Android设备提供",
        download_compatibility: "兼容Android 6.0及更高版本",
        
        // Footer
        footer_links: "链接",
        footer_social: "关注我们",
        footer_copyright: "© 2023 MapsLink Converter. 版权所有。"
    }
};