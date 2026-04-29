document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("form");
    const usuarioInput = document.querySelector("input[type='text']");
    const senhaInput = document.querySelector("input[type='password']");

    let mensagem = document.createElement("div");
    mensagem.style.marginTop = "10px";
    mensagem.style.textAlign = "center";
    form.appendChild(mensagem);

    form.onsubmit = (e) => {
        e.preventDefault();

        let usuario = usuarioInput.value;
        let senha = senhaInput.value;

        mensagem.innerHTML = "";

        if (usuario === "" || senha === "") {
            mensagem.innerHTML = "<div style='color:red'>Preencha todos os campos!</div>";
            return;
        }

        let senhaSalva = localStorage.getItem(usuario);

        if (senhaSalva === null) {
            mensagem.innerHTML = "<div style='color:red'>Usuário não encontrado!</div>";
        } else if (senhaSalva === senha) {
            mensagem.innerHTML = "<div style='color:green'>Login realizado com sucesso!</div>";
        } else {
            mensagem.innerHTML = "<div style='color:red'>Senha incorreta!</div>";
        }

        form.reset();
    };

});