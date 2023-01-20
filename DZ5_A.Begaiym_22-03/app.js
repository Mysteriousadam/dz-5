//1
function reverseStr (str){
    var a = "привет";
    for ( i = 0; i < str.length; i++){
        a += str[(str.length - 1) - i];
    }
    return a;
}

console.log(reverseStr("привет >- "))

//2
const getAverage = (numbers) => {
    const sum = numbers.reduce((acc, number) => acc + number, 0);
    const length = numbers.length;
    return sum / length;
};

const numbers = [1, 2, 3, 4];
console.log(getAverage(numbers));