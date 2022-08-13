function validate(){
                
    let nameVal;
    let nameLength;
    nameVal = document.getElementById("name").value;
    nameLength = nameVal.length;
    if(nameLength <5 || nameLength>50){
        alert("incorrect name format");
    }else{
        alert("correct name format");
    }
}
function validateNum(e){
                
    var rollVal;
    var rollLength;
    rollVal = document.getElementById("roll").value;

    val = e.target.value;
    console.log(val);
    if(e.keyCode ==8){
        return false;
    }
    if(e.keyCode >48 && e.keyCode <57){
        alert("Correct format");
    }else{
        alert("incorrect format");
    }

    // rollVal = Number(rollVal);
    // if(rollVal !== NaN){
    //     alert("Correct format");
    // }else{
    //     alert("Incorrect format");
    // }
}