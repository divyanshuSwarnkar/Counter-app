const counters = document.querySelectorAll('.counter')
console.log(counters)

counters.forEach(counter=>{
counter.innerText = '0'
let target = +counter.getAttribute('data-target');
console.log(target)
let count = 0;
function incrementcounter(){
    if (count<target){
    count++;
counter.innerText = count;
setInterval (incrementcounter,100);
    }else{
        counter.innerText = target;
    }
}
incrementcounter();
})