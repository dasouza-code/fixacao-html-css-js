
let BotaoAdd = document.getElementById('botao');
let Input = document.getElementById('input-tarefa');
let Tarefas = document.getElementById('tarefas');

// Evento de clique no botão de adicionar tarefa
BotaoAdd.addEventListener('click', function() {
  if (Input.value.trim() !== "") {
    let tarefa = document.createElement('p');
    tarefa.innerText = '- ' + Input.value.trim();
    tarefa.classList.add('tarefa');
    Tarefas.appendChild(tarefa);
    Input.value = '';
    Input.focus();

    // Marcar e/ou desmarcar a tarefa com um clique
    tarefa.addEventListener('click', function() {
      tarefa.classList.toggle('concluida');
    });

    // Remover tarefa com duplo clique
    tarefa.addEventListener('dblclick', function() {
      Tarefas.removeChild(tarefa);
    });
  }
});

// Adicionar tarefa ao pressionar Enter
Input.addEventListener('keypress', function(evento) {
  if (evento.key === 'Enter') {
    BotaoAdd.click();
  }
});
