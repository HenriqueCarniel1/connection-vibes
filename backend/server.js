const express = require('express');
const app = express();
const porta = 4000;

app.use(express());
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.listen(porta, () => {
    console.log(`servidor rodando na porta ${porta}`);
})