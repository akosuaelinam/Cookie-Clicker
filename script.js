
let buttons =document.querySelector('button')

let count = 0;
buttons.addEventListener('click', display)
function display(){
    count = count+1;
    document.querySelector('p').innerText = "Clicks: " + count;
}