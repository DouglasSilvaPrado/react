function confirmar(idcon){
	let resposta = confirm("Confirma a exclusão deste contato ?")
	if (resposta === true){
		
		window.location.href = "delete?idcon=" + idcon
	}
}

function confirmar2(idcon){
	let resposta = confirm("Confirma a exclusão deste contato ?")
	if (resposta === true){
		
		window.location.href = "deletePessoa?idcon=" + idcon
	}
}