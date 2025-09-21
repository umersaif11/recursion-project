//fibonacci sequence array using for loop
function fibsIterative(n){
    let array = [];
    for(let i = 0; i < n; i++){
        if(i === 0){
            array.push(0);
        } else if(i === 1){
            array.push(1);
        } else{
            array.push(array[i - 1] + array[i - 2]);
        } 
    }
    return array;
}
//fibonacci sequence array using recursion
function fibsRecursive(n){
    if( n === 1) return [0];
    if( n === 2) return [0, 1];
    let array = fibsRecursive(n - 1);
    return [...array, array[n - 2] + array[n - 3]];
}