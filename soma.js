document.querySelector('button').addEventListener("click", add);


function add (e){
    e.preventDefault()
    let num1 = Number(document.querySelector("input[name=number1]").value);
    let num2 = Number(document.querySelector("input[name=number2]").value);
    document.querySelector("input[name=result]").value = num1 + num2;        

}

