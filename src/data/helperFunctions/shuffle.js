// Randomise array element order in-place using Durstenfeld shuffle algorithm

export const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i -=1 ) {
        let j = Math.floor(Math.random() * (i + 1));
        // swap elements array[i] and array[j] using destructuring assignment
        [array[i], array[j]] = [array[j], array[i]];
    };
    return array;
};