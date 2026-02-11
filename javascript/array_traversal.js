const nums = [3, 5, 8, 9 ,12, 18];

for (let n of nums){
    console.log(n*2);
}

nums.forEach( (a, i) => { 
    console.log(a, i);
} );