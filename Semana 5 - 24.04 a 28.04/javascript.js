function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('anoNasc')
    var res = document.getElementById('div2')

    if (fAno.value.length == 0 || fAno.value > ano || (ano - fAno.value) > 125){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }
    else{
        var fSex = document.getElementsByName('radioSex')
        var idade = ano - Number(fAno.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fSex[0].checked) {
            gen = 'homem'
            if (idade >= 65){ //idoso
                img.setAttribute('src', 'homem-idoso.jpg')
            }
            else if (idade >= 18 && idade < 65){ //adulto
                img.setAttribute('src', 'homem-adulto.png')
            }
            else if (idade < 18){ //criança
                img.setAttribute('src', 'homem-criança.jpg')
            }
        }
        else if (fSex[1].checked){
            gen = 'mulher'
            if (idade >= 65){
                img.setAttribute('src', 'mulher-idosa.jpg')
            }
            else if (idade >= 18 && idade < 65){
                img.setAttribute('src', 'mulher-adulta.jpg')
            }
            else if (idade < 18){
                img.setAttribute('src', 'mulher-criança.jpg')
            }
        }

        res.innerHTML = `Detectamos ${gen} com ${idade} anos!`
        res.appendChild(img) //para q a imagem apareça após o 'res'
    }
}