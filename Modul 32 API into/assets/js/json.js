/* 
    JSON => Jabascrip Object Notation
*/

const myobject = {
    name: 'kawsar',
    emal: 'kawsar721g@gmail.com',
    phone: '01798021438',
    
}

const objectStringify = JSON.stringify(myobject);
const jsonParese = JSON.parse(objectStringify);

console.log(jsonParese);