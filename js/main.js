

var nome = prompt("Inserisci il tuo nome");

var cognome = prompt("Inserisci il tuo congnome");

var colore = prompt("Inserisci il tuo colore preferito");

var passwordSicura = nome + cognome + colore;

document.getElementById("password").innerHTML = passwordSicura + "21";
