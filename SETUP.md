# 🚀 Guia de Setup - Proposta Rayani

## ✅ Arquivos Criados

```
proposta-rayani/
├── ✅ index.html           - Página HTML completa com 8 seções
├── ✅ style.css            - Design acolhedor + responsivo
├── ✅ script.js            - Interatividade (FAQ, animações)
├── ✅ copy-proposta-rayani.md - Copy original para referência
├── ✅ README.md            - Instruções completas
├── ✅ .gitignore           - Para Git
└── 📁 (pasta vazia) para suas imagens
```

## 🔧 ANTES DE USAR: 3 Passos Rápidos

### 1️⃣ Adicionar Foto da Rayani

Coloque a foto que você enviou em:
```
/Users/vitormaria/Desktop/proposta-rayani/rayani-photo.jpg
```

**Requisitos:**
- Formato: JPG ou PNG
- Tamanho: Máx 500KB (comprimir se necessário)
- Dimensões: Quadrada (1:1) funciona melhor

**Como comprimir foto (Mac):**
```bash
# Abrir Preview > Image > Adjust Size
# Mudar para ~600px x 600px
# Exportar como JPEG qualidade 85%
```

### 2️⃣ Configurar Link WhatsApp

Abra `script.js` e procure por (linha ~116):

```javascript
const phoneNumber = '5511999999999'; // MUDE PARA SEU NÚMERO
```

**Formato correto:**
- Código país: 55 (Brasil)
- DDD: 11 (São Paulo) ou seu estado
- Número: 9 + 8 dígitos
- Exemplo: `'5511987654321'`

**Encontrar seu número:**
```javascript
// ANTES (errado):
const phoneNumber = '5511999999999';

// DEPOIS (correto):
const phoneNumber = '5511987654321';
```

### 3️⃣ Testar Localmente

**Opção 1: Python (recomendado)**
```bash
cd /Users/vitormaria/Desktop/proposta-rayani
python3 -m http.server 8000

# Abrir navegador:
# http://localhost:8000
```

**Opção 2: Node.js**
```bash
cd /Users/vitormaria/Desktop/proposta-rayani
npx http-server

# Navegador: http://localhost:8000
```

**Opção 3: Live Server (VS Code)**
- Instale extensão "Live Server"
- Clique botão direito em `index.html`
- "Open with Live Server"

## ✨ Testar a Página

### Checklist Visual
- [ ] Foto Rayani aparece no hero?
- [ ] Cores são acolhedoras (azul + verde + coral)?
- [ ] Títulos estão legíveis?
- [ ] Botões estão clicáveis?
- [ ] FAQ expande ao clicar?
- [ ] Preços aparecem corretos?

### Checklist Mobile
- [ ] Abra em iPhone (ou device simulado)
- [ ] Menu não quebra?
- [ ] Imagem aparece?
- [ ] Botões são grandes o bastante?
- [ ] Texto é legível (não muito pequeno)?

### Checklist de Funcionalidade
- [ ] Clique "Ver Planos" → Rola até seção de planos?
- [ ] Clique "Falar com Rayani" → Abre WhatsApp?
- [ ] Clique em FAQ → Expande/collapsa?
- [ ] Scroll anima elementos?

## 🌐 Deploy (Compartilhar com Patrícia)

### Opção 1: GitHub Pages (RECOMENDADO - Gratuito)

```bash
# 1. Entrar na pasta
cd /Users/vitormaria/Desktop/proposta-rayani

# 2. Inicializar Git
git init
git add .
git commit -m "Proposta Rayani - Consultoria Sono Infantil"

# 3. Criar repositório no GitHub
# - Ir em https://github.com/new
# - Nome: proposta-rayani
# - Descrição: Landing page consultoria sono
# - Público
# - Criar repositório

# 4. Conectar e fazer push
git branch -M main
git remote add origin https://github.com/SEU_USER/proposta-rayani.git
git push -u origin main

# 5. Ativar GitHub Pages
# - Ir em Settings > Pages
# - Source: Deploy from a branch
# - Branch: main
# - Pasta: / (root)
# - Save

# 6. Sua página fica em:
# https://seu_user.github.io/proposta-rayani/
```

### Opção 2: Vercel (Muito Fácil)

```bash
# 1. Instalar Vercel
npm i -g vercel

# 2. Deploy
cd /Users/vitormaria/Desktop/proposta-rayani
vercel

# 3. Seguir instruções na tela
# 4. Receber URL público (ex: proposta-rayani.vercel.app)
```

### Opção 3: Netlify (Drag & Drop)

```
1. Ir em https://app.netlify.com
2. Fazer login com GitHub/Google
3. Clicar "Add new site" > "Deploy manually"
4. Arrastar pasta proposta-rayani
5. Pronto! Site gerado automaticamente
```

## 📱 Compartilhar com Patrícia

Depois de fazer deploy, envie para Patrícia:

```
Oi Patrícia!

Preparei uma apresentação completa da consultoria de sono.
Confira aqui: https://seu_site.com/proposta-rayani/

Detalhes importantes:
- Hoje (15/04): 50% de desconto + 12x sem juros
- Amanhã (16/04): 25% de desconto apenas
- A partir de 17/04: sem desconto

Qualquer dúvida, estou aqui! 

Abraços,
Rayani 🌙
```

## 🎨 Customizações Extras

### Mudar Cores
Edite `style.css`:
```css
:root {
    --primary-blue: #4A90E2;        /* Azul principal */
    --accent-green: #5DD9C1;        /* Verde destaque */
    --warm-coral: #F79856;          /* Coral urgência */
}
```

### Mudar Tipografia
Edite `index.html` na linha de fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=OUTRA_FONTE:wght@300;400;600;700&display=swap" rel="stylesheet">
```

### Adicionar Mais Seções
Copie/paste de uma seção existente em `index.html`

## ⚠️ Problemas Comuns

**P: Foto não aparece**
- R: Certifique-se que `rayani-photo.jpg` está na pasta raiz
- Verifique se nome do arquivo está EXATO

**P: FAQ não funciona**
- R: Abra console (F12) e veja se há erros
- Certifique-se que `script.js` foi carregado

**P: WhatsApp link não funciona**
- R: Teste em navegador mobile
- Verifique formato do número (5511987654321)

**P: Página lenta**
- R: Comprima imagem (<500KB)
- Teste em Lighthouse (DevTools > Lighthouse)

## 📊 Métricas a Acompanhar

Após deploy, monitore:
- **Visitantes totais**
- **Cliques em "Ver Planos"**
- **Cliques em "Falar com Rayani"**
- **Tempo médio na página**
- **Taxa de bounce**

Adicione Google Analytics para rastreamento completo.

## 🎯 Próximas Ações

1. ✅ Copiar foto para pasta
2. ✅ Configurar número WhatsApp
3. ✅ Testar localmente (http://localhost:8000)
4. ✅ Deploy no GitHub/Vercel/Netlify
5. ✅ Enviar link para Patrícia
6. ⏰ Acompanhar cliques/conversões

## 💡 Dicas Finais

- **Revisar tudo antes de enviar** - especialmente preços e datas
- **Testar em mobile** - maioria acessa por celular
- **Usar analytics** - entender o comportamento de Patrícia
- **Ser rápido** - tempo é urgência real aqui

---

**Pronto?** Bora fazer deploy! 🚀

Dúvidas? Revise README.md ou SETUP.md novamente.

🌙 **Durma bem!** 🌙
