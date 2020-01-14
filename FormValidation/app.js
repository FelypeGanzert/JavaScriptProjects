// Form Blur Event Listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('cep').addEventListener('blur', validateCep);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName(){
    const name = document.getElementById('name');
    const re = /^[A-Za-z]{2,10}$/;
    if(!re.test(name.value)){
        name.classList.add('invalid-input');
    } else{
        name.classList.remove('invalid-input');
    }
}

function validateCep(){
    //00000-000 (cinco dígitos - hífen - três dígitos)
    const cep = document.getElementById('cep');
    const re = /^([0-9]{5})-([0-9]{3}$)/;
    if(!re.test(cep.value)){
        cep.classList.add('invalid-input');
    } else{
        cep.classList.remove('invalid-input');
    }
}

function validateEmail(){
    const email = document.getElementById('email');
    //Pode ter letras, números, _, - e .
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if(!re.test(email.value)){
        email.classList.add('invalid-input');
    } else{
        email.classList.remove('invalid-input');
    }
}

function validatePhone(){
    //formato: (DD)90000-0000
    const phone = document.getElementById('phone');
    //Pode ter letras, números, _, - e .
    const re = /^[-\(\.\s]?([0-9]{2})[-\)\.\s]?9[-\.\s]?([0-9]{4})[-\.\s]?([0-9]{4})$/;
    if(!re.test(phone.value)){
        phone.classList.add('invalid-input');
    } else{
        phone.classList.remove('invalid-input');
    }
}



