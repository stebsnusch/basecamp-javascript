function substituiPares (vetor){
    if(!vetor) return 'Entrada inválida.';
    if(!vetor.length) return -1;

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 == 0) {
            vetor[i] = 0
        }
    }

    return vetor;   
}

console.log(substituiPares([1, 2, 3, 4, 5, 6, 7, 8, 9]));