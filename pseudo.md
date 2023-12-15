*GAMEPAGE PSEUDOCODE*
<hr/>

**Function: addPlayersToBoard**

Description: Adds players to the game board, capable of transitioning between non-combat and combat states.
Input: 
  - playerList (an array containing player names or objects)

Steps:
1. Initialize two empty arrays:
   - 'nonCombatPlayers' to store players outside combat.
   - 'combatPlayers' to store players engaged in combat.
2. Iterate through the 'playerList':
   a. For each player in the 'playerList':
      i. Create a player object or retrieve necessary information.
      ii. Add the player object to the 'nonCombatPlayers' array.
3. Return an object containing both arrays:
   - 'nonCombatPlayers' array for non-combat state.
   - 'combatPlayers' array for combat state.


<hr/>

**Function: rollInitiative**

Description: Initiates the combat state when players click the "Roll Initiative" button.
Input: 
  - nonCombatPlayers (an array containing players in the non-combat state)

Steps:
1. Listen for a click event on the "Roll Initiative" button.
2. When the button is clicked:
   a. Determine if there are players in the non-combat state.
   b. If 'nonCombatPlayers' array is not empty:
      i. Transition the game board to the combat state.
      ii. Move players from 'nonCombatPlayers' to 'combatPlayers'.
      iii. Display the combat-related UI elements.
