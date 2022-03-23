function count() {
    var initialValue = Number(document.getElementById("initial").value);
    var finalValue = Number(document.getElementById("final").value);
    var spacing = Number(document.getElementById("spacing").value);
    var res = document.getElementById("res");

    
    if (initialValue.length == 0 || finalValue.length == 0 || spacing.length == 0) {
        window.alert("[ERRO] Faltam dados!")
    } else {
        res.innerHTML = "Contando: "
        if (spacing <= 0 ) {
            window.alert("Passo inválido! Considerando PASSO = 1")
            spacing = 1
        } 
        if (initialValue < finalValue) {
            for (var c = initialValue; c <= finalValue; c += spacing) {
                res.innerHTML += ` ${c} `
            }
        } else {
            for (var c = initialValue; c >= finalValue; c -= spacing) {
                res.innerHTML += ` ${c} `
            }
        }       
    }  
}