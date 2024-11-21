class Heroi {
    name;
    xp;

    constructor(name, xp) {
        this.name = name;
        this.xp = xp;
    }

    classifyHero() {
        let nivel = "";
        if (this.xp <= 1000) {
            nivel = "Ferro";
        }else if (this.xp <= 2000) {
            nivel = "Bronze";
        }else if (this.xp <= 5000) {
            nivel = "Prata";

        }else if (this.xp <= 7000) {
            nivel = "Ouro";

        }else if (this.xp <= 8000) {
            nivel = "Platina";

        }else if (this.xp <= 9000) {
            nivel = "Ascendente";

        }else if (this.xp <= 10000) {
            nivel = "Imortal";

        }else {
            nivel = "Radiante";
        }
        console.log(`O Herói de nome **${this.name}** está no nível de **${nivel}**.`)
    };
}


const heroi = new Heroi("Sou brabo", 5000);

heroi.classifyHero();