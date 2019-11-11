function contar() {
    //Coleta dos elementos
    var inicio = document.querySelector('input#inicio').value
    var fim = document.querySelector('input#fim').value
    var incremento = document.querySelector('input#incremento').value
    var divResultado = document.querySelector('div#resultado')

    //Validações


    if (inicio.length == 0 || fim.length == 0 || incremento.length == 0) {
        divResultado.innerHTML = "";
        alert('[ERRO] Verifique se os campos início, fim e incremento não estão vazios.')
    } else if (Number(incremento) <= 0) {
        alert('[ERRO] Incremento precisa ser maior que 0. Considerando como incremento 1 e realizando a Contagem.')
        incremento = Number(incremento)
        incremento = 1;
        document.querySelector('input#incremento').value = 1;
    } else {

        divResultado.innerHTML = `<p>Contagem do valor ${inicio} até o ${fim} com incremento ${incremento}</p>`
        var p = document.createElement('p')
        //Contagem crescente
        if (Number(inicio) <= Number(fim)) {
            for (var i = Number(inicio); i <= Number(fim); i += Number(incremento)) {
                p.innerHTML += `${i}`
                if (i == Number(fim) || (i + Number(incremento) > fim)) {
                    p.innerHTML += ` \u{1F3C1}`
                } else {
                    p.innerHTML += ` \u{1F449} `
                }
            }
        }else{ //Contagem Descrescente
            for (var i = Number(inicio); i >= Number(fim); i -= Number(incremento)) {
                p.innerHTML += `${i}`
                if (i == Number(fim) || (i + Number(incremento) < fim)) {
                    p.innerHTML += ` \u{1F3C1}`
                } else {
                    p.innerHTML += ` \u{1F449} `
                }
            }
        }
        divResultado.appendChild(p)
    }




}