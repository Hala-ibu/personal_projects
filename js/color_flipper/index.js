const body=document.getElementsByTagName('body')[0];


function setColor(color){
    body.style.backgroundImage='none';
    body.style.backgroundColor=color;
    document.getElementById('texting').innerHTML='bg color is '+color;

}
function randomColor(){
    const red = Math.round(Math.random()*225)
    const green = Math.round(Math.random()*225)
    const blue = Math.round(Math.random()*225)

    const color=`rgb(${red},${green},${blue})`
    body.style.backgroundImage='none';
    body.style.backgroundColor=color;
    document.getElementById('texting').innerHTML='bg color is random';

}
function restarting(){
    document.getElementById('texting').innerHTML='bg color is reset';
    body.style.backgroundImage='url(sakuras.jpg)';
}
