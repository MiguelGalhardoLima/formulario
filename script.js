let nome = document.getElementById("nome");
let email = document.getElementById("email");
let mensagem = document.getElementById("mensagem");
let enviarBtn = document.getElementById("enviar"); // Renomeado para evitar conflito com a função enviar

let ErroNome = document.getElementById("ErroNome");
ErroNome.style.display = "none";

let ErroEmail = document.getElementById("ErroEmail");
ErroEmail.style.display = "none";

let Ncharacter = document.getElementById("Ncharacter");

Ncharacter.innerText = "0/200 caracteres";

// Função para validar email
function validEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// NOME
function NomeFocado() {
    console.log("focou");
    if (nome.style.borderColor !== '#007BFF') {
        nome.style.borderColor = '#007BFF';
    }
    if (ErroNome.style.display === "flex") {
        ErroNome.style.display = "none";
    }
}

function NomenaoFocado() {
    console.log("não focou");
    if (nome.style.borderColor === '#007BFF') {
        nome.style.borderColor = 'RED';
    }
    if (nome.value === "") {
        ErroNome.style.display = "flex";
        ErroNome.innerText = "* Por favor colocar um nome";
        ErroNome.style.fontWeight = "400";
        ErroNome.style.color = "RED";
    } else {
        ErroNome.style.display = "none";
        nome.style.borderColor = "rgba(0,0,0,66%)";
    }
}

// EMAIL
function EmailFocado() {
    console.log("focou");
    if (email.style.borderColor !== '#007BFF') {
        email.style.borderColor = '#007BFF';
    }
    if (ErroEmail.style.display === "flex") {
        ErroEmail.style.display = "none";
    }
}

function EmailNaoFocado() {
    if (email.style.borderColor === "#007bff") {
        email.style.borderColor = "RED";
    }
    console.log("num tanão");
    if (email.value === "") {
        ErroEmail.style.display = "flex";
        ErroEmail.innerText = "* Por favor colocar um e-mail";
        ErroEmail.style.fontWeight = "400";
        ErroEmail.style.color = "RED";
    } else if (!validEmail(email.value)) {
        ErroEmail.style.display = "flex";
        ErroEmail.innerText = "* Por favor colocar um e-mail válido";
        ErroEmail.style.fontWeight = "400";
        ErroEmail.style.color = "RED";
    } else {
        ErroEmail.style.display = "none";
        email.style.borderColor = "rgba(0,0,0,66%)";
    }
}

// MENSAGEM
function MensagemFocada() {
    console.log("focou Mensagem");
    if (mensagem.style.borderColor !== "#007bFf") {
        mensagem.style.borderColor = "#007bFf";
    }
}

function MensagemNaoFocada() {
    console.log("Focounão chefe");
    if (mensagem.value.length === 250) {
        mensagem.style.borderColor = "RED";
    }
}

// Atualiza a contagem de caracteres em tempo real
mensagem.addEventListener('input', function() {
    Ncharacter.innerText = `${mensagem.value.length}/200 caracteres`;
    if (mensagem.value.length > 200) {
        console.log('chegou em 200');
        Ncharacter.style.color = "RED";
    }else{
        Ncharacter.style.color = "rgba(0,0,0,66%)";
    }

    if(mensagem.value.length > 250 || mensagem.value.length === 250){
        Ncharacter.innerText =`250+ caracteres`
    }
});


// Enviar
function enviar() {
    // Verifica se todos os campos estão preenchidos e válidos
    const nomeValido = nome.value !== "";
    const emailValido = validEmail(email.value);
    const mensagemValida = mensagem.value.length > 0 && mensagem.value.length <= 200;

    if (nomeValido && emailValido && mensagemValida) {
        alert("Mensagem enviada com sucesso!");
        console.log("Mensagem enviada com sucesso:")
        // Aqui você pode adicionar a lógica para enviar os dados, se necessário
    } else {
        alert("Erro no envio")
        if (!nomeValido) {
            NomenaoFocado(); // Chama a validação de nome se não for válido
        }
        if (!emailValido) {
            EmailNaoFocado(); // Chama a validação de email se não for válido
        }
        if (!mensagemValida) {
            MensagemNaoFocada(); // Chama a validação de mensagem se não for válida
        }
    }
}

// Adiciona evento ao botão de enviar
enviarBtn.addEventListener("click", enviar);
