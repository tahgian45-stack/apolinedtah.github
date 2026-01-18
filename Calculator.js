
 document.getElementById('display');
 let On=false;

 function togglebtn(){
    On=!On;

    if(On){
        display.disabled=false;
        display.value ="";
        display.placeholder="0";
     
        document.getElementById('power').innerText="OFF";
    }else{
        display.disabled= true;
        display.value="";
        display.placeholder="";

        document.getElementById('power').innerText="ON";
    }
 }

function appendToDisplay(value){
    document.getElementById("display").value+=value;
}
function cancelDisplay(){
    display.value= display.value.slice(0, -1);
}
function clearDisplay(){
    document.getElementById('display').value="";
}
function calculate(){
    let expression=
    document.getElementById("display").value;
    try{
      document.getElementById('display').value= eval(expression);
    }catch{
        document.getElementById('display').value="Error";
    }
    
}

