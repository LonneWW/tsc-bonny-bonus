interface IStartup {
  nome: string; //
  focusSettore: string;
  descrizione: string;
  prodottiEServizi: string[];

  riceviIncentivo(incentivo: IIncentivo): void;
}

interface IIncentivo{
  readonly id: number;
  descrizione: string;
  valore: number;
  criteriEleggibilità: string;

  assegnaAStartup(startup: IStartup): void;
}

interface ICittadino{
  nome: string;
  cognome: string;
  età: number;
  interessiSportivi: string[];

  partecipaAttività(startup: IStartup): void;
}

class Startup implements IStartup{
  constructor(
    public nome: string,
    public focusSettore: string, 
    public descrizione: string, 
    public prodottiEServizi: string[]){
  }

  riceviIncentivo(incentivo: IIncentivo): void {
    console.log(`La startup ${this.nome} ha ricevuto l'incentivo ${incentivo.descrizione} (codice ${incentivo.id}) dal valore di ${incentivo.valore} euro per i seguenti criteri di eleggibilità: ${incentivo.criteriEleggibilità}.`)
  }
}

class Incentivo implements IIncentivo{
  constructor(
    public readonly id: number, 
    public descrizione: string, 
    public valore: number, 
    public criteriEleggibilità: string){
  }

  assegnaAStartup(startup: IStartup): void {
    console.log(`L'incentivo "${this.descrizione}" (codice ${this.id}) è stato assegnato alla startup ${startup.nome}, che si occupa di ${startup.focusSettore} e offre i seguenti prodotti e servizi: ${startup.prodottiEServizi.join(", ").replace(/,([^,]*)$/, " e$1")}.`)
    startup.riceviIncentivo(this);
  }
}

class Cittadino implements ICittadino{
  constructor(
    public nome: string, 
    public cognome: string, 
    public età: number, 
    public interessiSportivi: string[]){
  }

  partecipaAttività(startup: IStartup): void {
    console.log(`Il cittadino ${this.nome} ${this.cognome} otterrà accesso ai seguenti prodotti e servizi proposti dalla startup ${startup.nome}: ${startup.prodottiEServizi.join(", ").replace(/,([^,]*)$/, " e$1")}.`)
  }
}


let pincoPallinoSU: Startup = new Startup(
  "Pinco Pallino",
  "gestire infrastrutture sportive", 
  "La Pinco Pallino offre la possibiità di prenotare i loro campi da gioco e attrezzature come palloni, strumenti di allenamento e tanto altro.", 
  ["campi da gioco", "attrezzature"])

let asdrubaliniSU: Startup = new Startup(
  "Asdrubalini", 
  "formazione digitale", 
  "L'Asdrubalini, a capo della formazione digitale italiana di marketing da un decennio, offre corsi di formazione a pagamento ad un costo vantaggioso.", 
  ["corsi di marketing"]);

let fiatSU: Startup =  new Startup(
  "Federazione Italiana Auto Torino",
  "Automobilistico", 
  "La FIAT è una startup nata nel 2030 e si occupa della progettazione e assemblaggio di auto 100% elettriche.", 
  ["Vendita di auto elettriche", "Riparazione auto", "Assistenza tecnica"]);

let incentivoEco: Incentivo = new Incentivo(
  425593, 
  "Ecobonus", 
  3500000, 
  "improntata all'ecosostenibilità");

let incentivoSport: Incentivo = new Incentivo(
  724691, 
  "Bonus Sportivo", 
  5000, 
  "incoraggiamento attività fisica");

let incentivoTecnologia: Incentivo = new Incentivo(
  827746, 
  "Bonus Tecnologia", 
  3000, 
  "integrazione nuove tecnologie");

let marcoRossi: Cittadino = new Cittadino(
  "Marco", 
  "Rossi", 
  22, 
  ["Calcio", "Basket", "Pallamano", "Pallanuoto"]);

let lucaVerdi: Cittadino = new Cittadino(
  "Luca", 
  "Verdi", 
  43, 
  ["Calcio", "Tennis", "Scherma"]);


incentivoSport.assegnaAStartup(pincoPallinoSU);
incentivoTecnologia.assegnaAStartup(asdrubaliniSU);

marcoRossi.partecipaAttività(pincoPallinoSU);
lucaVerdi.partecipaAttività(asdrubaliniSU);

fiatSU.riceviIncentivo(incentivoEco);