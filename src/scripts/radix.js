export const radixAlgorithm = (function(array) {
    let steps = [];
    let currentStep = 0;
    let isPaused = true;
    
    const updateStats = (maior, exp, ratio) => {
        document.querySelector('.stats .stat-elem:nth-child(1) p').textContent = `maior = ${maior}`;
        document.querySelector('.stats .stat-elem:nth-child(2) p').textContent = `exp = ${exp}`;
        document.querySelector('.stats .stat-elem:nth-child(3) p').textContent = `m / exp = ${ratio}`;
    };    

    const updatePrimaryArray = (array) => {
        document.querySelector('.primary-array p').textContent = `[${array.join(', ')}]`;
    }

    const updateBuckets = (bucketData) => {
        const buckets = document.querySelectorAll('.buckets-container .bucket');
        
        buckets.forEach((bucket, index) => {
            const valuesContainer = bucket.querySelector('.values');
    
            valuesContainer.innerHTML = '';
    
            const values = bucketData[index] || []; 
    
            values.forEach(value => {
                const valueElement = document.createElement('p');
                valueElement.textContent = value;
                valueElement.classList.add('value'); 
                valuesContainer.appendChild(valueElement);
            });
        });
    };

    const getMax = (arr) => Math.max(...arr);
      
    const countSort = (arr, exp) => {
        const length = arr.length;
        let output = Array(length); 
        let count = Array(10).fill(0, 0);
        let buckets = Array.from({ length: 10 }, () => []);
    
        for (let i = 0; i < length; i++) {
            const digit = Math.floor(arr[i] / exp) % 10;
            count[digit]++;
            buckets[digit].push(arr[i]);
        }
    
        for (let i = 1; i < 10; i++) {
            count[i] += count[i - 1];
        }
    
        for (let i = length - 1; i >= 0; i--) {
            const digit = Math.floor(arr[i] / exp) % 10;
            output[count[digit] - 1] = arr[i];
            count[digit]--;
        }
    
        return { output, buckets };
    }
    
    const radixSort = (arr) => {
        const maxNumber = getMax(arr);
        let sortedArr = [...arr];
    
        for (let exp = 1; Math.floor(maxNumber / exp) > 0; exp *= 10) {
            const { output, buckets } = countSort(sortedArr, exp);
            sortedArr = output;

            steps.push({
                array: [...sortedArr],
                buckets: [...buckets],
                stats: { maxNumber, exp, ratio: Math.floor(maxNumber / exp) },
            });
        }
        return sortedArr;
    }

    const controller = {
        play: async () => {
            isPaused = false;

            for (let i = currentStep; i < steps.length; i++) {
                if (isPaused) break;

                const step = steps[i];
                
                updatePrimaryArray(step.array);
                updateBuckets(step.buckets);
                updateStats(step.stats.maxNumber, step.stats.exp, step.stats.ratio);

                currentStep = i + 1;
                await new Promise((resolve) => setTimeout(resolve, 4000));
            }
        },
        pause: () => {
            isPaused = true;
        },
        rewind: () => {
            if (currentStep > 0) currentStep--;
            
            const step = steps[currentStep];
            
            updatePrimaryArray(step.array);
            updateBuckets(step.buckets);
            updateStats(step.stats.maxNumber, step.stats.exp, step.stats.ratio);
        },
        forward: () => {
            if (currentStep < steps.length - 1) currentStep++;
            
            const step = steps[currentStep];
            
            updatePrimaryArray(step.array);
            updateBuckets(step.buckets);
            updateStats(step.stats.maxNumber, step.stats.exp, step.stats.ratio);
        },
    };

    return { radixSort, controller };
})();