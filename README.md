# 🌙 Proposta de Consultoria de Sono Infantil - Rayani

Landing page profissional para apresentação da consultoria de sono infantil com Rayani.

## 📋 Conteúdo

```
proposta-rayani/
├── index.html           # Página HTML principal
├── style.css            # Estilos CSS (design responsivo)
├── script.js            # JavaScript (interatividade)
├── rayani-photo.jpg     # Foto da Rayani (inserir)
├── README.md            # Este arquivo
└── .gitignore           # Arquivos a ignorar no Git
```

## 🎯 Características

✨ **Design Acolhedor**
- Cores calmas e profissionais (azul, verde, coral)
- Tipografia moderna e legível
- Bastante espaço em branco para conforto visual
- Transições suaves e animações

📱 **Totalmente Responsivo**
- Otimizado para mobile, tablet e desktop
- Testes em múltiplos tamanhos de tela
- Navegação intuitiva

🚀 **Alta Conversão**
- Copy persuasivo baseado em frameworks comprovados
- Multiple CTAs estrategicamente posicionados
- Urgência real (descontos com datas legítimas)
- FAQ completo com objection handling

⚡ **Performance**
- Código limpo e otimizado
- Lazy loading de imagens
- Animações suaves (GPU-accelerated)
- Carregamento rápido

## 🔧 Como Usar

### 1. Preparar Arquivo de Imagem
```bash
# Coloque a foto da Rayani em:
# proposta-rayani/rayani-photo.jpg

# Certifique-se de que a imagem:
# - Tem formato JPG ou PNG
# - Tem tamanho otimizado (max 500KB)
# - Tem proporção 1:1 ou similar
```

### 2. Configurar Link WhatsApp
Edite `script.js` na linha ~116 e altere:

```javascript
const phoneNumber = '5511999999999'; // Coloque aqui o número com código país + DDD + número
```

### 3. Visualizar Localmente
```bash
# Opção 1: Usar Python (se instalado)
python3 -m http.server 8000

# Opção 2: Usar Node.js
npx http-server

# Acesse em seu navegador:
# http://localhost:8000
```

### 4. Deploy

#### Opção A: GitHub Pages (Recomendado)
```bash
git init
git add .
git commit -m "Proposta Rayani - Consultoria Sono"
git branch -M main
git remote add origin https://github.com/SEU_USER/proposta-rayani.git
git push -u origin main

# Ativar em Settings > Pages
```

#### Opção B: Vercel
```bash
npm i -g vercel
vercel
```

#### Opção C: Netlify
Drague e solte a pasta no dashboard

## 📊 Seções Principais

1. **Hero** - Headline + foto + CTAs
2. **Agitate** - Pinta a dor com empatia
3. **Transformação** - Mostra benefícios
4. **Por Que Rayani** - Diferencial
5. **Planos** - 2 opções com preços
6. **Urgência** - Timeline de descontos
7. **FAQ** - Dúvidas + respostas
8. **Final CTA** - Reafirmação + ação

## 🎨 Customização Rápida

**Editar preços:** `index.html` - procure por "R$"
**Editar cores:** `style.css` - busque `:root`
**Editar textos:** `index.html` - qualquer seção
**Editar WhatsApp:** `script.js` - linha 116

## 📱 Testes

- Desktop, Tablet, Mobile
- Chrome, Firefox, Safari
- Lighthouse Performance
- Responsividade

## 🚀 Próximos Passos

1. ✅ Copiar foto Rayani para pasta
2. ✅ Configurar número WhatsApp
3. ✅ Testar em navegador
4. ✅ Deploy no GitHub Pages
5. ✅ Compartilhar link com Patrícia

---

🌙 **Durma bem!** 🌙
