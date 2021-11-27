let conceito = 80;

if (conceito >= 0 && conceito <= 100){
    switch(true){
        case conceito < 50:
            console.log('F');
            break;
        case (conceito < 60):
            console.log('E');
            break;
        case (conceito < 70):
            console.log('D');
            break;
        case (conceito < 80):
            console.log('C');
            break;
        case (conceito < 90):
            console.log('B');
            break;
        case (conceito <= 100):
            console.log('A');
            break;
    }
}