let items =['phone','pencil','box','table'];
console.log(items[0]);
console.log(items[1]);
console.log(items[2]);
console.log(items[3]);
let user={
    id:1,
    name:"jonas",
    email:'dasdsadsd',
    role:"admin"
}
/**
 * parasykite for cikla, kuris atspausdina masyvo elementu reikmes

console.log('for ciklas:');

for(let i=0;i<items.length;i++){
    console.log(items[i])
}
*/

/**for(let userData of [user]){
    console.log(items[item])

}
*/
for(let userData in user){
    console.log(`${userData}:${user[userData]}`)
}