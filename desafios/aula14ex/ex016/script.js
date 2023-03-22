function count(){
    var start = Number(document.querySelector("input#start").value)
    var end = Number(document.querySelector("input#end").value)
    var step = Number(document.querySelector("input#step").value)
    var res = document.querySelector("div#res")
    if(end < start && step > 0){
        alert("[ERRO] Com esses parâmetros, O passo deve ser negativo!")
    }else if(end > start && step < 0){
        alert("[ERRO] Com esses parâmetros, o passo dever ser positivo!")
    }else if(start.length == 0 || end.length == 0 || step.length == 0){
        alert("[ERRO] Faltam parâmetros!")
    }else if(end > start){
        if(step == ""){
            alert("[ERRO] Passo inválido, prosseguindo como passo 1")
            step = 1
        }
        res.innerHTML = "Contando:<br>"
        for(var i = start; i <= end; i += step){
            res.innerHTML += `${i} &#128073 `
        }
        res.innerHTML += "&#127937"
    }else{
        if(step == ""){
            alert("[ERRO] Passo inválido, prosseguindo como passo -1")
            step = -1
        }
        res.innerHTML = "Contando:<br>"
        for(var i = start; i >= end; i += step){
            res.innerHTML += `${i} &#128073 `
        }
        res.innerHTML += "&#127937"
    }
}