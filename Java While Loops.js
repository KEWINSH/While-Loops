// Oppgave 1

//   var n = 0;

// while (n < 52) {
//    if (n % 2 == 0) {
//       document.write(n+ " ")
//    }
//    n++;
// }

// Oppgave 2
// document.write('<br>');
// n = 0;
// while (n < 100){
//     n++;
//     if (n % 3 == 0 || n % 5 ==0) {
//         document.write(n + " ")
//     }
// }

// Oppgave 3 
// document.write('<br>');

// var Langside = window.prompt("Langside")
// var Kortside = window.prompt("Kortside")

// document.write("Areal: " + (Langside * Kortside) + " | Omkrets: " + (Kortside*2 + Langside*2))

// Oppgave 4

// var number = window.prompt('Hvilket tall lurer du på?');
// var temp = 0;
// for(var i=1;i <= number/2 ; i++)
//     {
//         if(number%i === 0)
//         {
//             temp += i;
//         }
//     }
//     if(temp === parseInt(number) && temp !== 0)
//         {
//     document.write("It is a perfect number.");
//         } 
//     else
//         {
//     document.write("It is not a perfect number.");
//         }

// Oppgave 5 
// document.write("<br>")

// n = 0
// var color = "blue"
// while (n < 10) {
//     n++
//     if(n % 2 == 0){
//         color = "red" 
//     }else {
//         color = "blue"
//     }
//     document.write("<p style='color:"+color+" '> " + n + "</p>") 
// }


// Oppgave 6
// document.write("<br>")

// var passord = "123";

// var mulighet = 4;
// while (mulighet>0) {
//     var mesaj = prompt("Skriv ditt passord")
//     mulighet--;
//     if (mulighet == 0) break;
//     if (mesaj == passord) {
//         document.write("Velkommen :)")
//         break;
//     }
//     else {
//         alert("Du har" + mulighet + "igjen");
//     }
// }
// if(mulighet == 0){
//     document.write("DU KAN IKKE INNGÅ UTEN TILLATELSE");
// }

// Oppgave 7

var q = 1
var v = 0

while (q !== 0) {
    q = parseInt(window.prompt("Legg Til Tall"))
    v += q;
    document.write(q + "<br>")
}

document.write("Summen av alle nummerene er:" + v)