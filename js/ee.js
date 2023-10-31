let vardas = "Bilas";
console.log(
  vardas.length,
  vardas[3],
  vardas.indexOf("las"),
  vardas.slice(0, 2)
);
let data = [];
if (data ){
    console.log('ok');

}else{
    console.log(" false")
}
const language = "Lt";
switch(language){
    case "Lt":
        console.log("sveiki");
        break;
    case "en":
        console.log("hello");
        break;
    default:
        console.log("nesuprantu kalbos")
}

let weather = 20;

let userName = weather>19 ? "andrius":"Karolis";

console.log(userName)