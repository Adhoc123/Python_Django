var fname = prompt("Enter your first name: ");
var lname = prompt("Enter your last name: ");
var age = prompt('How old are you?');
var tall = prompt('You height in cm');
var petName = prompt('Provide your pet name');

if (fname[0]===lname[0] && (age>=20&&age<=30) && tall>=170 && petName[petName.length-1]==='y')
       console.log('You have passed the test');
else console.log('No permission');