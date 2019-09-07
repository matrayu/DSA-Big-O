## 1. What is the Big O for this?

#### O(1): Constant 
>    1) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog, preferably of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. Someone yells - "I do, be happy to bring him over"

#### O(n): Linear 
>    2) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog who is of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You start with the first person and ask him if he has a golden retriever. He says no, then you ask the next person, and the next, and the next until you find someone who has a golden or there is no one else to ask.

## 2. Even or odd
What is the Big O of the following algorithm? Explain your answer.

**O(n): Constant time** because no matter the size of your input, the algorithm will take the same amount of time to complete

    function isEven(value) {
        if (value % 2 == 0) {
            return true;
        }
        else
            return false;
        }
    }

## 3. Are you here?
What is the Big O of the following algorithm? Explain your answer

**O(n^k): Polynomial time** because it requires two levels of looping over an input.

    function areYouHere(arr1, arr2) {
        for (let i = 0; i < arr1.length; i++) {
            const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
                if (el1 === el2) return true;
            }
        }
        return false;
    }

## 4. Doubler
What is the Big O of the following algorithm? Explain your answer\

**O(n): Linear time** as the running time is directly proportional to the size of the input.

    function doubleArrayValues(array) {
        for (let i = 0; i < array.length; i++) {
            array[i] *= 2;
        }
        return array;
    }

### 5. Naive search
What is the Big O of the following algorithm? Explain your answer

**O(n): Linear time** as the running time is directly proportional to the size of the input. 

    function naiveSearch(array, item) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === item) {
                return i;
            }
        }
    }


###6. Creating pairs:
What is the Big O of the following algorithm? Explain your answer

**O(2^n) Exponential time** - grows rapidly with any increase in input size

    function createPairs(arr) {
        for (let i = 0; i < arr.length; i++) {
            for(let j = i + 1; j < arr.length; j++) {
                console.log(arr[i] + ", " +  arr[j] );
            }
        }
    }

### 7. Compute the sequence
What does the following algorithm do? What is its runtime complexity? Explain your answer

The algorithm creates a fibonacci sequence which is **O(n): Linear Time** as the running time is directly proportional to the size of the input.

    function compute(num) {
        let result = [];
        for (let i = 1; i <= num; i++) {

            if (i === 1) {
                result.push(0);
            }
            else if (i == 2) {
                result.push(1);
            }
            else {
                result.push(result[i - 2] + result[i - 3]);
            }
        }
        return result;
    }

### 8. An efficient search
In this example, we return to the problem of searching using a more sophisticated approach than in naive search, above. Assume that the input array is always sorted. What is the Big O of the following algorithm? Explain your answer

**O(log(n)) Logarithmic time** It'll take longer with larger inputs but the time increase slowly due to how the algorithm divides the current index.

    function efficientSearch(array, item) {
        let minIndex = 0;
        let maxIndex = array.length - 1;
        let currentIndex;
        let currentElement;

        while (minIndex <= maxIndex) {
            currentIndex = Math.floor((minIndex + maxIndex) / 2);
            currentElement = array[currentIndex];

            if (currentElement < item) {
                minIndex = currentIndex + 1;
            }
            else if (currentElement > item) {
                maxIndex = currentIndex - 1;
            }
            else {
                return currentIndex;
            }
        }
        return -1;
    }

### 9. Random element
What is the Big O of the following algorithm? Explain your answer

**Constant Time O(1)** No matter what the size of the input, the algo will take the same amount of time to complete.

    function findRandomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }