
const form  = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    checkInputs();
});


function checkInputs(){
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();

    // validate first name
    if (fnameValue==""|| fnameValue==null) {
        // error
        setErrorFor(fname,"First name is required!")
    }else{
        setSuccessFor(fname)
    }

        // validate last name
    if (lnameValue =="" || lnameValue==null) {
        setErrorFor(lname,"Last name is required!")

    }
}


function setErrorFor(input,message) {
    const inputParentElement = input.parentElement;
    const small = inputParentElement.querySelector('small');

    small.innerText = message;
    // small.style.display = 'block';

    // add class name
    inputParentElement.ClassName = 'position-relative error';
}

function setSuccessFor(input){
    const inputParentElement = input.parentElement;

    inputParentElement.ClassName = 'position-relative success';

}
