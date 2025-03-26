document.addEventListener("keydown", function(event) {
    let key = event.key;
    let display = document.getElementById("display");

    // Allow only numbers and basic operators
    if (!isNaN(key) || "+-*/".includes(key)) {
        display.value += key; // Append key input
    } else if (key === "Enter") {
        display.value = eval(display.value); // Calculate result
    } else if (key === "Backspace") {
        display.value = display.value.slice(0, -1); // Remove last character
    }
});
document.querySelectorAll(".buttons button").forEach(button => {
    button.addEventListener("click", () => {
        let a = button.id;
        console.log(a);
        if(!isNaN(a)|| "+-*/".includes(a)){
            display.value+=a;
        }
        else if (a == "C") {
            let z = document.getElementById("display");
            z.value = "";  // Clear the input
            z.placeholder = "0";  // Set new placeholder
        }
        else if (a === "Enter") {
            display.value = eval(display.value); 
        }
        else if (a === "=") {
            display.value = eval(display.value); 
        }
    });
});

