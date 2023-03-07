// const BUTTON = document.querySelectorAll(".container button "); //wyszukanie elementów w doc.
const NUM = document.querySelectorAll(".number");
console.log(NUM)

let currentIndex;

NUM.forEach((number, index) => {
    number.addEventListener("click", (e) =>{
        // alert(NUM.e)
        currentIndex = index;
        console.log(currentIndex+1)
    });
});