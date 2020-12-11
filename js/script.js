var outputContainer = document.getElementById('output');

var nome = prompt('Qual è il tuo nome?');
var cognome = prompt('Qual è il tuo cognome?');
var colore = prompt('Qual è il tuo colore preferito?');
var anno = new Date().getFullYear();

outputContainer.innerText = 'La nuova password è: ' + nome + cognome + colore + anno;
