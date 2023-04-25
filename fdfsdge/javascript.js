let carregou = document.getElementById('body')
carregou = window.addEventListener('load', carregar)

function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora}h!`

    if (hora > 0 && hora <= 12){
        img.src = 'manha.jpg'
        document.body.style.backgroundColor = '#ffba3b'
    }
    else if (hora > 12 && hora <= 18){
        img.src = 'tarde.jpg'
        document.body.style.backgroundColor = '#ff7442'
    }
    else{
        img.src = 'noite.jpg'
        document.body.style.backgroundColor = '#171777'
    }
}