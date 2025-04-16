document.getElementById("botaoCalcular").addEventListener("click", function(event) {
    event.preventDefault(); // Impede a página de recarregar
    calculo(); // Chama a função corretamente
});

function calculo() {
    let valor1 = parseFloat(document.getElementById("valor1").value);
    let valor2 = parseFloat(document.getElementById("valor2").value);

    if (isNaN(valor1) || isNaN(valor2)) {
        alert("Por favor, insira valores válidos (somente números e pontos).");
        return;
    }

    let result = valor1 / ( valor2 * valor2);
    document.getElementById("result").textContent = result.toFixed(2);
}