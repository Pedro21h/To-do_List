function adicionarTarefa() {
    const input = document.getElementById("tarefa");
    const textoTarefa = input.value;

    if (textoTarefa.trim() === "") {
        alert("Digite uma Tarefa!");
        return;
    }

    const lista = document.getElementById("lista");
    const item = document.createElement("li");
    item.textContent = textoTarefa;

    lista.appendChild(item);
    input.value = "";//limpa
    input.focus();//foca novamente
}