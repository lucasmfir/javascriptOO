class Negociacao {

	constructor(data, quantidade, valor){
		this._data = new Date(data.getTime());
		this._quantidade = quantidade;
		this._valor = valor;
		// utilizando o '_' como conveção de que os atributos sao privados
	
		Object.freeze(this);
	}

	get volume(){
		return this._quantidade * this._valor;
	}

	get data(){
		return new Date(this._data.getTime());
	}

	get quantidade(){
		return this._quantidade;
	}

	get valor(){
		return this._valor;
	}


}