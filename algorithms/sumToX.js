const sumToX = (arr,sum) => {
    let isEqual = false;
    while (arr.length > 0 && isEqual === false){
        const current = arr.shift();
        isEqual = arr.some(item => item + current === sum);
    }
    return isEqual;
};

console.log(sumToX([1,2,3,4,5,6,7,8,9,10], 18));
