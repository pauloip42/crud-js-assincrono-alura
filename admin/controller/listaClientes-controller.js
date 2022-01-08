import { clienteService } from "../service/cliente-service.js";

const criaNovaLinha = (nome, email, id) => {
    const linhaNovoCliente = document.createElement('tr');
    const conteudo = `
    <td class="td" data-td>${nome}</td>
    <td>${email}</td>
    <td>
        <ul class="tabela__botoes-controle">
            <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
        </ul>
    </td>    
    `
    linhaNovoCliente.innerHTML = conteudo;
    linhaNovoCliente.dataset.id = id;

    return linhaNovoCliente;
}

//Percorre o DOM
const tabela = document.querySelector('[data-tabela]');

tabela.addEventListener('click', (evento) => {
    let ehBotaoDeletar = evento.target.className === 'botao-simples botao-simples--excluir'

    if(ehBotaoDeletar){
        const linhaCliente = evento.target.closest('[data-id]');
        let id = linhaCliente.dataset.id;
        clienteService.removeCliente(id)
        .then(() => {
            linhaCliente.remove();
        })
    }
})

clienteService.listaClientes()
.then( data => {
    data.forEach(elemento => {
    tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email, elemento.id));
    });
})

/*
    Promise.all

    Podemos fazer várias requisições que dependem uma da outra:

    Ex:

    movePersonagem(‘100’, ‘Esquerda’)
    .then(() => movePersonagem(‘800’, ‘Direita’))
    .then(() => movePersonagem(‘200’, ‘Esquerda’))
    .then(() => movePersonagem(‘10’, ‘Direita’ ))
    .then(() => movePersonagem(‘60’, ‘Esquerda’ ))

    é o mesmo que

    Promise.all([
        movePersonagem(‘100’, ‘Esquerda’),
        movePersonagem(‘800’, ‘Direita’),
        movePersonagem(‘200’, ‘Esquerda’),
        movePersonagem(10, ‘Esquerda’),
        movePersonagem(‘60’, ‘Esquerda’)
    ])
    .then(...)

*/