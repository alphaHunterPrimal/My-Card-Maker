import db from './db.json';


const Bg = {
    "Spell": db.bg.spell,
    "Creature": db.bg.creature
}
const Bgatual = Bg.Spell;

function Background(Bgatual) {
    return Bgatual
};


console.log(Background(Bgatual))

module.exports = { 
    Bg, Bgatual, Background
}