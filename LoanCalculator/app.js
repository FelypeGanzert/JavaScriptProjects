const loading = document.getElementById('loading');
changeLoadingDisplay();
const containerResults = document.getElementById('containerResults');
containerResults.style.display = 'none';

const form = document.getElementById('loan-form');
form.addEventListener('submit',function(e){
    containerResults.style.display = 'none';
    e.preventDefault();
    changeLoadingDisplay();
    setTimeout(calculate, 2000);
});

function calculate(e){
    changeLoadingDisplay();
    //Inputs
    let amountEl = document.querySelector('#amount');
    let interestEl = document.querySelector('#interest');
    let repaymentYearsEl = document.querySelector('#repaymentYears');
    //Elements outputs
    let monthlyPaymentEl = document.querySelector('#monthly-payment');
    let totalPaymentEl = document.querySelector('#total-payment');
    let totalInterestEl = document.querySelector('#total-interest');

    //Variables to calculates
    let principal = parseFloat(amountEl.value);
    let calculatedInterest = parseFloat(interestEl.value) / 100 / 12;
    let calculatedPayments = parseFloat(repaymentYearsEl.value) * 12;

    //Compute monthly payment
    let x = Math.pow(1 + calculatedInterest, calculatedPayments);
    let monthly = (principal * x * calculatedInterest) / (x-1);

    if(isFinite(monthly)){
        monthlyPaymentEl.textContent = monthly.toFixed(2);
        totalPaymentEl.textContent = (monthly * calculatedPayments).toFixed(2);
        totalInterestEl.textContent = ((monthly * calculatedPayments) - principal).toFixed(2);
        containerResults.style.display = 'block';
    } else{
        let firstContainer = document.querySelector('.container:first-child');
        let errorEl = document.createElement('div');
        errorEl.classList.add('container');
        errorEl.classList.add('error');
        errorEl.textContent = 'Error - Check your numbers';
        firstContainer.insertBefore(errorEl, firstContainer.firstElementChild);
        setTimeout(removeError, 3000);
    }
};

function changeLoadingDisplay(){
    if(loading.style.display === 'none'){
        loading.style.display = 'block';
    } else{
        loading.style.display = 'none';
    }
}

function removeError(){
    document.querySelector('.error').remove();
}