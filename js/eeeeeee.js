(function(){
//funkcijos deklaravimas
function syhi(a){
    return a*2;
}
//funkcijos callinimas

console.log(syhi(5))
//anonimine funkcija
const calc = (...numbers)=>{
    return numbers.reduce((prev, cur)=>prev*cur)
}
console.log(calc(5,6,7,8,9,4,4,5,6))
})();