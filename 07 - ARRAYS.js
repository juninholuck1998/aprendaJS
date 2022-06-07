// ARRAYS
// LISTA DE INFORMAÇÕES
// utiliza o colchete para criar []
// lembra q a contagem começa no 0
// length faz a contagem de quantos elementos há na lista

function teste () {
    let alunos = ["Bia"; "Ana"; "Carlos"];
    return alunos[2]        // retorna o Carlos
}

function somarTodos (lista) {
    let soma = 0;

    for (let i = 0; i < 10; i++ )
}

// recebe uma array e retorna a soma de todos os seus números multiplicados por 2.
function dobraASoma(lista) {
    let soma = 0;
    for ( let i = 0; i < lista.length; i++) {
        soma += lista[i];
    }
    return 2*soma
   }

// recebe uma array de números positivos diferentes entre si 
// e retorna o índice do maior número encontrado.

function maiorIndice(lista) {
    let indice = 0;
    for  (let i= 0; i < lista.length; i++) {
        if (lista[i] > lista[indice]) {
            indice = i;
        }
    }
    return indice
  }

//