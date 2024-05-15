function cardapio(){
    let escolhadousuario = document.getElementById('refeição').value;
    const paragrafo = document.getElementById ('resultado')

    switch(escolhadousuario){
        case 'cafe':
            paragrafo.innerText = "Pão com manteiga"
            break;
        case 'almoco':
            paragrafo.innerText = "Arroz com batata"
            break;
        case 'jantar':
            paragrafo.innerText = "Macarrão"
            break;
        default:
            paragrafo.innerText = "Invalido"

    }
}

