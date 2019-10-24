var submitButton = document.getElementById('submit'); // Déclare la variable et lui attribue l'id submit
submitButton.onclick = function() {
    var shoeSize = document.getElementById("shoeSize").value; // Récupere la valeur du champ shoeSize dans le fomulaire
  var yearOfBirth = document.getElementById("yearOfBirth").value; // Récupere la valeur du champ yearOfBirth dans le fomulaire
  if(shoeSize && yearOfBirth != '') { // "Si shoeSize et yearOfBirth ne sont pas vides"
    if (isNaN(yearOfBirth) || isNaN(shoeSize)) {  // "Si shoeSize et yearOfBirth ne sont pas des chiffres"
      alert('Merci de saisir des chiffres');
    }
    else {
      var resultat = ((shoeSize * 2 + 5) * 50 - yearOfBirth) + 1766;
      alert("Le calcul : ((" + shoeSize + " * 2 + 5) * 50 - " + yearOfBirth + ") + 1766 donne le résultat suivant : " + resultat);
    }
  }
  else {
    alert('Merci de remplir tous les champs');
  }
}
