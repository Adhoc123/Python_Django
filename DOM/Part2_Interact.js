var p=document.querySelector('p');
console.log(p);

p.textContent = 'I changed the text';
p.innerHTML = '<strong>This is bold</strong>';

var special = document.querySelector('#special');
var specialA = document.querySelector('a')
var change = specialA.setAttribute('href','https://www.amazon.com');

console.log(specialA);
console.log(change);
