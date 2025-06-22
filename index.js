// Remove the existing <main> with id 'main'
const main = document.getElementById('main');
main.remove();

// Create a new <h1> element
const newHeader = document.createElement('h1');

// Set its id to 'victory'
newHeader.id = 'victory';

// Set its text content to your name + " is the champion"
newHeader.textContent = 'Moha Afif is the champion';

// Add the new element to the document body
document.body.append(newHeader);
