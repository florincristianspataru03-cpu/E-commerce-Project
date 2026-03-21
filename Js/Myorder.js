// 1. Colectarea datelor de la utilizator
const totalCos = 2500; // Exemplu: valoarea totală a coșului
const pragLivrare = 3000; // Exemplu: pragul pentru livrare gratuită
const raspunsCupon = prompt("Ai un cupon de reducere? (da/nu)").toLowerCase();

// 2. Evaluarea expresiilor logice conform cerințelor
const qualifiesFreeShipping = totalCos >= pragLivrare;

const couponApplies = raspunsCupon === "da" && totalCos >= 2000;

const purchaseRecommended = qualifiesFreeShipping || couponApplies;

// 3. Afișarea rezultatelor în consolă
console.log("qualifiesFreeShipping:", qualifiesFreeShipping);
console.log("couponApplies:", couponApplies);
console.log("purchaseRecommended:", purchaseRecommended);

// Afișare rapidă a rezultatelor finale
alert(
  `Livrare gratuită: ${qualifiesFreeShipping}\n` +
    `Cupon aplicat: ${couponApplies}\n` +
    `Achiziție recomandată: ${purchaseRecommended}`,
);


