prepTableRoll(`Fire & Explosives Wound`,`1d10 [+]`,`low`,true,false,null,null)

//tell the actor to roll on the table
async function prepTableRoll(tableName,rollString,aimFor,zeroBased,checkCrit,rollAgainst,comparison) {
  //determine who to run the macro for
  if (game.settings.get('mosh','macroTarget') === 'character') {
    //roll the table for the player's 'Selected Character'
    game.user.character.rollTable(tableName,rollString,aimFor,zeroBased,checkCrit,rollAgainst,comparison);
  } else if (game.settings.get('mosh','macroTarget') === 'token') {
    //roll the table for all selected tokens
    canvas.tokens.controlled.foreach(function(token){
      token.actor.rollTable(tableName,rollString,aimFor,zeroBased,checkCrit,rollAgainst,comparison);
    });
  }
}