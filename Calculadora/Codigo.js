function Pe(){
    let a = document.getElementById("a");
    let resultado = document.getElementById("resultado");
    let va = parseFloat(a.value);
    let vr = va/3.281;
    resultado.textContent = vr;
}
function Metro(){
    let a = document.getElementById("a");
    let resultado = document.getElementById("resultado");
    let va = parseFloat(a.value);
    let vr = va*3.281;
    resultado.textContent = vr;
}