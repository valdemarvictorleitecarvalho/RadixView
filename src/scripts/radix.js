import gsap from "gsap";

export const radixAlgorithm = (function(array) {
    let steps = [];
    let currentStep = 0;
    let isPaused = true;
    let firstFoward = true;

    const updateStats = (maior, exp, ratio) => {
        document.querySelector('.stats .stat-elem:nth-child(1) p').textContent = `maior = ${maior}`;
        document.querySelector('.stats .stat-elem:nth-child(2) p').textContent = `exp = ${exp}`;
        document.querySelector('.stats .stat-elem:nth-child(3) p').textContent = `m / exp = ${ratio}`;
    };    

    const updatePrimaryArray = (array) => {
        const primaryArrayContainer = document.querySelector('.primary-array p');
        
        primaryArrayContainer.textContent = `[${array.join(', ')}]`;
        
        gsap.to(primaryArrayContainer, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
                primaryArrayContainer.textContent = `[${array.join(', ')}]`;
                gsap.to(primaryArrayContainer, { opacity: 1, duration: 0.3 });
            },
        });
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

                gsap.from(valueElement, {
                    y: -20,
                    opacity: 0,
                    duration: 0.5,
                    ease: 'back.out(1.7)',
                });
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
        steps = [];
        currentStep = 0;
    
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
            if (!isPaused) return;

            isPaused = false;
            firstFoward = true;

            for (let i = currentStep; i < steps.length; i++) {
                if (isPaused) break;

                const step = steps[i];
                
                updatePrimaryArray(step.array);
                updateBuckets(step.buckets);
                updateStats(step.stats.maxNumber, step.stats.exp, step.stats.ratio);

                currentStep = i + 1;
                await new Promise((resolve) => setTimeout(resolve, 5000));
            }
        },
        pause: () => {
            isPaused = true;
        },
        rewind: () => {
            if (isPaused && currentStep > 0) {
                currentStep--; 
                const step = steps[currentStep];
                
                updatePrimaryArray(step.array);
                updateBuckets(step.buckets);
                updateStats(step.stats.maxNumber, step.stats.exp, step.stats.ratio);
            }
        },
        forward: () => {
            if (isPaused && currentStep < steps.length - 1 && !firstFoward) {
                currentStep++; 
                const step = steps[currentStep];
                
                updatePrimaryArray(step.array);
                updateBuckets(step.buckets);
                updateStats(step.stats.maxNumber, step.stats.exp, step.stats.ratio);
            }
            else {
                const step = steps[currentStep];
                
                updatePrimaryArray(step.array);
                updateBuckets(step.buckets);
                updateStats(step.stats.maxNumber, step.stats.exp, step.stats.ratio);
            }
            firstFoward = false;
        },
        skip: () => {
            if (isPaused) {
                currentStep = steps.length - 1

                const step = steps[currentStep];

                updatePrimaryArray(step.array);
                updateBuckets(step.buckets);
                updateStats(step.stats.maxNumber, step.stats.exp, step.stats.ratio);
            }
        }
    };

    return { radixSort, controller };
})();