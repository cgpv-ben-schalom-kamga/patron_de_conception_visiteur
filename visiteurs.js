const IVisiteur = require("./ivisiteur");

/**
 * Visiteur pour desactiver les objets
 */
class DesactiverVisiteur extends IVisiteur {
    visitOption(option) { option.actif = false; }
    visitMenu(menu) { menu.actif = false; }
}

/**
 * Methode pour test
 * Visiteur pour afficher les objets et leur état
 */
class AfficherVisiteur extends IVisiteur {
    visitOption(option) {
        const etat = option.actif ? "actif" : "inactif";
        console.log(`Option : ${option.nom} (${etat})`);
    }
    visitMenu(menu) {
        const etat = menu.actif ? "actif" : "inactif";
        console.log(`[Menu] ${menu.nom} (${etat})`);
    }
}

module.exports = { DesactiverVisiteur, AfficherVisiteur};