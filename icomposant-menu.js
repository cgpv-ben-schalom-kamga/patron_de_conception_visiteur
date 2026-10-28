/**
 * Interface Élément : tout composant de menu sait accueillir un visiteur.
 */
class IComposantMenu {
    /**
     * Methode d'acception prenant en paramètre un objet de type IVisiteur
     * @param {*} visiteur 
     */
    accept(visiteur) { throw new Error("accept() doit être implémentée"); }
}

module.exports = IComposantMenu;