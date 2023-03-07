const NUM = document.querySelectorAll(".number");

var wynik = document.querySelector(".wynik "); //wyszukanie elementów w doc.
console.log(wynik);
console.log(NUM);
let currentIndex;

NUM.forEach((number, index) => {
    number.addEventListener("click", (e) =>{
        currentIndex = index;
        wynik.innerHTML = NUM[currentIndex].innerHTML;
        // console.log(NUM[currentIndex].innerHTML);
    });
});