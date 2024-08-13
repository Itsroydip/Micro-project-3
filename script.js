
const display = document.querySelector("#display");
const container = document.querySelector(".container");

container.addEventListener("click",(e)=>{
    if(e.target.tagName != 'BUTTON')
    return;
    
    const pressed = e.target.innerText;
    if(pressed == 'DEL')
    deleteValue();
    else if(pressed == 'RESET')
    resetValue();
    else if(pressed == '=')
    evaluateValue();
    else{
        display.value+= pressed;
    }
    
});

function deleteValue(){
    display.value = display.value.slice(0,-1);
}

function resetValue(){
    display.value = "";
}

function evaluateValue(){
    let value = display.value.replace('x','*');
    value = eval(value);
    
    if(value % parseInt(value) !== 0)
        value = value.toFixed(3);


    display.value = parseFloat(value);  
    
}




