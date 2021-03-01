
/*const Bg = {
    "Queen": "queen.png",
    "Creature": "creature.png",
    "Spell": "spell.png",
    "Trap": "trap.png",
    "Terrain": "terrain.png",
    "Construction": "contruction.png"
}
var Bgatual = Bg.Queen;

/*function Background(Bgatual) {
    return Bgatual
}; */


/*console.log(Background(Bgatual)) -> queen.png

module.exports = { 
    Bg, Bgatual, /*Background}*/
// SQL keywords
 var keywords = ["SELECT", "FROM", "WHERE", "LIKE", "BETWEEN", "UNION", "FALSE", "NULL", "FROM", "TRUE", "NOT", "ORDER", "GROUP", "BY", "NOT", "IN"];
 // Keyup event
 document.getElementById('text').addEventListener('keyup', e => {
     // Space key pressed
 if (e.keyCode == 32) {
    // Loop through words
    str = e.target.innerText;
    chunks = str
      .split(new RegExp(
        keywords
          .map(w => `(${w})`)
          .join('|'), 'i'))
      .filter(Boolean),
    markup = chunks.reduce((acc, chunk) => {
      acc += keywords.includes(chunk.toUpperCase()) ?
      `<span class="color-red">${chunk}</span>` :
      `<span class='other'>${chunk}</span>`
      return acc
    }, '')      
    e.target.innerHTML = markup;
    // Set cursor postion to end of text
    //    document.querySelector('#editor').focus()
    var child = e.target.children;
    var range = document.createRange();
    var sel = window.getSelection();
    range.setStart(child[child.length - 1], 1);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
    this.focus();
        
    }
});