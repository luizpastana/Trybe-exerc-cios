document.querySelector('.emergency-tasks').style.color = 'white';
document.querySelector('.emergency-tasks').style.backgroundColor = 'salmon';
//document.querySelectorAll('.emergency-tasks div')[0].stayle.backgroundColor = 'purple';
document.querySelector('.no-emergency-tasks').style.backgroundColor = 'yellow';
document.querySelector('.no-emergency-tasks').style.color = 'white';
document.querySelector('h1').style.color = 'white';
document.querySelector('#header-container').style.backgroundColor = 'green';
document.querySelector('footer').style.backgroundColor = 'green';
document.querySelector('#footer-container').style.color = 'white';


let purple = document.querySelectorAll('.emergency-tasks h3');
for (let i = 0; i < purple.length; i += 1){
    purple[i].style.backgroundColor = 'purple';
}
let black = document.querySelectorAll('.no-emergency-tasks h3');
for (let i = 0; i < purple.length; i += 1){
    black[i].style.backgroundColor = 'black';
}
