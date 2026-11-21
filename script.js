const burger = document.querySelector("#burger");
const liens = document.querySelector("#liens");
if (burger && liens) {
    burger.addEventListener("click",function (){
        liens.classList.toggle("ouvert");
    });
}
const filtres = document.querySelectorAll(".filtre"); 
const produits = document.querySelectorAll(".produit");
filtres.forEach(function (filtre){
    filtre.addEventListener("click",function (){
        const categorie = filtre.dataset.cat;
        filtres.forEach(function(bouton){
            bouton.classList.remove("actif");
        });
        filtre.classList.add("actif");
        produits.forEach(function (produit){
            if (
                categorie === "tous" || produit.dataset.cat == categorie
            ) {
                produit.style.display = "block";
            } else {
                produit.style.display = "none";
            }
        });
    });

});
const formulaire = document.querySelector("#formulaire");
const retour = document.querySelector("#retour");
if (formulaire && retour) {
    formulaire.addEventListener("submit", function (event){
        event.preventDefault();
        const nom = document.querySelector("#nom").value;
        const email = document.querySelector("#email").value;
        const message = document.querySelector("#message").value;
        if ( nom === "" || email === "" || message == "") {
            retour.textContent = "Veuillez remplir tous les champs.";
            retour.classList.remove("succes");
            retour.classList.add("erreur");
                    
                } else {
                    retour.textContent = "Merci ! Votre message est prêt.";
                    retour.classList.remove("erreur");
                    retour.classList.add("succes");
            }       
        });
}