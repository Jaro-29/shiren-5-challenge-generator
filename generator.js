const easy = ["Froggo's Fury", "Underground Manor", "Inori Cave", "Lost Well", "Gen's Turf", "Pitfall of Life", "Onigiri Hollow", "Bizarre Tower"];
const medium = ["Old Road", "Heavenly Lake", "Primordial Chasm", "Destiny's Descent", "Merchant's Hideout", "Warning Valley", "Page of Youth", "Hunter Pond", "Rousing Paradise"];
const hard = ["The Pinnacle", "Master's Footprint", "Aura Ruins", "Sleeping Lands", "Double Strike Trail", "Gorger's Manor", "Storm Forest", "Monster Hotspot", "Perilous Rocks", "Trapper's Sandbox", "Bladeless Wasteland", "Cloister of Certain Doom", "Garden of Destiny"];
const badges = ["using weapons", "using bracelets or shields", "using food", "using pots", "collapsing", "using abilities", "using direct attacks"];
const endResult = document.getElementById('endResult');


function main(){
    var diff = readInt("Input 1 for easy, 2 for medium, or 3 for hard.");
    while(diff > 3 || diff < 1){
        diff = readInt("Input 1 for easy, 2 for medium, or 3 for hard.");
    }
    pickDungeon();
}

function pickDungeon(){
    let challenge;
    if(diff = 1){
        var dungeon = Math.floor(Math.random() * easy.length);
        for(let i = 0; i < 3; i++){
            challenge += (Math.floor(Math.random() * badges.length));
        }
        endResult.textContent("Your dungeon is " + dungeon + ", and your challenges are to clear without " + challenge.0 + ", " + challenge.1 + "and " + challenge.2 ".");
    }
    if(diff = 2){
        var dungeon = Math.floor(Math.random() * medium.length);
        for(let i = 0; i < 3; i++){
            challenge += (Math.floor(Math.random() * badges.length));
        }
        endResult.textContent("Your dungeon is " + dungeon + ", and your challenges are to clear without " + challenge.0 + ", " + challenge.1 + "and " + challenge.2 ".");
    }
    if(diff = 3){
        var dungeon = Math.floor(Math.random() * hard.length);
        for(let i = 0; i < 3; i++){
            challenge += (Math.floor(Math.random() * badges.length));
        }
        endResult.textContent("Your dungeon is " + dungeon + ", and your challenges are to clear without " + challenge.0 + ", " + challenge.1 + "and " + challenge.2 ".");
    }
}

main();
