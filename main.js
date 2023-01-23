const formulario = document.getElementById('form-agenda'); 
const nameUser = [];
const telUser =[];

let linhas= '';

formulario.addEventListener('submit',function(e){ 
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha(){                           

    const inputNomeAtividade = document.getElementById('nome-agenda');
    const inputNotaAtividade = document.getElementById('numero');

    nameUser.push(inputNomeAtividade.value);       
    telUser.push(inputNotaAtividade.value); 

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

