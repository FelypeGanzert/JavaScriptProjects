/*
<select size="10">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
</select>
*/

function mostrarTabuada(){
    var num = document.querySelector('input#numtabuada').value
    var divResultado = document.querySelector('div#resultado')

    if(num.length == 0){
        alert('[ERRO] Insira um número!!')
        divResultado.innerHTML = ""
    } else{
        num = Number(num)
        divResultado.innerHTML = `<h3>Tabuada do ${num}</h3>`
        var select = document.createElement('select')
        select.size = "10"
        for(var i = 1; i <=10; i++){
            var option = document.createElement(`option`)
            option.text = `${num} x ${i} = ${num*i}`
            select.appendChild(option)
        }
        divResultado.appendChild(select)
    }
}