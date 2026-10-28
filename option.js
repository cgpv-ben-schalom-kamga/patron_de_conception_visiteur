const IComposantMenu = require("./icomposant-menu");

/**
 *  Élément concret (A): Implemente la methode d'acceptation définis dans l'interface élément.
 */
class Option extends IComposantMenu {
    constructor(nom, actif = true) {
        super();
        this.nom = nom;
        this.actif = actif;
    }

    //Implementation de l'interface element
    accept(visiteur) {
        visiteur.visitOption(this);
    }
}

module.exports = Option;