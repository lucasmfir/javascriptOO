class DateHelper {

	contructor() {

		throw new Error('Essa classe não pode ser instanciada');
	}


	static dataParaTexto(data) {

		return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
	}

	static textoParaData(texto){

		if(!/\d{4}-\d{2}-\d{2}/.test(texto)) throw new Error('Deve estar no formato aaaa-mm-dd');

		return new Date(...texto.split('-').map((item, index) => item -index%2));
			/*.map(function(item, index){
				return item - index%2;
			})*/
			//let data = new Date(this._inputData.value.replace(/-/g, ','));
			//let data = new Date(this._inputData.value.split('-'));
	}



}
