#!/bin/bash

# 🎯 Script para migrar de AdMob a AdSense
# A2GMC - Apple to Google Maps Converter

echo "🚀 Migración AdMob → AdSense para A2GMC"
echo "===================================="
echo ""

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Función para mostrar step
show_step() {
    echo -e "${BLUE}📋 $1${NC}"
    echo "----------------------------------------"
}

# Función para mostrar success
show_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

# Función para mostrar warning
show_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

# Función para mostrar error
show_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Verificar si se proporciona el nuevo Publisher ID
if [ -z "$1" ]; then
    show_error "Necesitas proporcionar tu nuevo Publisher ID de AdSense"
    echo ""
    echo "Uso: $0 ca-pub-XXXXXXXXXXXXXXXXX"
    echo ""
    echo "Pasos para obtener tu Publisher ID de AdSense:"
    echo "1. Ve a https://www.google.com/adsense"
    echo "2. Crea tu cuenta o inicia sesión"
    echo "3. Una vez aprobado, ve a Configuración → Información de la cuenta"
    echo "4. Copia tu Publisher ID (ca-pub-XXXXXXXXXXXXXXXXX)"
    echo ""
    exit 1
fi

NEW_PUBLISHER_ID="$1"
CURRENT_PUBLISHER_ID="ca-app-pub-9657415184487447"

# Validar formato del Publisher ID
if [[ ! $NEW_PUBLISHER_ID =~ ^ca-pub-[0-9]{16}$ ]]; then
    show_error "Formato de Publisher ID inválido"
    echo "Debe ser: ca-pub-XXXXXXXXXXXXXXXXX (16 números después de ca-pub-)"
    exit 1
fi

echo "🔄 Configuración de migración:"
echo "   Desde (AdMob): $CURRENT_PUBLISHER_ID"
echo "   Hacia (AdSense): $NEW_PUBLISHER_ID"

if [ "$CURRENT_PUBLISHER_ID" = "$NEW_PUBLISHER_ID" ]; then
    show_warning "ATENCIÓN: Estás usando el mismo Publisher ID"
    echo "   Esto es útil para testing, pero para AdSense necesitarás un ID diferente"
    echo "   ¿Continuar con la 'migración' de testing? (y/n)"
    read -r response
    if [[ ! $response =~ ^[Yy]$ ]]; then
        echo "Operación cancelada por el usuario"
        exit 0
    fi
fi
echo ""

# Paso 1: Backup de archivos actuales
show_step "Paso 1: Creando backup de configuración actual"

backup_dir="backup-admob-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$backup_dir"

cp index.html "$backup_dir/"
cp tutorial.html "$backup_dir/"
cp privacy.html "$backup_dir/"
cp terms.html "$backup_dir/" 2>/dev/null || echo "terms.html no encontrado para backup"
cp contact.html "$backup_dir/" 2>/dev/null || echo "contact.html no encontrado para backup"
cp js/google-ads-config.js "$backup_dir/"

show_success "Backup creado en directorio: $backup_dir"
echo ""

# Paso 2: Actualizar google-ads-config.js
show_step "Paso 2: Actualizando configuración JavaScript"

# Hacer backup del archivo
cp js/google-ads-config.js js/google-ads-config.js.backup

# Usar diferentes patrones para encontrar y reemplazar el Publisher ID
sed -i.temp "s/publisherId: \"$CURRENT_PUBLISHER_ID\"/publisherId: \"$NEW_PUBLISHER_ID\"/g" js/google-ads-config.js
sed -i.temp "s/publisherId: '$CURRENT_PUBLISHER_ID'/publisherId: '$NEW_PUBLISHER_ID'/g" js/google-ads-config.js

# Verificar si el cambio se realizó
if grep -q "$NEW_PUBLISHER_ID" js/google-ads-config.js; then
    show_success "google-ads-config.js actualizado"
    rm js/google-ads-config.js.temp 2>/dev/null
elif [ "$CURRENT_PUBLISHER_ID" = "$NEW_PUBLISHER_ID" ]; then
    show_warning "El Publisher ID es el mismo (no se requiere cambio en JS)"
else
    show_error "Error actualizando google-ads-config.js"
    echo "Publisher ID actual encontrado: $(grep -o 'publisherId: "[^"]*"' js/google-ads-config.js || echo 'No encontrado')"
    exit 1
fi
echo ""

# Paso 3: Actualizar archivos HTML
show_step "Paso 3: Actualizando archivos HTML"

html_files=("index.html" "tutorial.html" "privacy.html" "terms.html" "contact.html")

for file in "${html_files[@]}"; do
    if [ -f "$file" ]; then
        # Actualizar scripts de AdSense
        sed -i.backup "s/client=$CURRENT_PUBLISHER_ID/client=$NEW_PUBLISHER_ID/g" "$file"
        sed -i.backup "s/data-ad-client=\"$CURRENT_PUBLISHER_ID\"/data-ad-client=\"$NEW_PUBLISHER_ID\"/g" "$file"
        
        if grep -q "$NEW_PUBLISHER_ID" "$file"; then
            show_success "$file actualizado"
        else
            show_warning "$file no contenía referencias al Publisher ID"
        fi
    else
        show_warning "$file no encontrado"
    fi
done
echo ""

# Paso 4: Crear ads.txt actualizado
show_step "Paso 4: Actualizando archivo ads.txt"

# Extraer solo los números del Publisher ID
pub_id_numbers=$(echo "$NEW_PUBLISHER_ID" | sed 's/ca-pub-//')

cat > ads.txt << EOF
# ads.txt para A2GMC - Apple to Google Maps Converter
# Generado automáticamente: $(date)
# Migración de AdMob a AdSense

google.com, pub-$pub_id_numbers, DIRECT, f08c47fec0942fa0
EOF

show_success "ads.txt actualizado con nuevo Publisher ID"
echo ""

# Paso 5: Generar código de Auto Ads actualizado
show_step "Paso 5: Generando código de Auto Ads actualizado"

cat > auto-ads-code.html << EOF
<!-- Auto Ads de AdSense para A2GMC -->
<!-- Agregar en la sección <head> de cada página -->

<script>
     (adsbygoogle = window.adsbygoogle || []).push({
          google_ad_client: "$NEW_PUBLISHER_ID",
          enable_page_level_ads: true
     });
</script>
EOF

show_success "Código de Auto Ads actualizado en auto-ads-code.html"
echo ""

# Paso 6: Verificación final
show_step "Paso 6: Verificación de la migración"

echo "🔍 Verificando archivos actualizados..."

total_references=0
for file in "${html_files[@]}"; do
    if [ -f "$file" ]; then
        count=$(grep -c "$NEW_PUBLISHER_ID" "$file" 2>/dev/null || echo "0")
        echo "   $file: $count referencias"
        total_references=$((total_references + count))
    fi
done

js_count=$(grep -c "$NEW_PUBLISHER_ID" js/google-ads-config.js 2>/dev/null || echo "0")
echo "   google-ads-config.js: $js_count referencias"
total_references=$((total_references + js_count))

if [ $total_references -gt 0 ]; then
    show_success "Migración completada: $total_references referencias actualizadas"
else
    show_error "No se encontraron referencias actualizadas"
    exit 1
fi
echo ""

# Paso 7: Conteo de ads final
show_step "Paso 7: Conteo final de ads"

total_ads=0
for file in "${html_files[@]}"; do
    if [ -f "$file" ]; then
        count=$(grep -c "adsbygoogle" "$file" 2>/dev/null || echo "0")
        total_ads=$((total_ads + count))
    fi
done

echo "🎯 Total de ads configurados: $total_ads ads"
echo ""

# Paso 8: Próximos pasos
show_step "🎯 Próximos pasos"

echo "1. 📝 Sube tu sitio web actualizado a tu dominio"
echo "2. 🔗 Sube el archivo ads.txt a la raíz de tu dominio"
echo "3. ⏱️  Espera 24-48 horas para que ads.txt se propague"
echo "4. 🧪 Prueba que los ads se muestren correctamente"
echo "5. 📊 Monitorea métricas en AdSense Dashboard"
echo ""

show_step "📋 Archivos modificados"
echo "   ✅ js/google-ads-config.js"
for file in "${html_files[@]}"; do
    if [ -f "$file" ]; then
        echo "   ✅ $file"
    fi
done
echo "   ✅ ads.txt (actualizado)"
echo "   ✅ auto-ads-code.html (opcional)"
echo ""

show_step "🔧 Para probar localmente"
echo "   python3 -m http.server 8000"
echo "   Abre: http://localhost:8000"
echo ""

show_step "💰 Beneficios esperados con AdSense"
echo "   • CPM 2-3x mayor que AdMob"
echo "   • Mejor targeting para usuarios web"
echo "   • Auto Ads inteligentes"
echo "   • Analytics avanzados"
echo ""

show_step "⚠️  Importante"
echo "   • Los ads de AdSense pueden tardar hasta 24h en aparecer"
echo "   • En desarrollo local, los ads pueden no mostrarse"
echo "   • Revisa la consola del navegador para errores"
echo "   • No hagas click en tus propios ads"
echo ""

show_success "🎉 Migración de AdMob a AdSense completada!"
echo ""
echo "📞 Soporte:"
echo "   AdSense Help: https://support.google.com/adsense"
echo "   Documentación: ADSENSE-MIGRATION-GUIDE.md"
echo ""
echo "💡 Tip: Compara métricas antes y después de la migración"
echo "   para medir la mejora en ingresos."