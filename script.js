// ============================================
// V CONSELHO HOSPITALAR 2026 - JAVASCRIPT
// ============================================

// Menu Mobile
var mobileMenuBtn = document.getElementById('mobileMenuBtn');
var navList = document.getElementById('navList');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
        navList.classList.toggle('active');
    });
}

document.querySelectorAll('.nav-list a').forEach(function(link) {
    link.addEventListener('click', function() {
        navList.classList.remove('active');
    });
});

// ============================================
// ANIMAÇÕES DE SCROLL
// ============================================
var observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-up, .fade-left, .fade-right').forEach(function(el) {
    observer.observe(el);
});

console.log('🏥 V Conselho Hospitalar 2026 - Site carregado com sucesso!');
console.log('📅 29 a 31 de Julho de 2026 - Província de Maputo');
console.log('📌 "Melhorar a Qualidade Assistencial nos Serviços de Saúde"');