const form = document.getElementById('form-agenda');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado" />';
const contatos = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adcionaLinha();
    atualizaTabela();
});

function adcionaLinha() {
    const inputContato = document.getElementById('nome-contato');
    const inputDDD = document.getElementById('numero-ddd');
    const inputNumero = document.getElementById('numero-contato');

    if (contatos.includes(inputContato.value)){
        alert(`O Contato: "${inputContato.value}" já foi inserido`)
    } else { 

    contatos.push(inputContato.value);
    numeros.push(parseFloat(inputNumero.value));

    let linha = '<tr>';
    linha += `<td>${inputContato.value}</td>`;
    linha += `<td>${inputDDD.value}</td>`;
    linha += `<td>${inputNumero.value}</td>`;
    linha += '</tr>';

    linhas += linha;
    }

    inputContato.value = '';
    inputDDD.value = '';
    inputNumero.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}