document.addEventListener("DOMContentLoaded", function() {

    // 1. MENU MOBILE
    function toggleMenu() {
        let nav = document.querySelector('.cabecalho nav');
        if (nav) {
            nav.classList.toggle('aberto');
        }
    }
    // Torna a função acessível no HTML (onclick="toggleMenu()")
    window.toggleMenu = toggleMenu;

    // 2. CONTROLE DOS BOTÕES DE GÊNERO (Homem/Mulher/Indiferente)
    let botoesGenero = document.querySelectorAll('.opcao-btn');
    botoesGenero.forEach(function(btn) {
        btn.addEventListener('click', function() {
            // Remove a marca de todos os botões de gênero
            botoesGenero.forEach(b => b.classList.remove('selecionado'));
            // Marca apenas o que foi clicado
            this.classList.add('selecionado');
        });
    });

    // 3. CONTROLE DOS BOTÕES DE HORÁRIO
    let botoesHorario = document.querySelectorAll('.horario-btn');
    botoesHorario.forEach(function(btn) {
        btn.addEventListener('click', function() {
            // Remove a marca de todos os botões de horário
            botoesHorario.forEach(b => b.classList.remove('selecionado'));
            // Marca apenas o que foi clicado
            this.classList.add('selecionado');
        });
    });

});

// 4. FUNÇÃO DO WHATSAPP (Chamada pelo HTML: onclick="enviarWhatsApp('Cardiologia')")
function enviarWhatsApp(servico) {
    let genero = "Sem preferência";
    let btnGeneroAtivo = document.querySelector('.opcao-btn.selecionado');
    if (btnGeneroAtivo) {
        genero = btnGeneroAtivo.getAttribute('data-valor');
    }
    
    let horario = "Não selecionado";
    let btnHorarioAtivo = document.querySelector('.horario-btn.selecionado');
    if (btnHorarioAtivo) {
        horario = btnHorarioAtivo.textContent;
    }

    let mensagem = "Olá! Gostaria de marcar uma consulta de *" + servico + "*.\nHorário: *" + horario + "*\nPreferência de médico: *" + genero + "*.";
    mensagem = encodeURIComponent(mensagem);
    
    window.open("https://wa.me/258879450000?text=" + mensagem, '_blank');
}

// 5. FUNÇÃO DÚVIDAS (Chamada pelo HTML: onclick="tirarDuvidas()")
function tirarDuvidas() {
    let mensagem = "Olá! Tenho uma dúvida sobre um serviço da Vitalmed.";
    mensagem = encodeURIComponent(mensagem);
    window.open("https://wa.me/258879450000?text=" + mensagem, '_blank');
        }
