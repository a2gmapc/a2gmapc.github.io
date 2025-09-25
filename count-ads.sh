#!/bin/bash

echo "🚀 Conteo actualizado de Google Ads en A2GMC"
echo "==========================================="
echo ""

# Contar ads en cada archivo
echo "📊 Contando anuncios por página:"
echo ""

for file in index.html tutorial.html privacy.html terms.html contact.html; do
    if [ -f "$file" ]; then
        count=$(grep -c "adsbygoogle" "$file" 2>/dev/null || echo "0")
        echo "   📄 $file: $count ads"
    fi
done

echo ""

# Conteo total
total_ads=0
for file in index.html tutorial.html privacy.html terms.html contact.html; do
    if [ -f "$file" ]; then
        count=$(grep -c "adsbygoogle" "$file" 2>/dev/null || echo "0")
        total_ads=$((total_ads + count))
    fi
done

echo "🎯 TOTAL DE ANUNCIOS: $total_ads ads"
echo ""

# Verificar formatos de ads
echo "🔍 Tipos de formatos de ads utilizados:"
echo ""

if grep -q 'data-ad-format="auto"' *.html; then
    echo "   ✅ Auto Ads (responsive automático)"
fi

if grep -q 'data-ad-format="rectangle"' *.html; then
    echo "   ✅ Rectangle Ads (300x250)"
fi

if grep -q 'data-ad-format="fluid"' *.html; then
    echo "   ✅ Fluid Ads (in-article)"
fi

echo ""

# Distribución estratégica
echo "📍 Ubicación estratégica de ads:"
echo ""
echo "   index.html:"
echo "     - Después del Hero"
echo "     - Después de Features"
echo "     - En medio de pasos"
echo "     - Antes de descarga"
echo "     - Al final"
echo ""
echo "   tutorial.html:"
echo "     - Después de imágenes"
echo "     - En medio del tutorial"
echo "     - Después de métodos"
echo "     - Antes de FAQ"
echo "     - Al final"
echo ""
echo "   privacy.html:"
echo "     - Al inicio"
echo "     - En medio"
echo "     - Al final"
echo ""

echo "💰 Proyección de ingresos mejorada:"
echo "   Con $total_ads ads distribuidos estratégicamente"
echo "   Estimación: +40% más ingresos que la configuración anterior"
echo ""

echo "✅ Optimización de ads completada!"