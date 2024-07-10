/* The `interface IStartup` in TypeScript is defining a blueprint for a startup object. It specifies
that any object implementing this interface must have the following properties: `nome`, `focusSettore`
`descrizione` and `prodottiEServizi`. Additionally, it requires a method `riceviIncentivo`
that takes a parameter `incentivo` of type `IIncentivo` and returns void. This method represents the 
incentive being recived by the startup. */
interface IStartup {
  nome: string; //
  focusSettore: string;
  descrizione: string;
  prodottiEServizi: string[];

  riceviIncentivo(incentivo: IIncentivo): void;
}

/* The `interface IIncentivo` is defining a blueprint for an incentive object in TypeScript. It specifies
that any object implementing this interface must have the following properties: `id` (readonly),
`descrizione`, `età`, and `criteriEleggibilità`. Additionally, it requires a method `assegnaAStartup`
that takes a parameter `startup` of type `IStartup` and returns void. This method represents the 
incentive being assigned to a startup. */
interface IIncentivo{
  readonly id: number;
  descrizione: string;
  valore: number;
  criteriEleggibilità: string;

  assegnaAStartup(startup: IStartup): void;
}

/* The `interface ICittadino` is defining a blueprint for a citizen object in TypeScript. It specifies
that any object implementing this interface must have the following properties: `nome` (name),
`cognome` (surname), `età` (age), and `interessiSportivi` (array of sports interests). Additionally,
it requires a method `partecipaAttività` that takes a parameter `startup` of type `IStartup` and
returns void. This method represents the citizen participating in activities related to a startup. */
interface ICittadino{
  nome: string;
  cognome: string;
  età: number;
  interessiSportivi: string[];

  partecipaAttività(startup: IStartup): void;
}

/* The `Startup` class in TypeScript represents a startup entity with properties such as name, sector
focus, description, and products/services, along with a method to receive incentives. */
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

/* The class `Incentivo` represents an incentive with properties such as id, description, value, and
eligibility criteria, and it can be assigned to a startup. */
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

/* The class Cittadino represents a citizen with a name, surname, age, and sports interests, capable of
participating in activities offered by a startup. */
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