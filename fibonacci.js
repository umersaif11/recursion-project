function fibsIterative(n){
    let array = [];
    for(let i = 0; i < n; i++){
        if(n === 0){
            array.push(0);
        } else if(n === 1){
            array.push(1);
        } else{
            array.push(array[i - 1] + array[i - 2]);
        } 
    }
}