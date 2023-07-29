while (true){
    var listaClientes = []

    nome = prompt("Nome:")
    email = prompt("E-mail:")
    tel = parseInt(prompt("Telefone:"))

    var matrizCliente = [
        [nome, email, tel]
    ]

    listaClientes.push(matrizCliente)
    
    brk = prompt("Digite 0 para finalizar")
    if(brk == 0) break;
} 
