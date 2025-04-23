// Affiche les valeurs saisies
function appendValue(value) {
    document.getElementById("display").value += value;
  }
  
  // Supprime tout
  function clearDisplay() {
    document.getElementById("display").value = "";
  }
  
  // Supprime le dernier caractère
  function deleteLast() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
  }
  
  // Calcule le résultat mathématique
  function calculateResult() {
    const display = document.getElementById("display");
    try {
      display.value = eval(display.value); // Attention : 'eval' doit être utilisé avec précaution
    } catch {
      display.value = "Erreur";
    }
  }
  
  // Calcule les fonctions trigonométriques
  function calculateTrig(func) {
    const display = document.getElementById("display");
    try {
      const value = parseFloat(display.value);
      if (func === "sin") display.value = Math.sin(value);
      if (func === "cos") display.value = Math.cos(value);
      if (func === "tan") display.value = Math.tan(value);
    } catch {
      display.value = "Erreur";
    }
  }
  
  // Calcule la racine carrée
  function calculateSqrt() {
    const display = document.getElementById("display");
    try {
      const value = parseFloat(display.value);
      display.value = Math.sqrt(value);
    } catch {
      display.value = "Erreur";
    }
  }
  
  // Calcule le logarithme
  function calculateLog() {
    const display = document.getElementById("display");
    try {
      const value = parseFloat(display.value);
      display.value = Math.log10(value);
    } catch {
      display.value = "Erreur";
    }
  }
  
  // Calcule l'exponentielle
  function calculateExp() {
    const display = document.getElementById("display");
    try {
      const value = parseFloat(display.value);
      display.value = Math.exp(value);
    } catch {
      display.value = "Erreur";
    }
  }
  