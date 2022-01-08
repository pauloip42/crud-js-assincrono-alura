const listaClientes = async () => {
    return fetch(`http://localhost:3000/profile`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json();
        }
        throw new Error('Não foi possivel listar os clientes');        
    });
}

const criaCliente = (nome, email) => {
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST', //O método fetch(), por padrão utiliza o verbo GET. Essa linha define que queremos utilizar o POST
        headers: { //Cabeçalho da requisição
            'Content-Type' : 'application/json'
        },
        //The JSON.stringify() method converts a JavaScript object or value to a JSON string
        body: JSON.stringify(//Corpo da requisição
            { 
                nome: nome,
                email: email
            }
        )
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.body;
        }
        throw new Error('Não foi possivel criar um cliente');
    })
}

const removeCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    }).then(resposta => {
        if(!resposta.ok){
            throw new Error('Não foi possivel remover um cliente');
        }
    })
}

const detalhaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json();
        }
        throw new Error('Não foi possível detalhar um cliente');
    });
}

const atualizaCliente = (id, nome, email) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.json();
        }
        throw new Error('Não foi possível atualizar um cliente');
    })
}


export const clienteService = {
    listaClientes,
    criaCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
}

/*
    FETCH
    realiza a requisição e retorna uma promise
    https://developer.mozilla.org/en-US/docs/Web/API/fetch

    https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
*/


/*
    CORS -> o que é?

    desinstalar browser sync quando terminar de estudar
    npm install -g browser-sync
    npm uninstall -g browser-sync

    comando para execução do projeto (browser sync):
    browser-sync start --server --file . --host --port 5000 --startPath admin/telas/lista_cliente.html

    COMANDO PARA INICIALIZAÇÃO DO JSON SERVER (rodar na pasta admin)
    npx json-server --watch db.json
*/

/*
    - PILHA DE EXECUÇÃO
    - PILHA DE MEMÓRIA
    - MOTOR JS

    - Fila de Promises

    WEB API (é executado após os códigos JS na fila de execução)

    - Fila de funções da Web API

    http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
    
*/