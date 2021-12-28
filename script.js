const naam = prompt("Welkom, wat is je naam?:");
document.write("<h2> Hallo ", naam, " Laten we een leuk raadspel spelen</h2>");

const getalOnder = prompt("Geef een voorkeur op: Het te raden getal moet boven de:");
const getalBoven = prompt("Geeft een voorkeur op: Het te raden getal moet onder de:");
document.write("<h3>Je moet een getal raden tussen de ", getalOnder, " en de ", getalBoven, ", Is dat duidelijk? </h3>");

const willekeurigNummer = (Math.random() * (getalBoven - getalOnder));
const afgerond = (Math.floor(willekeurigNummer) + parseInt(getalOnder));

let raden = "Geweldig";
let aantalPogingen = 0
document.write('<div class = "container">');
while (raden != afgerond) {

    aantalPogingen = (aantalPogingen + 1);

    if (aantalPogingen > 5) {
        document.write("<br>Je hebt 5 pogingen gedaan, het is helaas niet gelukt!<br>");
        raden = afgerond
    }
    else {
        let raden = prompt("Raad een getal tussen de " + getalOnder + "en " + getalBoven + ".");

        if (raden == afgerond) {
            document.write("<br><h1>Je hebt het getal goed geraden</h1><br>")
            break
        }
        else {
            document.write("Helaas, ", raden, " is niet goed!<br>Je hebt nog ", (5 - aantalPogingen), " pogingen ", naam, "<br><br>")
        }
    }

}
