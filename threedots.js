const ages = [12, 32, 34, 43];
const ages2 = [21, 34, 42, 34];
const ages3 = [40, 45, 50, 52];
const allAges = ages.concat(ages2).concat([11]).concat(ages3);
const allAges2 = [...ages, ...ages2, 500, ...ages3];

// console.log(allAges2);

const business = 1212;
const minister = 2304;
const sochib = 3004;
const takaPoisha = [230, 406, 4000];
// const maximum = Math.max(business, minister, sochib);
const maximum = Math.max(...takaPoisha);

console.log(maximum);