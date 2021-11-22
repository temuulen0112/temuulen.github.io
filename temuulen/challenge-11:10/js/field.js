function isFieldEmpty(){
    const field = document.querySelector('#inp').value;
    if(field.value === ""){
        return true
    }else{
        return false
    }
}

const fieldTest = isFieldEmpty()

if(fieldTest === true){
    alert("please provide your information")
}