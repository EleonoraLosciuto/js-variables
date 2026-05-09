const city = 'New York'; // NON MODIFICARE QUESTA RIGA
const cityName = 'City'; // NON MODIFICARE QUESTA RIGA
const shoppingList = 'mele, banane, arance, uva'; // NON MODIFICARE QUESTA RIGA
const hello = 'hello'; // NON MODIFICARE QUESTA RIGA

// 1. Cerca un carattere in una stringa
// Stampa l'INDICE con cui viene trovato
// il carattere Y nella variabile city
const cityIndex = city.indexOf("Y")
console.log(cityIndex); // Output: 4

// 2. Sottostringhe 
// Stampa la sottostringa "York" dalla variabile city
const citySubstring = city.slice(4); 
// anche city.substring(4) --> differenza è che non è obbligatorio inserire start in slice ma entrambi restituiscono una stringa - inoltre slice accetta anche valori negativi e nel caso di valori negativi inizia a contare dal fondo
// sia per substring che per slice potevo usare la nuova variabile cityIndex come parametro
// oppure city.split(' ')[1] - dice di dividere la stringa nel punto indicato nel parametro tra parentesi e poi che voglio la seconda parte [1] 
console.log(citySubstring); // Output: "York"

// 3. Sostituzione
// Sostituisci 'York' con 'Delhi'
const cityReplaced = city.replace("York", "Delhi");
// potevo usare anche city.substring(0, 4) + "Delhi"
console.log(cityReplaced); // Output:  "New Delhi"

// 4. Template literal
// Concatena due stringhe usando la sintassi `${var}`
// e rendi cityNameConcat uguale a 'New York City'
const cityNameConcat = ` ${city} ${cityName}`;
console.log(cityNameConcat); // Output: "New York City"

// 5. Tutto in maiscolo
// Trasforma tutto in maiscuolo la stringa della variabile hello
const upperCaseHello = hello.toUpperCase();
console.log(upperCaseHello); // Output: "HELLO"


// this is to play with text.split funcion
let text = "How are you doing today?";
const myArray = text.split(" ");
console.log(myArray); //result is array with lenght 5 -> 0 How / 1 are / 2 you / 3 doing / 4 today?

const myArray2 = text.split(" ")[2]; //I only want "you"
console.log(myArray2);

const myArray3 = text.split(" ", 3) //I only want "how are you"
console.log(myArray3);

const myArray4 = text.split("o"); //I split the string by "o" character
console.log(myArray4);

