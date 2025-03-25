
const toreverse=(input)=>input.split("").reduceRight((x,y)=>x+y,'')

function checker(){
    const input= document.getElementById('tocheck').value.toLowerCase();

    if(input===toreverse(input)){
        document.getElementById('answer').innerHTML='This is a palindrome';
    }else{
        document.getElementById('answer').innerHTML='This is not  a palindrome';
    }
}
