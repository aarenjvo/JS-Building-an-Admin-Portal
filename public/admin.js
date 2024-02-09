
// Your Code Here

async function updateAmount(myInput) {
    var newQuantity = document.getElementById(myInput).value;
    var bookId;


switch (myInput) {
    case 'shinobi':
        bookId = 1;
        break;
    case 'tessWonder':
        bookId = 2;
        break;
    case 'legendsArath':
        bookId = 3;
        break;
    case 'W∀RP':
        bookId = 4;
        break;
    default:
        break;
};

const options = {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "id": bookId,
        "quantity": newQuantity,
    }),
};

let myResponse = await fetch('http://localhost:3001/updateBook', options)

let updatedBook = await myResponse.json();
console.log(updatedBook);

}
