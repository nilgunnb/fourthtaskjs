let button = document.getElementById("calculate");
button.onclick = Calculate = () => {
    let inp_value1 = parseFloat(document.getElementById("first-input").value);
    let inp_value2 = parseFloat(document.getElementById("second-input").value);
    let inp_value3 = parseFloat(document.getElementById("third-input").value);

    let allpayment = inp_value1 + (inp_value1*(inp_value3/100));
    let monthlypayment = (allpayment/inp_value2).toFixed(2);

    if (isNaN(inp_value1) || isNaN(inp_value2) || isNaN(inp_value3)) {
        alert("Invalid number");
    } 
    else if (inp_value3>=19) {
        alert("Max percent degree is 18!")
    }
    else{
        document.getElementById("monthly").innerHTML = monthlypayment + " " + "₼";
        document.getElementById("overall").innerHTML = allpayment + " " + "₼";
        document.getElementById("percent").innerHTML = inp_value3 + " " +  "%";
    }
} 