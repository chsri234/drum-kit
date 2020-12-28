
/***************************** click event **************************************************/

var selectButton = document.querySelectorAll('.drum');

for(i=0; i<selectButton.length; i++) {
    selectButton[i].addEventListener('click', handleClick);
}

function handleClick() {
    // alert('I got clicked');
    // console.log(this);
    var buttonInnerHtml = this.innerHTML;
    console.log(buttonInnerHtml);
    makeSound(buttonInnerHtml); 
    buttonAnimation(buttonInnerHtml);

   
}


/********************************* Key pressed event ***************************************/ 

addEventListener('keypress', handlePress);

function handlePress(event) {
    // console.log(event.key);
    var keyPressed = event.key;
    makeSound(keyPressed); 
    buttonAnimation(keyPressed);
    
}

/******************************************* switch statement ******************************/

function makeSound(action) {
    switch (action) {
        case 'w':
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'a':
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
                break; 
        case 's':
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
                break; 
        case 'd':
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
                break; 
        case 'j':
                var snare = new Audio('sounds/snare.mp3');
                snare.play();
                break;
        case 'k':
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case 'l':
            var kickBass = new Audio('sounds/kick-bass.mp3');
            kickBass.play();
            break;
        default:
            console.log();
            break;
    }
}

/******************************* Adding Animations **************************************************/

function buttonAnimation(currentKey) {
    var selectedKey = document.querySelector('.' + currentKey);
    // console.log(selectedKey);
    selectedKey.classList.add('pressed');
    setTimeout(function() {
        selectedKey.classList.remove('pressed');  
    },100)
}