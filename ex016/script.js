let num = document.getElementById("fnum")
let datas = document.getElementById("selnumber")
let res = document.getElementById("resultado")
var arrayValues = []

function isNumber(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumber(num.value) && !inList(num.value, arrayValues)) {
        arrayValues.push(Number(num.value))
        let item = document.createElement("option")
        item.text = `Valor ${num.value} adicionado`
        datas.appendChild(item)
        res.innerHTML = ""
    } else {
        window.alert("Valor inválido ou já encontrado na lista!")
    }
    num.value = ""
    num.focus()
}

function analisar() {
    if (arrayValues.length == 0) {
        window.alert("Adicione valores antes de finalizar")
    } else {
        let tot = arrayValues.length
        let maior = arrayValues[0]
        let menor = arrayValues[0]
        let soma = 0
        let media = 0
        for (let pos in arrayValues) {
            soma += arrayValues[pos]
            if (arrayValues[pos] > maior) {
                maior = arrayValues[pos]
            } if (arrayValues[pos] < menor) {
                menor = arrayValues[pos]
            }
        }

        media = soma / tot

        res.innerHTML = ""
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior foi ${maior} </p>`
        res.innerHTML += `<p>O menor foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>A media dos valores digitados é ${media}</p>`
        console.log(arrayValues)
    }
}


