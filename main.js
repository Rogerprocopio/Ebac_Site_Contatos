const formulario = document.getElementById('form-agenda'); 
const atividade = [];
const notas =[];

let linhas= '';

formulario.addEventListener('submit',function(e){ 
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha(){                           

    const inputNomeAtividade = document.getElementById('nome-agenda');
    const inputNotaAtividade = document.getElementById('numero');

    atividade.push(inputNomeAtividade.value);       
    notas.push(inputNotaAtividade.value); 

    let linha = `<tr>`;
    linha += `<td>${inputNomeAtividade.value.toUpperCase()}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `</tr>`;
    linhas += linha;

    inputNomeAtividade.value = '';                
    inputNotaAtividade.value = '';
    
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

