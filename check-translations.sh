#!/bin/bash

echo "=== Estado de Traducciones A2GMC ==="
echo ""

LANGUAGES=("es" "en" "hi" "ja" "sw" "de" "fr" "it" "id" "ru" "ur" "pt" "bn" "ar" "tr" "zh")

for lang in "${LANGUAGES[@]}"; do
    file="js/translations/${lang}.js"
    if [ -f "$file" ]; then
        lines=$(wc -l < "$file")
        has_tutorial=$(grep -q "tutorial_setup_title" "$file" && echo "✅" || echo "❌")
        has_privacy=$(grep -q "privacy_title" "$file" && echo "✅" || echo "❌")
        has_faq=$(grep -q "faq_title" "$file" && echo "✅" || echo "❌")
        
        if [ $lines -gt 100 ] && [ "$has_tutorial" = "✅" ] && [ "$has_privacy" = "✅" ] && [ "$has_faq" = "✅" ]; then
            status="✅ COMPLETO"
        elif [ $lines -gt 50 ]; then
            status="🔄 BÁSICO"
        else
            status="⚠️  INCOMPLETO"
        fi
        
        echo "$lang: $status ($lines líneas) - Tutorial:$has_tutorial Privacy:$has_privacy FAQ:$has_faq"
    else
        echo "$lang: ❌ NO EXISTE"
    fi
done

echo ""
echo "Leyenda:"
echo "✅ COMPLETO  - Más de 100 líneas con tutorial, privacy y FAQ completos"
echo "🔄 BÁSICO    - Más de 50 líneas pero faltan secciones"
echo "⚠️  INCOMPLETO - Menos de 50 líneas"
echo "❌ Tutorial/Privacy/FAQ - Sección faltante"