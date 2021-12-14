function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Função que cria os dias no calendário

  const diasDoCalendario = document.querySelector('#days');

  let dezDaysList = [29, 30];
  for (let index = 1; index <= 31; index += 1) {
    dezDaysList.push(index);
  }
  
  function createDays(array) {
    for (let index = 0; index < array.length; index += 1) {
      let day = document.createElement('li');
      day.className = 'day';
      day.innerText = array[index].toString();
      if (day.innerText === '4' || day.innerText === '11' || day.innerText === '18' || day.innerText === '25'){
        day.className += ' friday';
      }
      if (day.innerText === '24' || day.innerText === '25' || day.innerText === '31'){
        day.className += ' holiday';
      }
      diasDoCalendario.appendChild(day);
    }
  }

  createDays(dezDaysList);

  // Função que cria o botão feriado
  let buttonsDiv = document.querySelector('.buttons-container');
  let button = document.createElement('button');
  
  function criaBotaoFeriado (){ 
    let string = 'Feriados';
    button.innerText = string; 
    button.id = 'btn-holiday';
    button.type = 'text';
    buttonsDiv.appendChild(button);
  }
  
  criaBotaoFeriado();
  
  // Função de click - feriados
  
  function corFeriados() {
    let element = document.getElementsByClassName('holiday');
    for (let index = 0; index < element.length; index += 1) {
      if (element[index].style.backgroundColor === 'yellowgreen'){
        element[index].style.backgroundColor = 'rgb(238,238,238)';
      } else {
        element[index].style.backgroundColor = 'yellowgreen';
      }
    }
  }
  
  button.addEventListener('click', corFeriados);
  
  // Cria botão sexta feira
  
  let buttonFriday = document.createElement('button');
  
  function criaBotaoSextaFeira (){ 
    let string = 'Sexta-Feira';
    buttonFriday.innerText = string; 
    buttonFriday.id = 'btn-friday';
    buttonFriday.type = 'text';
    buttonsDiv.appendChild(buttonFriday);
  }
  
  criaBotaoSextaFeira();
  
  buttonFriday.addEventListener('click', sextaFeira);

  function sextaFeira () {

    let sextasArrey = [4, 11, 18, 25];
    let element = document.querySelectorAll('.friday');
    for (let index = 0; index < element.length; index += 1){
      if (element[index].innerText !== 'Sexta Feira'){
        element[index].innerText = 'Sexta Feira';
      } else {
        element[index].innerText = sextasArrey[index];
      }
    }
  }

  