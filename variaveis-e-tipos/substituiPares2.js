function substituiPares (vetor){
    if(!vetor) return;
    
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 == 0) {
            vetor[i] = 0;
        }
    }

    console.log(vetor);
}

substituiPares([0]);