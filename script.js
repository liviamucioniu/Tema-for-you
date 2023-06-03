// La un hotel pentru animale:

var numberOfDogs = 12;
var numberOfCats = 5;
var numberOfEmployees = 3;
var nrAnimale = numberOfDogs + numberOfCats;
// console.log(nrAnimale);


// Implementati urmatoarele functii:

// a) stiind ca hotelul poate primi maxim 15 caini, implementati o conditie care verifica daca mai sunt locuri disponibile pentru caini si afisati in consola mesaje corespunzatoare

function numarLocuri () {
if (numberOfDogs <= 15){
    console.log('Mai avem locuri disponible')
} else {
    console.log('Nu mai sunt locuri')
 }
}
var raspunsA = numarLocuri (numberOfDogs);

// b) stiind ca hotelul poate primi maxim 30 de animale in acelasi timp, implementati o conditie care verifica daca hotelul este supra-aglomerat

 function totalAnimale () {
    if (nrAnimale <= 30) {
        console.log('Avem locuri libere!');
    } else {
        console.log("Hotelul este supra-aglomerat!")
    }
 }

 var raspunsB = totalAnimale(nrAnimale);

// c) pentru fiecare pisica trebuie sa fie disponibile cate 3 jucarii, iar pentru fiecare caine cate 5. Calculati si afisati cate jucarii trebuie sa cumpere cei de la hotel pentru animale.
 
function totalJucarii() {
var numarJucarii = (numberOfDogs * 5) + (numberOfCats * 3)
console.log('Total jucarii este', numarJucarii)
}

var raspunsC = totalJucarii(numberOfDogs,numberOfCats)


// d) daca numarul total al animalelor este mai mic de 20 sau sunt mai multi de 5 angajati, consideram ca animalele sunt bine ingrijite, implementati o conditie care sa verifice si sa afiseze in consola mesaje corespunzatoare

function ingrijireAnimale (nrAnimale, numberOfEmployees) {
    if ((nrAnimale < 20) || (numberOfEmployees > 5)){
        console.log('Animalele sunt bine ingrijite');
    } else{
        console.log('Animalele nu sunt bine ingrijite')
    }
}
 var raspunsD = ingrijireAnimale();

// e) numarul norocos al patronului este 7. Daca la orice moment cand viziteaza hotelul (este si el acolo!) numarul total al fiintelor din interior este multiplu de 7, fiecare angajat va primi un bonus de 100 de lei. Calculati si afisati in consola cati bani il va costa o astfel de vizita.

var fiinte = nrAnimale + numberOfEmployees + 1;
function vizita(){
    if (fiinte % 7 === 0){
        var bonus = numberOfEmployees * 100;
        console.log('Bonusul este de', bonus);
    
    }
}
raspunsE = vizita();

// f) daca avem un numar impar de caini si un numar impar de pisici, afisam "Paritate SI"

function paritateSi(numberOfDogs, numberOfCats){
    if ((numberOfDogs % 2 === 1) && (numberOfCats % 2 === 1)){
        console.log("Paritate SI");

    } else {
        console.log(' Imparitate Si');
    }
}

raspunsF = paritateSi(numberOfCats,numberOfDogs);

// g) daca avem un numar impar de caini sau un numar impar de pisici, afisam "Paritate Sau"

function paritateSau(numberOfDogs, numberOfCats){
    if ((numberOfDogs % 2 === 1) || (numberOfCats % 2 === 1)){
        console.log("Paritate Sau");

    } else {
        console.log('Imparitate Sau');
    }
}

raspunsG = paritateSau(numberOfDogs,numberOfDogs);