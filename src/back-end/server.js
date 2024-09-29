import express from 'express'
import rotasPublicas from './rotas/publica.js';
import rotasPrivadas from './rotas/privada.js'
const app = express();
app.use(express.json());

app.use('/', rotasPublicas);
app.use('/', rotasPrivadas);

app.listen(3000, () => console.log("Servidor Rodando 🚀"));