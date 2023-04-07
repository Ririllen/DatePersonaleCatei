class Catel{
    constructor(nume, rasa, culoarePar, anulNasterii,pasaport) {
        this.nume = nume;
        this.rasa = rasa;
        this.culoarePar = culoarePar;
        this.anulNasterii = anulNasterii;
        this.vaccin = [];
        this.passport = pasaport;
    }

    calculeazaVarsta(){
        const dataCurenta = new Date();
        return dataCurenta.getFullYear() - this.anulNasterii;
    }

    afisearaVarsta(){
        return `varsta de ${this.calculeazaVarsta()} ani`;
    }

    arePasaport(){
        return `${!this.passport ? "nu" : ""} are voie să iasă din Moldova`;
    }

    informatiiCatel(){
        return `${this.nume} este un câine de rasă ${this.rasa}, are culoarea ${this.culoarePar}, ${this.afisearaVarsta()}, ${this.arePasaport()} și are ${this.vaccin.length} vaccinuri`;
    }
     
    adaugareVaccin(vaccin) {
        this.vaccin.push(vaccin);
    }
    
    afiseazaIstoriculVaccinarii(){
        if (this.vaccin.length === 0){
            console.log(this.nume +" nu a făcut niciun vaccin până acum");
            return;
        }

        for(let i=0; i < this.vaccin.length; i++){
           console.log("Vaccin: "+ this.vaccin[i].nume + "; data de: "+ this.vaccin[i].data);
        }
    }
}

class Vaccin{
    constructor(nume,data){
        this.nume = nume;
        this.data = data;
    }
}

const busea = new Catel('Busea','yorkshire terrier', 'aurie','2021');
const vaccinHepatitaCanina = new Vaccin("hepatită canină", "2023-03-17");

console.log(busea.informatiiCatel());
console.log(busea.afisearaVarsta());
console.log(busea.arePasaport());
busea.afiseazaIstoriculVaccinarii();
// busea.adaugareVaccin(vaccinHepatitaCanina );
// busea.afiseazaIstoriculVaccinarii();

const alf = new Catel('Alf','hasky', 'alb','2020');

const bernard = new Catel('Bernard','saint bernard', 'cafeniu-alb','2022');
