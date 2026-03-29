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

function toggleMenu() {
    document.querySelector('.cabecalho nav').classList.toggle('aberto');
}

document.addEventListener('DOMContentLoaded', function() {
    iniciarIdioma();
    
    // Lógica de seleção de Gênero
    document.querySelectorAll('.opcao-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.opcao-btn').forEach(b => b.classList.remove('selecionado'));
            this.classList.add('selecionado');
        });
    });

    // Lógica de seleção de Horário
    document.querySelectorAll('.horario-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.horario-btn').forEach(b => b.classList.remove('selecionado'));
            this.classList.add('selecionado');
        });
    });
});

// Função chamada ao clicar em "Confirmar pelo WhatsApp"
function enviarWhatsApp(servico) {
    let genero = "Sem preferência";
    let generoEl = document.querySelector('.opcao-btn.selecionado');
    if (generoEl) genero = generoEl.getAttribute('data-valor');

    let horario = "Não selecionado";
    let horarioEl = document.querySelector('.horario-btn.selecionado');
    if (horarioEl) horario = horarioEl.textContent;

    let msgPt = `Olá! Gostaria de marcar uma consulta de *${servico}*.\nHorário: *${horario}*\nPreferência de médico: *${genero}*.`;
    let msgEn = `Hello! I would like to book a *${servico}* appointment.\nTime: *${horario}*\nDoctor preference: *${genero}*.`;
    
    let msg = idioma === 'pt' ? msgPt : msgEn;
    // Codifica a mensagem para URL
    msg = encodeURIComponent(msg);
    
    window.open(`https://wa.me/258879450000?text=${msg}`, '_blank');
}

// Função para o botão de Dúvidas
function tirarDuvidas() {
    let msgPt = "Olá! Tenho uma dúvida sobre um serviço da Vitalmed.";
    let msgEn = "Hello! I have a question about a Vitalmed service.";
    let msg = encodeURIComponent(idioma === 'pt' ? msgPt : msgEn);
    window.open(`https://wa.me/258879450000?text=${msg}`, '_blank');
                          }
