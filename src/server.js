import app from './app';

const port = 3333

try {
    app.listen(port);
    console.log(`Aplicativo disponivel na porta ${port}`)
} catch (error) {
    console.log(`Erro: ${error}`)
}