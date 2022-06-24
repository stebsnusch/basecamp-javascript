function verificaPalindromo(palavra) {
    if(!palavra || !palavra.length) return 'Entrada inválida.'

    let palavraRevert = palavra.split('').reverse().join('')
    
    console.log (`\nPalavra digitada: ${palavra}\nPalavra inversa: ${palavraRevert}\n`)

    for (let i = 0; i < palavra.length/2; i++) {
        if (palavra[i] === palavra[palavra.length-i-1]) {
            return 'É palíndromo.'
        }else {
            return 'Não é palíndromo.'
        }
    }
}

console.log(verificaPalindromo('entschuldigung'))