// Função para adicionar teclas do teclado físico
document.addEventListener("keydown", function(event) {
    // Obtém o valor da tecla pressionada
    var key = event.key;

    // Verifica se a tecla é um número, operador ou tecla especial
    if (/[0-9+\-*/.^]/.test(key)) {
        addToDisplay(key);
    } else if (key === "=" || key === "Enter") {
        calculate();
    } else if (key === "Backspace") {
        clearDisplay();
    }
});

// Restante do seu código JavaScript
function addToDisplay(value) {
    document.getElementById("display").value += value;
}

function calculate() {
    try {
        var result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Erro";
    }
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculateSqrt() {
    var value = document.getElementById("display").value;
    var result = Math.sqrt(parseFloat(value));
    if (!isNaN(result)) {
        document.getElementById("display").value = result;
    } else {
        document.getElementById("display").value = "Erro";
    }
}
