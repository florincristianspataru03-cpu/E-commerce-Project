alert("Hello, welcome to our store!");

let totalShoes = 10; // Example variable to represent the total number of shoes in stock

function shoesDiscountMessage() {
  const discount = 20; // Example discount percentage
  console.log(`Get ${discount}% off on all shoes! Limited time offer!`);
  return `Get ${discount}% off on all shoes! Limited time offer!`;
}

// 1. Cerem datele de la utilizator
// Folosim parseFloat pentru a ne asigura că operăm cu numere, nu cu șiruri de caractere
let pretVechi = parseFloat(
  prompt("Introduceți prețul vechi al produsului (ex: 139.99):"),
);
let reducere = parseFloat(
  prompt("Introduceți procentul de reducere (ex: 20 pentru 20%):"),
);

// 2. Calculăm prețul nou folosind formula
let pretNou = pretVechi - (pretVechi * reducere) / 100;

// 3. Afișăm rezultatul
// Am adăugat toFixed(2) pentru a afișa prețul cu exact două zecimale
alert(
  "Prețul nou, după o reducere de " +
    reducere +
    "%, este: " +
    pretNou.toFixed(2) +
    " RON.",
);

// Preluăm datele de la utilizator
const totalCos = parseFloat(
  prompt(" Introduceți totalul coșului de cumpărături:(ex: 2500.50)"),
);
const pragLivrare = parseFloat(
  prompt("Introdu pragul pentru livrare gratuită 3000 RON;"),
);

let cartTotal = 520;
if (cartTotal >= 500) {
  console.log("Felicitări! Beneficiați de livrare gratuită.");
}

// Afișarea rezultatului boolean
console.log(qualifiesFreeShipping);
alert(qualifiesFreeShipping);
const raspunsCupon = prompt("Ai un cupon de reducere? (da/nu)").toLowerCase();

// Evaluarea condiției: răspunsul să fie "da" ȘI totalul să fie minim 2000
const couponApplies = raspunsCupon === "da" && totalCos >= 2000;

console.log(couponApplies);
alert(couponApplies);

// Evaluarea recomandării
const purchaseRecommended = qualifiesFreeShipping || couponApplies;

console.log(purchaseRecommended);
alert(purchaseRecommended);

function calculateDiscountedPrice(old_price, percentage) {
  return old_price - (old_price * percentage) / 100;
}

let price1 = calculateDiscountedPrice(139.99, 10);
let price2 = calculateDiscountedPrice(79.99, 10);

let new_price1 = price1.toFixed(2);
document.write(
  "Prețul după reducere pentru primul produs: " + new_price1 + " RON<br>",
);
let new_price2 = price2.toFixed(2);
document.write(
  "Prețul după reducere pentru al doilea produs: " + new_price2 + " RON<br>",
);

console.log(new_price1); // Afișează prețul după reducere pentru primul produs
console.log(new_price2); // Afișează prețul după reducere pentru al doilea produs

function verificaStoc(cantitate) {
  const existaInStoc = cantitate >= 0;

  if (cantitate > 0) {
    alert("Produsul este disponibil în stoc!");
  } else if (cantitate === 0) {
    alert("Atenție: Stoc epuizat pentru acest articol!");
  } else {
    alert("Eroare: Cantitate invalidă introdusă.");
  }

  return existaInStoc;
}

// Exemplu de apelare:
const stocCurent = parseInt(prompt("Introdu cantitatea disponibilă:"));
verificaStoc(stocCurent);

let product = {
  name: "Peppen Jacket",
  price: 139.99,
  name: "Navy Pants",
  price: 79.99,
};

function applyDiscount(product) {
  product.price = product.price - (product.price * 10) / 100;
  console.log("Prețul in cadrul functiei:", product.price);
}

applyDiscount(product);
console.log("Prețul după aplicarea reducerii:", product.price);

let cod = "DISCOUNT20";
console.log(cod.toLowerCase()); // afișează "discount20"
console.log(cod.toUpperCase()); // afișează "DISCOUNT20"

// 1. Preluăm inputul (ex: "sh734")
let inputScurt = prompt("Introdu codul scurt (ex: sh734):");

// 2. Normalizare și extragere date
inputScurt = inputScurt.trim();
let prefix = inputScurt.substring(0, 2).toUpperCase(); // Extrage "SH"
let numarModel = inputScurt.substring(2); // Extrage "734"

// 3. Formatare număr model (completare cu zerouri până la 5 cifre)
let numarModelFormatat = numarModel.padStart(5, "0");

// 4. Configurare blocuri fixe și an
const blocFix = "0000";
const anSufix = "25";

// 5. Asamblare SKU: PP-0000-NNNNN-YY
const codSKU = `${prefix}-${blocFix}-${numarModelFormatat}-${anSufix}`;

// 6. Afișare rezultat
console.log("Cod SKU Generat:", codSKU);
alert("Format complet SKU: " + codSKU);
