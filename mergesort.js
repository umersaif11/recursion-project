function mergesort(array){
    if(array.length <= 1){
        return array;
    } else {
        const mid = Math.floor(array.length / 2);
        const leftHalf = array.slice(0, mid);
        const rightHalf = array.slice(mid);

        let sortLeft = mergesort(leftHalf);
        let sortRight = mergesort(rightHalf);

        let i = 0;
        let j = 0;
        let finalArray = [];
    }
}