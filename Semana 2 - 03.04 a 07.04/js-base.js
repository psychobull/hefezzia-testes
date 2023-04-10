function calcular(){
    var textv = window.document.querySelector('input#textvel')
    var res = window.document.querySelector('div.res')
    var vel = Number(textv.value)
    res.innerHTML = `<p>Sua velocidade atual é de ${vel}km/h</p>`
    if (vel > 60){
        res.innerHTML += `<p>Você ultrapssou o limite de velocidade</p>`
    }
}
