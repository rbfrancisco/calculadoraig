function calcularIdadeGestacional() {

    const todayMS = Number( new Date() );
    const dumDateMS = Number( new Date(document.getElementById('dum').value) ) + (3 * 60 * 60 * 1000);
    const usDateMS = Number( new Date(document.getElementById('us-date').value) ) + (3 * 60 * 60 * 1000);

    const today =  todayMS / (1000 * 60 * 60 * 24);
    const dumDate = dumDateMS / (1000 * 60 * 60 * 24); 
    const usDate = usDateMS / (1000 * 60 * 60 * 24); 
    const usWeeks = parseInt(document.getElementById('us-weeks').value);
    const usDays = parseInt(document.getElementById('us-days').value);

    const dumAge = today - dumDate;
    const usAge = today - usDate + usDays + (7 * usWeeks);


    const dumSemanas = Math.floor(dumAge / 7);
    const dumDias = Math.floor(dumAge % 7);
    const usSemanas = Math.floor(usAge / 7); 
    const usDias = Math.floor(usAge % 7);

    const difDias = Math.abs(dumAge - usAge);
    const usAgeFirst = usDays + 7 * usWeeks;
    
    var dumInserido = true;
    if ( isNaN(dumDateMS) ) {
      dumInserido = false;
    }
    
    var usgInserido = true;
    if (isNaN(usDateMS)||isNaN(usWeeks)||isNaN(usDays)) {
      usgInserido = false;
    }

// Saída de texto
        let resultText = ``;

if (dumInserido) {
  resultText += `Idade gestacional calculada a partir da DUM: ${dumSemanas} semanas e ${dumDias} dias<br>`;
}
if (usgInserido) {
  resultText += `Idade gestacional calculada a partir do USG: ${usSemanas} semanas e ${usDias} dias<br>`;
}

if (dumInserido && usgInserido) {
  resultText += `<br> ${difDias} dias de diferença entre as estimativas <br>`;
  
  if (usAgeFirst < 63 && difDias > 5) {
        resultText += `Considerar idade gestacional pelo USG: ${usSemanas} semanas e ${usDias} dias<br>`;
}
else if (usAgeFirst < 112 && difDias > 7) {
        resultText += `Considerar idade gestacional pelo USG: ${usSemanas} semanas e ${usDias} dias<br>`;
}
else if (usAgeFirst < 154 && difDias > 10) {
        resultText += `Considerar idade gestacional pelo USG: ${usSemanas} semanas e ${usDias} dias<br>`;
}
else if (usAgeFirst < 196 && difDias > 14) {
        resultText += `Considerar idade gestacional pelo USG: ${usSemanas} semanas e ${usDias} dias<br>`;
}
else {
        resultText += `Considerar idade gestacional pela DUM: ${dumSemanas} semanas e ${dumDias} dias<br>`;
}
  
}
    
if(!usgInserido&&!dumInserido) {
resultText += `Não foi inserida nenhuma informação válida`;
}


    document.getElementById('result').innerHTML = resultText;

}