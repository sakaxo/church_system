
const form = document.getElementById('form');
const fname = document.getElementById('fname');

form.addEventListener('submit',(e)=>){
    e.preventDefault();

    checkInputs();
}


function checkInputs(){
    const fnameValue = fname.value.trim();

    if (fnameValue==""|| fnameValue==null) {
        // error
        setErrorFor(fname,"First name is required!")
    }else{
        setSuccessFor(fname)
    }
}


function setErrorFor(input,message) {
    const inputParentElement = input.parentElement;
    const small = inputParentElement.querySelector('small');
    small.innerText = message;
    // add class name
    inputParentElement.addClass = 'error';
}

function setSuccessFor(input){
    const inputParentElement = input.parentElement;
    inputParentElement.addClass = 'success';

}
