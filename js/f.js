/**document.querySelector('article').style.backgroundColor='tomato';

document.querySelector('p').innerHTML = "<strong>Labas gera naujiena</strong>";

for(let text of document.querySelectorAll('h4')){
    text.textContent="Labas rytas lietuva";
}
const ul = document.createElement('ul');
const li = document.createElement('li');
li.textContent = "labai svarbus darbas";

document.querySelector('section').appendChild(ul);
document.querySelector('ul').appendChild(li);

/**
 * Naudodami Javascript sukurkite html lentele, kuria sudaro 3 eilutes ir 10 stulpeliu
 */

for(let i=0;i < 3;i++){
    let tr = document.createElement(('tr'));
    document.querySelector('Table').appendChild(tr);
    tr.textContent= "eilute "$[1];


}

   
