/* ==========================================
   INJETOR AUTOMÁTICO DO HEADER (MÁQUINA DO DRY)
   Evita ter de editar 22 ficheiros HTML à mão.
   ========================================== */

function injetarLogoAutomatico() {
    // Procura pela imagem antiga da logo no cabeçalho
    const imagemAntiga = document.querySelector('.cabecalho img.logo');
    
    // Se encontrar a imagem (ou seja, nas páginas de serviço que ainda têm a imagem)
    if (imagemAntiga) {
        // 1. Cria uma "caixa" para agrupar a logo e o slogan
        const containerLogo = document.createElement('div');

        // 2. Cria o link com o texto da logo
        const linkTexto = document.createElement('a');
        linkTexto.href = 'index.html';
        linkTexto.className = 'logo-texto';
        linkTexto.innerHTML = 'Vitalmed<span>Clinic</span>';

        // 3. Cria o slogan
        const slogan = document.createElement('p');
        slogan.className = 'slogan-topo';
        slogan.setAttribute('data-pt', 'O parceiro ideal para uma vida saudável');
        slogan.setAttribute('data-en', 'The ideal partner for a healthy life');
        slogan.textContent = 'O parceiro ideal para uma vida saudável';

        // 4. Mete a logo e o slogan dentro da caixa
        containerLogo.appendChild(linkTexto);
        containerLogo.appendChild(slogan);

        // 5. A MÁGICA: Substitui a imagem antiga pelo nosso novo texto
        imagemAntiga.parentNode.replaceChild(containerLogo, imagemAntiga);

        // 6. Força o JS a aplicar o idioma correto (PT/EN) ao novo slogan que acabou de nascer
        aplicarIdioma(localStorage.getItem('vitalmed_idioma') || 'pt');
    }
}

// Executa assim que a página abrir
document.addEventListener('DOMContentLoaded', injetarLogoAutomatico);
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
