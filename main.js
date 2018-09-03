console.log("Hi");

const age = 25;
if (age < 21){
    console.log("Not Allowed");
}
else if (age >75){
    console.log('its nap time')
}
else {
    console.log("Come On IN");
}

// const a = 1;
// const b = '1';

// a === b //false
// a == b // true

const favoriteColor = 'blue';
const favoriteAnimal = 'bear';
if (favoriteAnimal === 'bear' && favoriteColor === 'blue'){
    console.log('welcome to the club');
}else if (favoriteAnimal === 'cat' || favoriteColor === 'red'){
    console.log('$500 to join the club');
} else {
    console.log('go away');
}

const hiDiv = document.getElementById('hi');
console.log(hiDiv);

const pie = 'peach';
console.log('pie length: ', pie.length);
console.log('#3', pie.charAt(2));
console.log('indexof cat', pie.indexOf('cat')); // -1
console.log('indexof pea', pie.indexOf('pea')); // 0 gives the index pea start on

const quote = 'winter is coming';
const newQuote = quote.replace(/is/g, "ain't");
console.log('newQuote', newQuote);


const fancyObject = {};
fancyObject.color = 'red';
fancyObject['number'] = 10;
console.log("fancyObject", fancyObject);