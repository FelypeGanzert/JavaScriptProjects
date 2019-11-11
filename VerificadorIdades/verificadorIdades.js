var agora = new Date()


function verificar() {
    var anoNascimento = Number(document.getElementById('anoNasc').value)
    var optionM = document.getElementById('sexoM')
    var optionF = document.getElementById('sexoF')
    var divResultado = document.getElementById('resultadoVerificacao')

    var idade = agora.getFullYear() -  anoNascimento
    if(anoNascimento > agora.getFullYear() || anoNascimento < 1900 || (optionM.checked == false && optionF.checked == false)){
        alert('Tem algo de errado com os dados inseridos. Tente novamente!')
    }else{
        if(optionM.checked){
            divResultado.innerHTML = `<h2>Detectamos um Homem com ${idade} anos</h2>`
            if(idade < 7){
                divResultado.innerHTML += '<img src="bebe_m.jpg">'
            }else if(idade < 12){
                divResultado.innerHTML += '<img src="crianca_m.jpg">'        
            }else if(idade < 18){
                divResultado.innerHTML += '<img src="adolescente_m.jpg">'               
            }else if(idade < 55){
                divResultado.innerHTML += '<img src="homem_m.jpg">'
            }else{
                divResultado.innerHTML += '<img src="idoso_m.jpg">'
            }
        }

        if(optionF.checked){
            divResultado.innerHTML = `<h2>Detectamos uma Mulher com ${idade} anos</h2>`
            if(idade < 7){
                divResultado.innerHTML += '<img src="bebe_f.jpeg">'
            }else if(idade < 12){
                divResultado.innerHTML += '<img src="crianca_f.jpg">'        
            }else if(idade < 18){
                divResultado.innerHTML += '<img src="adolescente_f.jpg">'               
            }else if(idade < 55){
                divResultado.innerHTML += '<img src="mulher_f.jpg">'
            }else{
                divResultado.innerHTML += '<img src="idosa_f.jpg">'
            }
        }

    }
}