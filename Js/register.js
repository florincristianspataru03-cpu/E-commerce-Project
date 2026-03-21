function verificaAutentificareAdmin(username, password) {
  // Verificăm dacă ambele condiții sunt adevărate
  const esteAutentificat = username === "admin" && password === "admin12345";

  // Afișăm rezultatul folosind alert()
  alert(esteAutentificat);
}

// Exemplu de apelare a funcției:
const utilizator = prompt("Introdu username:");
const parola = prompt("Introdu parola:");

verificaAutentificareAdmin(utilizator, parola);

// Inițializăm variabila pentru numărare
let numarClicuri = 0;

// Selectăm butonul din pagină
const buton = document.getElementById("btnContor");

// Adăugăm un "ascultător de evenimente" pentru clic
buton.addEventListener("click", function () {
  // Incrementăm contorul
  numarClicuri++;

  // Afișăm rezultatul în consolă
  console.log("Număr total de clicuri: " + numarClicuri);
});
