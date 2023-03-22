function carregar(){
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        // BOM DIA
        img.src = "fotodia.png"
        document.body.style.background = "#f9ead7"
    }else if (hora >= 12 && hora < 18){
        // BOA TARDE
        img.src = "fototarde.png"
        document.body.style.background = "#bca009"
    }else {
        // BOA NOITE
        img.src = "fotonoite.png"
        document.body.style.background = "#594367"
    }
}
