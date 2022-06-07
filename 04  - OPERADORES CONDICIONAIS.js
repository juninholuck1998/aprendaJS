// ALGORITMOS CONDICIONAIS
// if condição principal
// else if condição secundária
// else 
// COMPARADORES     ==     >=     <=      >    <

function aprovadooureprovado (num1, num2, num3) {
    let media = ((num1 * 3 )+ (num2 * 3) + (num3 * 4))/10
    if (media < 5){
        return "Reprovado!"}
    else if (media < 7){
        return "Prova final"
    }
    else {
        return "APROVADO!"
    }
}