// 1a
const jPDinos = [
    "Velociraptors",
    "Tyrannosaurs Rex",
    "Dilophosaurs"
];

// 1b
function seeDinos(i, ...j) {
    console.log(i);
    console.log(j);
};
seeDinos(...jPDinos);

// 2a
const jPCharacters = {
    alanGrant: "Sam Neill", 
    ellieSattler: "Laura Dern", 
    ianMalcolm: "Jeff Goldblum"
};

// 2b
seeCharacters = ({ellieSattler}) => {
    console.log(ellieSattler);
}
seeCharacters(jPCharacters);

// 3a
const jurassicParkMovies = [
    {
        one: "Jurassic Park", 
        two: "The Lost World: Jurassic Park", 
        three: "Jurassic Park III"
    },
    {
        four: "Jurassic World", 
        five: "Jurassic World: Fallen Kingdom", 
        six: "Jurassic World: Dominion"
    }
];

// 3b
seeJPMovies = ({one, two, three}, {four, five, six}) => {
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
    console.log(five);
    console.log(six);
}
seeJPMovies(...jurassicParkMovies);