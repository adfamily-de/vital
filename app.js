// --- SISTEMA DE IDIOMA (PT / EN) ---
let idioma = localStorage.getItem('vitalmed_idioma') || 'pt';

function iniciarIdioma() {
    aplicarIdioma(idioma);
    document.getElementById('btn-idioma').textContent = idioma === 'pt' ? 'EN' : 'PT';
}

function trocarIdioma() {
    idioma = idioma === 'pt' ? 'en' : 'pt';
    localStorage.setItem('vitalmed_idioma', idioma);
    document.getElementById('btn-idioma').textContent = idioma === 'pt' ? 'EN' : 'PT';
    aplicarIdioma(idioma);
}

function aplicarIdioma(lang) {
    // Busca todos os elementos que têm os atributos data-pt e data-en
    document.querySelectorAll('[data-pt]').forEach(function(el) {
        let texto = el.getAttribute('data-' + lang);
        if (texto) {
            if (el.tagName === 'INPUT') {
                el.placeholder = texto; // Se for um campo de formulário
            } else {
                el.innerHTML = texto;   // Se for texto normal
            }
        }
    });
}

// Inicia quando a página carrega
document.addEventListener('DOMContentLoaded', iniciarIdioma);


// --- MENU MOBILE ---
function toggleMenu() {
    document.querySelector('.cabecalho nav').classList.toggle('aberto');
                }
