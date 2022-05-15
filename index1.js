var sum = 0;

function addThree(){

    return(sum += 3);

   
}

sum = addThree(7);

console.log(addThree());

// introducing line 10 means: sum = 0
// sum = 0 + 3 = 3 
// sum = 3 + 7 = 10 (the output of the computation within the function block
// gets stored in the variable 'sum'in line 10, then it runs the function 
// again, giving you -- 3 + 7)