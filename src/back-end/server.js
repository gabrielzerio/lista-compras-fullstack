import express from 'express'
import rotasPublicas from './rotas/publica.js';

const app = express();
app.use(express.json());

app.use('/', rotasPublicas);

app.listen(3000, () => console.log("Servidor Rodando 🚀"));

