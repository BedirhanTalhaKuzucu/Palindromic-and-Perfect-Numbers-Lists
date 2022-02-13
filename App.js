let firstNumber = document.getElementById("first_number");
let secondNumber = document.getElementById("second_number");

let palindromeButton = document.getElementById("palindrome");
let perfectButton = document.getElementById("perfect_number");

let palindromeList = document.getElementById("palindrome_list");
let perfectList = document.getElementById("perfect_list");



function reverseString(str) {
    return str.split("").reverse().join("");
};


function palindromeFunction() {
    myArray = [];
    for (let i = firstNumber.value; i < secondNumber.value; i++) {myArray.push(i)};
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].toString() == reverseString( myArray[i].toString())) {
            palindromeList.value += myArray[i].toString() + "\n"    };    
    }

    firstNumber.value = "";
    secondNumber.value = "";
};


function perfectFunction() {
    myArray = [];
    for (let i = firstNumber.value; i < secondNumber.value; i++) {myArray.push(i)};

    for (let i = 0; i < myArray.length; i++) {
        myListSum = [];
        sum = 0;
        for (let index = 0; index < myArray[i]; index++) {
            if (myArray[i] % index == 0 ) {
                myListSum.push(index)
            } };

        for (let index = 0; index < myListSum.length; index++) {sum += myListSum[index]; };
        if ( sum == myArray[i]){ perfectList.value += myArray[i].toString() + "\n";}

    };

    firstNumber.value = "";
    secondNumber.value = "";

};


palindromeButton.addEventListener("click", palindromeFunction);
perfectButton.addEventListener("click", perfectFunction);



/* let a = 28;
let myArray = [];
let sum = 0;

for (let i = 0; i < a; i++) {
    if (a % i == 0) {myArray.push(i)}  
}

for (let i = 0; i < myArray.length; i++) {
    sum += myArray[i]  
}

if (sum == a) {
    console.log(a);
} */



