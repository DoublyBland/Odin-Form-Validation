//email: string of alphanumeric followed by "@" followed 
//by alpha followed by ".com"
//Country: alpha only
//zipcode: accept 5 digits or "####-#####"
//password: length 8-32, one num, one capital, one non-alpha
//confirm password: matches password

(function zip(){
    let zipRegExp = /^\d{5}(?:[-\s]\d{4})?$/;
    let zipField = document.getElementById('zipcode');
    const zipcodeError = document.querySelector('#zipcode + span.error');
    zipField.addEventListener('input', validateZip)
    
    function validateZip(){
        let zip = this.value;
        let test = zipRegExp.test(zip);
        console.log(zip);
        console.log(test);
        if(test){
            this.setCustomValidity("")
            zipcodeError.textContent = '';
            zipcodeError.classList = 'error';
        }
        else{
            if(this.validity.valueMissing) {
                // If the field is empty,
                // display the following error message.
                this.setCustomValidity('You need to enter a zipcode.');
                this.reportValidity();
        }
        else{
            this.setCustomValidity('Must match zipcode format ##### or #####-####')
            this.reportValidity();
            //zipcodeError.textContent = 'Must match zipcode format ##### or #####-####'
        }
    }
    }
})();

(function password(){
    let passRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    let passField = document.getElementById('password');
    let confirmPass = document.getElementById('confirm-password')
    passField.addEventListener('input', validatePass)
    confirmPass.addEventListener('input', validateConfirm);
    //any number of digits, alphas, 

    function validatePass(){
        let pass = this.value;
        let test = passRegExp.test(pass);
        if(test){
            this.setCustomValidity("")
            return;
        }
        else{
            if(passField.validity.valueMissing){
                this.setCustomValidity('You need to enter a password.');
                this.reportValidity();
            }
            else {
                this.setCustomValidity('Password must be greater than 8 characters, include upper and lower case, and a number.');
                this.reportValidity();
            }
        }
    }

    function validateConfirm(){
        let confirm = this.value;
        let originalPass = passField.value;
        if(confirm !== originalPass){
            this.setCustomValidity('Passwords do not match.');
            this.reportValidity();
        }
        else{
            this.setCustomValidity("")
        }
    }
})();


(function submit(){
    let submit = document.getElementById('submit');
    submit.addEventListener('click', checkValidity);

    function checkValidity(){
        let inputs = document.querySelectorAll('input')
        let check;
        inputs.forEach(element => {
            if(!element.validity.valid){
                check = false;
            }
        });
        if (check == false){
            document.getElementById('display-text').textContent = "You Fail!"
        }
        else{
            document.getElementById('display-text').textContent = "High-Five!"
        }
    }
})();