function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''

        //Mesma coisa de fazer (<img id="foto">) no HTML.
        //var img = document.createElement('img') //Aqui eu estou criando um elemento de imagem, igual no HTML.
        //img.setAttribute('id', 'foto')//Aqui eu estou colocando um id para esse elemento. 

        var img = document.getElementById('img')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'crianca-homem.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem-homem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulto-homem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso-homem.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'crianca-mulher.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem-mulher.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulto-mulher.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso-mulher.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com idade ${idade}`
        res.appendChild(img)
    }
}