function addNums(a, b){
   var c = a+b;
    console.log(c);   
}

addNums(345, 232);

// console.log(c);

const calcAvg = function(m1, m2, m3){
    const avg = (m1+m2+m3)/3;
    // console.log(avg);
    
    return avg;
}

const avg = calcAvg(45, 67, 89);

console.log(avg);

// arrow function - added in ES6

const checkEven = (num) => {
    if(num%2 == 0){
        return true;
    }else{
        return false;
    }
}

const isEven = checkEven(45);
console.log(isEven);