const NUM = document.querySelectorAll(".number");//wyszukanie elementów w doc.
let wynik = document.querySelector(".wynik ");

let plus = document.querySelector(".plus ");
let podajwynik = document.querySelector(".podajwynik ");

// console.log(plus);
// console.log(NUM);
let currentIndex;


let downloadNumber = new Function ( NUM.forEach((number, index) => { //wywołuje liczby na ekran
    number.addEventListener("click", () =>{
        currentIndex = index;
        wynik.innerHTML = NUM[currentIndex].innerHTML;
        return(wynik.innerHTML);
    });
})
);

var number = downloadNumber();

plus.addEventListener("click", () =>{
    

    (wynik.innerHTML) = (wynik.innerHTML) + 5; 
    return(wynik.innerHTML);
    });

// console.log(wynik.innerHTML);
