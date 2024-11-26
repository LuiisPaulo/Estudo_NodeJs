// API no padrão Rest
import express from 'express';
// importanto constante de outro módulo
const app = express();

// indicar para o express ler o body com json
app.use(express.json());

// mock -> mocar dados (para testes)
const selecoes = [
    {id: 1, selecao: 'Brasil', grupo: 'G'},
    {id: 2, selecao: 'Argentina', grupo: 'G'},
    {id: 3, selecao: 'Irlanda', grupo: 'G'},
    {id: 4, selecao: 'Espanha', grupo: 'G'},
]

// rota padrão ou raiz
app.get('/', (request, response) => {
    response.send('Copa do Mundo');
});

// rota de selecoes
app.get('/selecoes', (request, response) => {
    response.status(200).send(selecoes);
    // .send, irá informar um conteúdo para o usuário
});

app.post('/selecoes', (request, response) => {
    selecoes.push(request.body)
    response.status(201).send('Seleção cadastrada!');
})

export default app;
// exportando a constante app do arquivo app.js
