function avancarDias(dia, quantidade) {
    let dias = ["Segunda feira", "Terça feira", "Quarta feira", "Quinta feira", "Sexta feira", "Sabado", "Domingo"]
    let indice = 0;
    for (let i = 0; i < dias.length; i++ ) {
      if (dias[i] == dia) {
        indice = i;
      }
    }
    indice = (indice + quantidade) % 7;
    return dias[indice]
  }

  