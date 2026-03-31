/* document.addEventListener("DOMContentLoaded", function() {
    // 1. Verificar se NÃO estamos na página principal
    const isIndex = window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/');

    // 2. Se for qualquer outra página (os teus 20 serviços), ativa o "MATA-MATA"
    if (!isIndex) {
        
        // Ele procura a primeira secção da página (que é onde colocaste a imagem)
        // Se usares a classe 'secao-fundo', ele usa essa. Se não achar, apanha a primeira <section> do HTML.
        const areaDoCabecalho = document.querySelector('.secao-fundo') || document.querySelector('section');

        if (areaDoCabecalho) {
            // ANULAÇÃO TOTAL: O innerHTML limpa absolutamente TUDO o que está lá dentro.
            // Qualquer <img>, <h1>, <div> que tenha posto lá, some da existência.
            areaDoCabecalho.innerHTML = `
                <div class="conteudo-secao centralizado">
                    <h1 data-pt="Agende a sua consulta ou exame online" data-en="Book your consultation or exam online">Agende a sua consulta ou exame online</h1>
                    <p data-pt="Estamos online! Em que podemos te ajudar?" data-en="We are online! How can we help you?">Estamos online! Em que podemos te ajudar?</p>
                    <br>
                    <a href="index.html#servicos" class="hero-btn" data-pt="AGENDAR AGORA" data-en="BOOK NOW">AGENDAR AGORA</a>
                </div>
            `;
            
            // Força o fundo e o tamanho para ficarem idênticos à página principal
            areaDoCabecalho.style.backgroundImage = "url('banner-inicio.jpg')";
            areaDoCabecalho.style.minHeight = "75vh";
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
