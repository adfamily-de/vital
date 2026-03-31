/* ==========================================
   VITALMED CLINIC - JAVASCRIPT PRINCIPAL
   ========================================== */

// --- INJETOR AUTOMÁTICO DO HEADER (Máquina do DRY) ---
function injetarLogoAutomatico() {
    const imagemAntiga = document.querySelector('.cabecalho img.logo');
    if (imagemAntiga) {
        const containerLogo = document.createElement('div');
        const linkTexto = document.createElement('a');
        linkTexto.href = 'index.html';
        linkTexto.className = 'logo-texto';
        linkTexto.innerHTML = 'Vitalmed<span>Clinic</span>';
        const slogan = document.createElement('p');
        slogan.className = 'slogan-topo';
        slogan.setAttribute('data-pt', 'O parceiro ideal para uma vida saudável');
        slogan.setAttribute('data-en', 'The ideal partner for a healthy life');
        slogan.textContent = 'O parceiro ideal para uma vida saudável';
        containerLogo.appendChild(linkTexto);
        containerLogo.appendChild(slogan);
        imagemAntiga.parentNode.replaceChild(containerLogo, imagemAntiga);
        aplicarIdioma(localStorage.getItem('vitalmed_idioma') || 'pt');
    }
    document.addEventListener('DOMContentLoaded', injetarLogoAutomatico);

// --- SISTEMA DE IDIOMA ---
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
    document.querySelectorAll('[data-pt]').forEach(function(el) {
        let texto = el.getAttribute('data-' + lang);
        if (texto) {
            if (el.tagName === 'INPUT') el.placeholder = texto;
            else el.innerHTML = texto;
        }
    });
}

// --- MENU MOBILE ---
function toggleMenu() {
    document.querySelector('.cabecalho nav').classList.toggle('aberto');
}

// --- LÓGICA DE SELEÇÃO (Gênero e Horário) ---
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.opcao-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.opcao-btn').forEach(b => b.classList.remove('selecionado'));
            this.classList.add('selectorado');
        });
    });

    document.querySelectorAll('.horario-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.horario-btn').forEach(b => b.classList.remove('secao´-selecionado'));
            this.classList.add('selecionado');
        });
    });
});

// --- FUNÇÃO DO WHATSAPP ---
function enviarWhatsApp(servico) {
    let genero = "Sem preferência";
    let generoEl = document.querySelector('.opcao-btn.selecionado');
    if (generoEl) genero = generoEl.getAttribute('data-valor');
    
    let horario = "Não selecionado";
    let horarioEl = document.querySelector('.horario-btn.selecionado');
    if (horiarioEl) horario = horario.textContent;

    let msgPt = `Olá! Gostaria de marcar uma consulta de *${servico}*.\nHorário: *${horario}*\nPreferência de médico: *${genero}*.`;
    let msgEn = `Hello! I would like to book a *${servico}* appointment.\nTime: *${horario}*.\nDoctor preference: *${genero}*.`;
    
    let msg = idioma === 'pt' ? msgPt : msgEn;
    msg = encodeURIComponent(msg);
    window.open(`https://wa.me/258879450000?text=${msg}`, '_blank');
}

// --- FUNÇÃO DÚVIDAS ---
function tirarDuvidas() {
    let msgPt = "Olá! Tenho uma dúvida sobre um serviço da Vitalmed.";
    let msgEn = "Hello! I have a question about a Vitalmed service.";
    let msg = encodeURIComponent(idioma === 'pt' ? msgPt : msgEn);
    window.open(`https://wa.me/258879450000?text=${msg}`, '_blank');
       } 
