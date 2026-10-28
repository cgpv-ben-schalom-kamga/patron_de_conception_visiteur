const Option = require("./option");
const Menu = require("./menu");
const { DesactiverVisiteur, AfficherVisiteur } = require("./visiteurs");

// Construction de l'arborescence 
const boutique = new Menu("Boutique");
boutique.ajouter(new Option("Nouveautés"));
boutique.ajouter(new Option("Promotions"));

const categories = new Menu("Catégories"); 
categories.ajouter(new Option("Hommes"));
categories.ajouter(new Option("Femmes"));
boutique.ajouter(categories);            

// On applique des visiteurs sur la MÊME structure, sans la modifier
const afficher = new AfficherVisiteur();

console.log("=== AVANT désactivation ===");
boutique.accept(afficher);

boutique.accept(new DesactiverVisiteur());

console.log("\n=== APRÈS désactivation ===");
boutique.accept(afficher);
