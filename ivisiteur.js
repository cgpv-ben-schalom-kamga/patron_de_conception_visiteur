// Interface Visiteur : une méthode de visite par type d'élément.
class IVisiteur {
    /**
     * methode pour les objets de type menu
     * @param {*} menu 
     */
    visitMenu(menu) { throw new Error("visitMenu() doit être implémentée"); }

    /**
     * methode pour les objets de type option
     * @param {*} option 
     */
    visitOption(option) { throw new Error("visitOption() doit être implémentée"); }
}


module.exports = IVisiteur;