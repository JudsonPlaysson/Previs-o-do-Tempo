const key = "19a3a07f5020fb6474f22dacf306d0f2"

function mostrarNaTela(dados){
    document.querySelector('.titulo').innerHTML = "Tempo em " + dados.name
    document.querySelector('.graus').innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector('.temp').innerHTML = dados.weather[0].description
    document.querySelector('.umidade-').innerHTML = 'Umidade: ' + dados.main.humidity + '%' 
    document.querySelector('.img').src=`https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    console.log(dados)
}

async function buscarCidade(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then (resposta => resposta.json())
        mostrarNaTela(dados)
    }
    

function clickei(){
    const cidade = document.querySelector(".input-city").value

    buscarCidade(cidade)
}