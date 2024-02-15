function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var hora = 20;

    msg.innerHTML = (`Agora são ${hora} horas`)

    if (hora >= 0 && hora < 12) {
        img.src = 'manha.png';
        document.body.style.background = '#B6B19F'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde.png';
        document.body.style.background = '#B9A077'
    } else {
        img.src = 'noite.png';
        document.body.style.background = '#303030'
    }
}
