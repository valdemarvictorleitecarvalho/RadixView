export const radixAlgorithm = (function(array) {
    const getMax = (arr) => {
        const length = arr.length;
        let mx = arr[0];
        
        for (let i = 1; i < length; i++) {
          if (arr[i] > mx) mx = arr[i];
        }
        return mx;
    }
      
    const countSort = (arr, exp) => {
        const length = arr.length;
        let output = Array(length); 
        let count = Array(10).fill(0, 0);
    
        for (let i = 0; i < length; i++) {
            const digit = Math.floor(arr[i] / exp) % 10;
            count[digit]++;
        }
    
        for (let i = 1; i < 10; i++) {
            count[i] += count[i - 1];
        }
    
        for (let i = length - 1; i >= 0; i--) {
            const digit = Math.floor(arr[i] / exp) % 10;
            output[count[digit] - 1] = arr[i];
            count[digit]--;
        }
    
        return output;
    }
    
    const radixSort = (arr) => {
        const maxNumber = getMax(arr);
        let sortedArr = [...arr];
    
        for (let exp = 1; Math.floor(maxNumber / exp) > 0; exp *= 10) {
            const sortedIteration = countSort(sortedArr, exp);
            sortedArr = sortedIteration;
        }
    
        console.log(sortedArr);
        return sortedArr;
    }

    return { radixSort };
})();