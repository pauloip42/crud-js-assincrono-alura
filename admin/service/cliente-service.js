const listaClientes = () => {
    return fetch(`http://localhost:3000/profile`)
    .then(resposta => {
        return resposta.json();
    });
}

export const clienteService = {
    listaClientes
}

/*
    FETCH
    realiza a requisição e retorna uma promise
*/


/*
    CORS -> o que é?

    desinstalar browser sync
    npm install -g browser-sync
    npm uninstall -g browser-sync
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