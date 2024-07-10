var Startup = /** @class */ (function () {
    function Startup(nome, focusSettore, descrizione, prodottiEServizi) {
        this.nome = nome;
        this.focusSettore = focusSettore;
        this.descrizione = descrizione;
        this.prodottiEServizi = prodottiEServizi;
    }
    Startup.prototype.riceviIncentivo = function (incentivo) {
        console.log("La startup ".concat(this.nome, " ha ricevuto l'incentivo ").concat(incentivo.descrizione, " (codice ").concat(incentivo.id, ") dal valore di ").concat(incentivo.valore, " euro per i seguenti criteri di eleggibilit\u00E0: ").concat(incentivo.criteriEleggibilità, "."));
    };
    return Startup;
}());
var Incentivo = /** @class */ (function () {
    function Incentivo(id, descrizione, valore, criteriEleggibilità) {
        this.id = id;
        this.descrizione = descrizione;
        this.valore = valore;
        this.criteriEleggibilità = criteriEleggibilità;
    }
    Incentivo.prototype.assegnaAStartup = function (startup) {
        console.log("L'incentivo \"".concat(this.descrizione, "\" (codice ").concat(this.id, ") \u00E8 stato assegnato alla startup ").concat(startup.nome, ", che si occupa di ").concat(startup.focusSettore, " e offre i seguenti prodotti e servizi: ").concat(startup.prodottiEServizi.join(", ").replace(/,([^,]*)$/, " e$1"), "."));
        startup.riceviIncentivo(this);
    };
    return Incentivo;
}());
var Cittadino = /** @class */ (function () {
    function Cittadino(nome, cognome, età, interessiSportivi) {
        this.nome = nome;
        this.cognome = cognome;
        this.età = età;
        this.interessiSportivi = interessiSportivi;
    }
    Cittadino.prototype.partecipaAttività = function (startup) {
        console.log("Il cittadino ".concat(this.nome, " ").concat(this.cognome, " otterr\u00E0 accesso ai seguenti prodotti e servizi proposti dalla startup ").concat(startup.nome, ": ").concat(startup.prodottiEServizi.join(", ").replace(/,([^,]*)$/, " e$1"), "."));
    };
    return Cittadino;
}());
var pincoPallinoSU = new Startup("Pinco Pallino", "gestire infrastrutture sportive", "La Pinco Pallino offre la possibiità di prenotare i loro campi da gioco e attrezzature come palloni, strumenti di allenamento e tanto altro.", ["campi da gioco", "attrezzature"]);
var asdrubaliniSU = new Startup("Asdrubalini", "formazione digitale", "L'Asdrubalini, a capo della formazione digitale italiana di marketing da un decennio, offre corsi di formazione a pagamento ad un costo vantaggioso.", ["corsi di marketing"]);
var fiatSU = new Startup("Federazione Italiana Auto Torino", "Automobilistico", "La FIAT è una startup nata nel 2030 e si occupa della progettazione e assemblaggio di auto 100% elettriche.", ["Vendita di auto elettriche", "Riparazione auto", "Assistenza tecnica"]);
var incentivoEco = new Incentivo(425593, "Ecobonus", 3500000, "improntata all'ecosostenibilità");
var incentivoSport = new Incentivo(724691, "Bonus Sportivo", 5000, "incoraggiamento attività fisica");
var incentivoTecnologia = new Incentivo(827746, "Bonus Tecnologia", 3000, "integrazione nuove tecnologie");
var marcoRossi = new Cittadino("Marco", "Rossi", 22, ["Calcio", "Basket", "Pallamano", "Pallanuoto"]);
var lucaVerdi = new Cittadino("Luca", "Verdi", 43, ["Calcio", "Tennis", "Scherma"]);
incentivoSport.assegnaAStartup(pincoPallinoSU);
incentivoTecnologia.assegnaAStartup(asdrubaliniSU);
marcoRossi.partecipaAttività(pincoPallinoSU);
lucaVerdi.partecipaAttività(asdrubaliniSU);
fiatSU.riceviIncentivo(incentivoEco);
