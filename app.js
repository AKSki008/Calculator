const NUM = document.querySelectorAll(".number");//wyszukanie elementów w doc.
var wynik = document.querySelector(".wynik ");

var plus = document.querySelector(".plus ");

// console.log(plus);
// console.log(NUM);
let currentIndex;

let downloadNumber = new Function ( NUM.forEach((number, index) => { //wywołuje liczby na ekran
    number.addEventListener("click", (e) =>{
        currentIndex = index;
        wynik.innerHTML = NUM[currentIndex].innerHTML;
        return(wynik.innerHTML);
    });
})
);


downloadNumber();
plus.addEventListener("click", (firstNumber, secondNumber) =>{
    firstNumber = wynik.innerHTML;
    alert(firstNumber);
    downloadNumber()
    secondNumber = wynik.innerHTML;
    alert(secondNumber);
    });

