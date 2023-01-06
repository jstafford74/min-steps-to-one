function minStepsToOne(n) {
    if (n <= 1) {
        return 0;
    }

    //Recursive relations
    //sub1
    let steps = minStepsToOne(n - 1);

    //divBy2
    if (n % 2 === 0) {
        let divby2 = minStepsToOne(n / 2);
        steps = Math.min(steps, divby2);
    }

    //divby3
    if (n % 3 === 0) {
        let divby3 = minStepsToOne(n / 3);
        steps = Math.min(steps, divby3);
    }

    //return min steps to 1 from n
    let result = 1 + steps;
    return result;
}

//hash table
let cache = {};

function minStepsToOneMemo(n) {
    if (n <= 1) {
        return 0;
    }

    //check for repeated states
    if (n in cache) {
        return cache[n]
    }
    //Recursive relations
    //sub1
    let steps = minStepsToOneMemo(n - 1);

    //divBy2
    if (n % 2 === 0) {
        let divby2 = minStepsToOneMemo(n / 2);
        steps = Math.min(steps, divby2);
    }

    //divby3
    if (n % 3 === 0) {
        let divby3 = minStepsToOneMemo(n / 3);
        steps = Math.min(steps, divby3);
    }

    //return min steps to 1 from n
    let result = 1 + steps;

    // store result in cache

    cache[n] = result;
    return result;
}

function minStepsToOneTab(n) {
    // init tabulation data structure

    let tab = new Array(n + 1);

    //apply base case to tab
    tab[1] = 0;
    // loop tab, filling solutions
    for (let i = 2; i <= n; i++) {
        let steps = tab[i - 1]

        //divBy2
        if (i % 2 === 0) {
            let divby2 = tab[i / 2]
            steps = Math.min(steps, divby2);
        }

        //divby3
        if (i % 3 === 0) {
            let divby3 = tab[i / 3]
            steps = Math.min(steps, divby3);
        }

        //return min steps to 1 from n
        let result = 1 + steps;

        // store result in cache

        tab[i] = result;
    }
    // return min steps to 1 from n
    return tab[n]
}


// console.time('Brute force recursion');
// console.log(minStepsToOne(10000));
// console.timeEnd('Brute force recursion');

// console.time('Memoization');
// console.log(minStepsToOneMemo(10000));
// console.timeEnd('Memoization');

console.time('Tabulation');
console.log(minStepsToOneTab(10000000));
console.timeEnd('Tabulation');