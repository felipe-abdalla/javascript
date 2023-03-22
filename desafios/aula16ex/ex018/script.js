let list = []

function addNumber(){
    let n = Number(document.querySelector("input#txtn").value)
    if(list.indexOf(n) < 0 && n >= 1 && n <=100){
        let table = document.querySelector("select#display")
        list.push(n)
        let display = document.createElement("option")
        display.text = `O número ${n} foi adicionado à posição ${list.indexOf(n)}`
        table.appendChild(display)
    }else if(list.indexOf(n) > 0){
        alert("O número digitado já está na lista!")
    }else{
        alert("O número digitado deve ser entre 1 e 100!")
    }
    document.querySelector("input#txtn").value = ""
    document.querySelector("div#endResult").innerHTML = ""
}

function endQuery(){
    let size = list.length
    let highest = 0
    let lowest = 100
    let avg = 0
    for(let i = 0; i < list.length; i++){
        if(list[i] > highest) highest = list[i]
        if(list[i] < lowest) lowest = list[i]
        avg += list[i]
    }
    let result = document.querySelector("div#endResult")
    result.innerHTML = `<p>O tamanho do vetor é ${size}</p>`
    result.innerHTML += `<p>O maior número é ${highest}</p>`
    result.innerHTML += `<p>O menor número é ${lowest}</p>`
    result.innerHTML += `<p>A soma dos valores é ${avg}</p>`
    result.innerHTML += `<p>A média é ${avg/list.length}</p>`
}