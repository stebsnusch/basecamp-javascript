function comparaNumeros(n1, n2) {
    if (!n1 || !n2) {
        console.log ('Insira números válidos. ')
    }
    else {
        if (n1 === n2) {
            iguais = 'são'
        }
        else {
            iguais = 'não são'
        }
         let soma = n1 + n2

         if (soma < 10){
            comparacaoDez = 'menor' 
         }
         else if (soma > 10) {
            comparacaoDez = 'maior'
         }

         if (soma < 20) {
            comparacaoVinte = 'menor'
         }
         else if (soma > 20) {
            comparacaoVinte = 'maior'
         }

         console.log (`Os números ${n1} e ${n2} ${iguais} iguais. Sua soma é ${soma}, que é ${comparacaoDez} que 10 e ${comparacaoVinte} que 20. `)
    }
}

comparaNumeros(1, 13)