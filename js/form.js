const form = document.querySelector('.form-connect')
const firstName = document.querySelector('#name')
console.log(firstName)

const subjct = document.querySelector('#subject')

console.log(subjct)
const email = document.querySelector('#email');
const msg = document.querySelector('#msg');
const errorNodes = document.querySelectorAll('.error')
const success = document.getElementById('success');

form.addEventListener('submit', (e) => {
    e.preventDefault()

    validateForm()

});

function validateForm() {

    clearMassage()
    let errorFlag = false;

    if (firstName.value.length < 5) {

        errorNodes[0].innerText = 'Name cannot be blank and not less than 5 characters';
        firstName.classList.add('error-border')
        errorFlag = true

    }
    if (subjct.value.length < 15) {

        errorNodes[2].innerText = 'Subject cannot be blank and not less than 15 characters ';
        subjct.classList.add('error-border')
        errorFlag = true


    }
    if (!emailIsValid(email.value)) {
        errorNodes[1].innerText = 'Invalid email';
        email.classList.add('error-border')
        errorFlag = true
    }
    if (msg.value.length < 25) {
        errorNodes[3].innerText = 'Kindly enter your massage and massage not less than 15 characters ';
        msg.classList.add('error-border')
        errorFlag = true
    }

    if (!errorFlag) {
        success.innerHTML = 'Success!'
        setTimeout(function () {
            refreshPage()
        }, 500);

    }

}

/// clear error and success
function clearMassage() {
    for (let i = 0; i < errorNodes.length; i++) {
        errorNodes[i].innerText = "";

    }

    success.innerText = ''
    firstName.classList.remove('error-border');
    email.classList.remove('error-border');
    msg.classList.remove('error-border')
    subjct.classList.remove('error-border')


}
//is emailvalid
function emailIsValid(email) {
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email)

}

function refreshPage() {
    console.log("Refreshing page");
    location.reload ? location.reload() : location = location;
}

//this code is not working