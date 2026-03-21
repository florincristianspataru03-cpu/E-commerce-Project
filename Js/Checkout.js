// 1. Definim constanta de control
const answ = "yes";

// 2. Preluăm inputul de la utilizator
const userInput = prompt("Doriti sa continuati cumparaturile? (yes/no)");

// 3. Normalizăm inputul (litere mici) și comparăm
// Folosim un operator opțional (?.) pentru a evita erori dacă utilizatorul apasă 'Cancel'
const result = userInput?.toLowerCase() === answ;

// 4. Afișăm rezultatul logic
console.log(result);
