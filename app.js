const NUM = document.querySelectorAll(".number");//wyszukanie elementów w doc.
var wynik = document.querySelector(".wynik ");

var plus = document.querySelector(".plus ");

// console.log(plus);
// console.log(NUM);
let currentIndex;

let downloadNumber = NUM.forEach((number, index) => { //funkcja wywołuje liczby na ekran
    number.addEventListener("click", (e) =>{
        currentIndex = index;
        wynik.innerHTML = NUM[currentIndex].innerHTML;
    });
});

plus.addEventListener("click", (number) =>{
    var firstNumber = number;
    alert(firstNumber);
    // var secondNumber =downloadNumber();
    // console.log(secondNumber);
    });
