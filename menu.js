const IComposantMenu = require("./icomposant-menu");

/**
 * Élément concret (B) : Implemente la methode d'acceptation définis dans l'interface élément.
 */
class Menu extends IComposantMenu {
    constructor(nom, actif = true) {
        super();
        this.nom = nom;
        this.actif = actif;
        this.enfants = [];
    }

    /**
     * Methode pour le test
     * Permet l'ajout d'enfant dans un menu
     * @param {*} enfant
     */
    ajouter(enfant) {
        this.enfants.push(enfant);
    }

    /**
     * Implementation de l'interface element
     * @param {*} visiteur 
     */
    accept(visiteur) {
        visiteur.visitMenu(this);      
        for (const enfant of this.enfants) {
            enfant.accept(visiteur);    
        }
    }
}

module.exports = Menu;