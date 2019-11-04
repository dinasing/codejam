const keyLayoutEng = [
    "`","1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-","=","Backspace",
    "Tab","q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[","]","\\",
    "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";","'","Enter",
    "shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?","Shift",
    "Ctrl","Win","Alt","Space","Alt", "◄", "▲","▼", "►", "Ctrl"
];
const keyLayoutRus = [
    "ё","1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-","=","backspace",
    "tab","й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х","ъ","\\",
    "capslock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж","э","enter",
    "shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".","Shift",
    "ctrl","win","alt","space","alt", "◄", "▲","▼", "►", "ctrl"
];
let capsLock = false;
const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
let textarea = document.createElement('textarea');
let keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
let row1 = document.createElement('div');
let row2 = document.createElement('div');
let row3 = document.createElement('div');
let row4 = document.createElement('div');
let row5 = document.createElement('div');
row1.classList.add('row1');
row2.classList.add('row2');
row3.classList.add('row3');
row4.classList.add('row4');
row5.classList.add('row5');
document.body.append(wrapper);
document.querySelector('div').append(textarea);
document.querySelector('div').append(keyboard);

keyboard.append(row1, row2, row3, row4, row5);


function setKeysLayout(keyLayout) {
    let row = row1;
     keyLayout.forEach(key => {    
        const keyElement = document.createElement('button');
        const insertLineBreak = ["Backspace", '\\',"Enter", "Shift"].indexOf(key) !== -1;
        keyElement.setAttribute('type', 'button');
        keyElement.classList.add('keyboard__key');
        
        switch (key) {
            case 'Backspace':
                keyElement.click = handleBackspace;
            default:
                keyElement.textContent = key;
    
        }
        
        row.append(keyElement);
        if(insertLineBreak) {
            row = row.nextElementSibling;
        }
        
    });
}
function handleBackspace() {
    textarea.innerHTML.length = textarea.innerHTML.length - 1;
};
setKeysLayout(keyLayoutEng);

textarea.addEventListener('keydown', handleKeyDown);
textarea.addEventListener('keyup', handleKeyUp);
function handleKeyDown(e) {
   let buttons = document.querySelectorAll('button');
   buttons.forEach(button => {
    if(e.key == button.innerHTML || e.code == button.innerHTML){
        button.classList.add('key-active');
    }
   }) 
 }
function handleKeyUp(e) {
    let buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
     if(e.key == button.innerHTML || e.code == button.innerHTML){
         button.classList.remove('key-active');
     }
    }) 
  }
