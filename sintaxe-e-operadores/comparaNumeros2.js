function comparaNumeros (n1 = 0, n2 = 0) { //atribuição de valor padrão às variáveis caso sejam !true
    if (n1 === n2) {
        saoIguais = 'são'
    }

    else {
        saoIguais = 'não são'
    }

    const resSoma = verificaSoma (n1, n2);

    return `Os números ${n1} e ${n2} ${saoIguais} iguais. Sua soma é ${resSoma}`
}

function verificaSoma (n1, n2) {
    let soma = n1 + n2

    let comparaDez = 'menor'
    let comparaVinte = 'menor'

    if (soma > 10) {
        comparaDez = 'maior'
    }

    if (soma > 20) {
        comparaVinte = 'maior'
    }

    return(`${soma} que é ${comparaDez} que 10 e ${comparaVinte} que 20. `)
}


console.log(comparaNumeros(4, 11))