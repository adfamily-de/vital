// --- CABEÇALHO DINÂMICO (DRY) ---
document.addEventListener("DOMContentLoaded", function() {
    const isIndex = window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/');

    if (!isIndex) {
        const areaDoCabecalho = document.querySelector('.secao-fundo') || document.querySelector('section');

        if (areaDoCabecalho) {
            areaDoCabecalho.innerHTML = `
                <div class="conteudo-secao centralizado">
                    <h1 data-pt="Agende a sua consulta ou exame online" data-en="Book your consultation or exam online">Agende a sua consulta ou exame online</h1>
                    <p data-pt="Estamos online! Em que podemos te ajudar?" data-en="We are online! How can we help you?">Estamos online! Em que podemos te ajudar?</p>
                    <br>
                    <a href="index.html#servicos" class="hero-btn" data-pt="AGENDAR AGORA" data-en="BOOK NOW">AGENDAR AGORA</a>
                </div>
            `;
            
            areaDoCabecalho.style.backgroundImage = "url('banner-inicio.jpg')";
            areaDoCabecalho.style.minHeight = "75vh";
        }
    }
});

// --- MENU MOBILE ---
function toggleMenu() {
    document.querySelector('.cabecalho nav').classList.toggle('aberto');
}

// --- LÓGICA DE SELEÇÃO (Gênero e Horário) ---
document.addEventListener('DOMContentLoaded', function() {
    // Seleção do Gênero
    document.querySelectorAll('.opcao-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.opcao-btn').forEach(b => b.classList.remove('selecionado'));
            this.classList.add('selecionado'); // Corrigido: era 'selectorado'
        });
    });

    // Seleção do Horário
    document.querySelectorAll('.horario-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.horario-btn').forEach(b => b.classList.remove('selecionado')); // Corrigido: era 'secao´-selecionado'
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
    if (horarioEl) horario = horarioEl.textContent; // Corrigido: era 'horiarioEl'

    let msgPt = `Olá! Gostaria de marcar uma consulta de *${servico}*.\nHorário: *${horario}*\nPreferência de médico: *${genero}*.`;
    let msgEn = `Hello! I would like to book a *${servico}* appointment.\nTime: *${horario}.\nDoctor preference: *${genero}*.`;
    
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
