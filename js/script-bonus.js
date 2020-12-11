var outputContainer = document.getElementById('output');

var nome = prompt('Come ti chiami?');
var eta = prompt('Ciao ' + nome + '. Quanti anni hai?');
var anno = new Date().getFullYear() - eta;
var musica = prompt('Quindi sei nato nel ' + anno + '. Qual è il tuo genere musicale preferito?');
var film = prompt('Grande, bella la musica ' + musica + '. E invece qual è il tuo film preferito?');
var risposta = prompt('Ok, ti abbiamo conosciuto un po\', vuoi rivedere le tue informazioni? S o N?');

if(risposta === 'S') {
  outputContainer.innerText = 'Nome: ' + nome + '\nEtà: ' + eta + '\nAnno di Nascita: ' + anno + '\nMusica preferita: ' + musica + '\nFilm preferito: ' + film + '\nGrazie e arrivederci.';
}

if(risposta === 'N') {
  outputContainer.innerText = 'Ricevuto. Useremo bene le tue informazioni. A presto!'
}

if(risposta !== 'S' && risposta !== 'N') {
  outputContainer.innerText = 'Puoi rispondere solo con S o N maiuscole.\nGrazie';
}
