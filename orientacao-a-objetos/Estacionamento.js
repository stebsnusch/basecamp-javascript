class Estacionamento {
	_veiculos = [];
	_cheio = false;

	constructor(vagas) {
		this._vagas = vagas;
	}

	getVeiculos() {
		return this._veiculos;
	}

	getCheio() {
		return this._cheio;
	}

	addVeiculo(veiculo) {
		const tamanho = veiculo.getTamanho();
	}

	procuraVaga(veiculo) {
		for (let i = 0; i < this._vagas.length; i++) {
			let mesmoTamanho = this._vagas[i].tamanho === veiculo.getTamanho();

			if (mesmoTamanho && this._vagas[i].getDisponivel()) {
				return this._vagas[i].mudaDisponibilidade(veiculo);
			}
		}

		return 'Não é possível estacionar o veículo no momento';
	}
}
