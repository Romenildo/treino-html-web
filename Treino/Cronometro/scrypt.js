const diasEl = document.getElementById("dias");
const horasEl = document.getElementsByName("horas");
const minutosEl = document.getElementsByName("minutos");
const segundosEl = document.getElementsByName("segundos");

const data = "1 Jan 2022"

function countdown(){
    const dataFinal = new Date(data);
    const dataAtual = new Date();

    const totalSegundos = (dataFinal - dataAtual)/1000;
    const dias = Math.floor(totalSegundos / 3600 / 24);
    const horas = Math.floor(totalSegundos / 3600) % 24;
    const minutos = Math.floor(totalSegundos / 60) % 60;
    const segundos = totalSegundos % 60;
    
    diasEl.innerHTML = formatarTempo(dias);
    horasEl.innerHTML = formatarTempo(horas);
    minutosEl.innerHTML = formatarTempo(minutos);
    segundosEl.innerHTML = formatarTempo(segundos);
       

}


function formatarTempo(time){
    return time < 10 ? `0${time}` : time;
}

countdown();

//setInterval(countdown,1000);
