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