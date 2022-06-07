// OPERADORES LÓGICOS
// os dois são iguais  and e = &&
// pode ser um ou outro ||
// para inverter um valor boleano usa-se NOT que é representado por exclamação !


function aprovadooureprovado (num1, num2, num3, faltas) {
    let media = ((num1 * 3 )+ (num2 * 3) + (num3 * 4))/10
    if (media >= 7 && faltas >= 10) {
        return "Aprovado"
    }
    else {
        return "Reprovado"
    }
    }

// MODELO MAIS LIMPO DO CÓDIGO ACIMA
    function aprovadooureprovado (num1, num2, num3, faltas) {
        let media = ((num1 * 3 )+ (num2 * 3) + (num3 * 4))/10
        let aprovado = (media >= 7)
        let presenca = (faltas <= 10)
        if (aprovado && presenca) {
            return "Aprovado"
        }
        else {
            return "Reprovado"
        }
        }

// UMA COISA OU OUTRA SENDO VERDADEIRA/TRUE

function classificado (notavest, notaenem) {
    let aprovadovest = (notavest >= 7)
    let aprovadoenem = (notaenem >=700)

    if (aprovadoenem || aprovadovest) {
        return "Classificado"
    }   else {
        "Desclassificado"
    }
}