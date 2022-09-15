function startTimer(duration, display){
    var timer = duration, days, hours, minutes, seconds;

    setInterval(function(){
        days = parseInt(timer / 86400, 10); // Segundos em um dia 
        hours = parseInt(timer / 3600, 10) % 24; // Horas em um dia
        minutes = parseInt(timer / 60, 10) % 60; // Minutos em uma hora
        seconds = parseInt(timer % 60, 10); // Segundos em um minuto

        days = days < 10 ? "0" + days : days; // Se o valor for menor que 10, acrescenta um 0 na frente
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = days + ":" + hours + ":" + minutes + ":" + seconds; // Exibe o resultado

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function(){

    var fiveDays = 60 * 60 * 24 * 5, // 5 dias
        display = document.querySelector('#time');
    startTimer(fiveDays, display);
}