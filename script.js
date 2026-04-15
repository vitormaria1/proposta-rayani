// ===========================
// FAQ INTERATIVIDADE
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', function() {
            // Fechar outros FAQs abertos
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle FAQ atual
            item.classList.toggle('active');
        });
    });

    // ===========================
    // SMOOTH SCROLL PARA LINKS
    // ===========================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===========================
    // LAZY LOAD DE IMAGENS
    // ===========================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // ===========================
    // ANIMAÇÃO AO SCROLL (fade-in)
    // ===========================
    if ('IntersectionObserver' in window) {
        const elementObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    elementObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Aplicar observer a elementos que devem animar
        document.querySelectorAll('.pain-point, .benefit-card, .plan-card, .urgency-card').forEach(el => {
            elementObserver.observe(el);
        });
    }

    // ===========================
    // CONTADOR DE ECONOMIA
    // ===========================
    function animateCounter(element, start, end, duration = 2000) {
        const startTime = Date.now();
        const range = end - start;

        const timer = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const value = Math.floor(start + range * progress);

            element.textContent = `R$ ${value.toLocaleString('pt-BR')}`;

            if (progress === 1) {
                clearInterval(timer);
            }
        }, 16); // ~60fps
    }

    // Animar valores quando entram em view
    if ('IntersectionObserver' in window) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counterElements = entry.target.querySelectorAll('.savings-price');
                    counterElements.forEach(el => {
                        const text = el.textContent;
                        const match = text.match(/(\d+)/);
                        if (match) {
                            const endValue = parseInt(match[1]);
                            animateCounter(el, 0, endValue);
                        }
                    });
                    counterObserver.unobserve(entry.target);
                }
            });
        });

        document.querySelectorAll('.urgency-grid').forEach(el => {
            counterObserver.observe(el);
        });
    }

    // ===========================
    // NAVBAR STICKY SHADOW
    // ===========================
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.08)';
        }
    });

    // ===========================
    // WHATSAPP LINK DYNAMIC
    // ===========================
    const whatsappLinks = document.querySelectorAll('a[href^="https://wa.me"]');
    const phoneNumber = '5548999896879'; // Número Rayani
    const message = 'Olá Rayani! Gostaria de saber mais sobre a consultoria de sono infantil.';
    const encodedMessage = encodeURIComponent(message);

    whatsappLinks.forEach(link => {
        link.href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    });

    // ===========================
    // TRACKING DE EVENTOS (Google Analytics / similar)
    // ===========================
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.textContent;
            // Aqui você pode adicionar rastreamento de eventos
            console.log('Clique em CTA:', action);
        });
    });

    // ===========================
    // MODAL/POPUP (Opcional - comentado)
    // ===========================
    // Descomente se quiser adicionar modal de aviso de urgência
    /*
    function showUrgencyModal() {
        const modal = document.createElement('div');
        modal.className = 'urgency-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <button class="modal-close">&times;</button>
                <h3>⏰ Oferta de 50% termina hoje!</h3>
                <p>Amanhã o desconto cai para 25%</p>
                <a href="#planos" class="btn btn-primary">Ver Planos</a>
            </div>
        `;
        document.body.appendChild(modal);

        modal.querySelector('.modal-close').addEventListener('click', () => {
            modal.remove();
        });
    }

    // Mostrar modal após 10 segundos
    setTimeout(showUrgencyModal, 10000);
    */

    // ===========================
    // DETECÇÃO DE MODO ESCURO
    // ===========================
    function detectDarkMode() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add('dark-mode');
            // Você pode adicionar CSS variables para dark mode aqui
        }
    }
    // detectDarkMode(); // Descomente se quiser suporte a dark mode

    // ===========================
    // FORM TRACKING (se houver formulário)
    // ===========================
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            // Validação adicional, rastreamento, etc.
            console.log('Form enviado');
        });
    });
});

// ===========================
// FUNÇÃO PARA SCROLL TOP
// ===========================
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Mostrar botão scroll-to-top quando rolar a página
window.addEventListener('scroll', () => {
    const scrollTopBtn = document.getElementById('scroll-to-top');
    if (scrollTopBtn) {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    }
});

// ===========================
// VERIFICAÇÃO DE PERFORMANCE
// ===========================
if (window.performance) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('Tempo de carregamento:', pageLoadTime + 'ms');
    });
}

// ===========================
// SCROLL REVELAÇÃO INTELIGENTE
// ===========================
const revealElements = () => {
    const reveals = document.querySelectorAll('.pain-point, .benefit-card, .plan-card, .faq-item, .urgency-card');

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Inicializar estilos para revelação
document.querySelectorAll('.pain-point, .benefit-card, .plan-card, .faq-item, .urgency-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

// Evento de scroll
window.addEventListener('scroll', revealElements);
revealElements(); // Chamar uma vez no carregamento

// ===========================
// DEBUG MODE (desabilitar em produção)
// ===========================
const DEBUG = false;
if (DEBUG) {
    console.log('🔧 Página em modo DEBUG');
    console.log('📱 Viewport:', window.innerWidth, 'x', window.innerHeight);
    console.log('📊 Performance:', performance.timing);
}
