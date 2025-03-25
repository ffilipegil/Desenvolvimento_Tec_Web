const inputTemperatura = document.getElementById("inserirNum");
const botaoAtualizar = document.getElementById("botaoAtualz");
const retangulo = document.getElementById("retangulo");
const mensagemErro = document.getElementById("erro");

botaoAtualizar.addEventListener("click", function () {
    let temperatura = parseInt(inputTemperatura.value);

    if (isNaN(temperatura) || temperatura < 0 || temperatura > 70) {
        retangulo.style.backgroundColor = "white";
        mensagemErro.style.display = "block";
    } else {
        mensagemErro.style.display = "none";
        if (temperatura >= 0 && temperatura <= 9) {
            retangulo.style.backgroundColor = "blue";
        } 
        else if (temperatura >= 10 && temperatura <= 24) {
            retangulo.style.backgroundColor = "lightblue";
        } 
        else if (temperatura >= 25 && temperatura <= 34) {
            retangulo.style.backgroundColor = "yellow";
        } 
        else if (temperatura >= 35 && temperatura <= 49) {
            retangulo.style.backgroundColor = "red";
        } 
        else {
            retangulo.style.backgroundColor = "darkred";
        }
    }
});
