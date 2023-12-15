import playerList from './playerList.js';

//* combatInitiativeArray will be an array of objects, each object containing a player and their initiative score
const combatInitiativeArray = [];

const initiativeBtn = document.getElementById("initiative-btn");

initiativeBtn.addEventListener("click", function() {
  console.log('click');
  //TODO: players/npcs roll initiative, based upon their perception score, and then will be sorted into initiative order in the combatInitiativeArray
})

console.log({playerList});

//! add this function once we have a database of players from which to populate the playerList
// function addPlayer(player) {
//     playerList.push(player);
// }