const form = document.getElementById('formulario-tarefa');
const tarefaLista = document.getElementById('tarefas');

form.onsubmit = function (e) {
    e.preventDefault();
    const campoInput = document.getElementById('tarefa-input');
    addTarefa(campoInput.value);
    form.reset();
};

function addTarefa(descricao) {
    const containerTarefa = document.createElement('div');
    const novaTarefa = document.createElement('input');
    const tarefaLabel = document.createElement('label');
    const descricaoTarefa = document.createTextNode(descricao);

    novaTarefa.setAttribute('type', 'checkbox');
    novaTarefa.setAttribute('name', descricao);
    novaTarefa.setAttribute('id', descricao);

    tarefaLabel.setAttribute('for', descricao);
    tarefaLabel.appendChild(descricaoTarefa);

    containerTarefa.classList.add('tarefa-item');
    containerTarefa.appendChild(novaTarefa);
    containerTarefa.appendChild(tarefaLabel);

    tarefaLista.appendChild(containerTarefa);
}