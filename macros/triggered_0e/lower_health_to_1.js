prepModifyActor();

//tell the actor to run the function
async function prepModifyActor(fieldAddress,modValue,modRollString,outputChatMsg) {
    //determine who to run the macro for
    if (game.settings.get('mosh','macroTarget') === 'character') {
      //get the health for this token
      let curValue = game.user.character.system.health.value;
      //calculate difference
      let lowerBy = 1 - curValue;
      //run the function for the player's 'Selected Character'
      game.user.character.modifyActor('system.health.value',lowerBy,null,true);
    } else if (game.settings.get('mosh','macroTarget') === 'token') {
      //run the function for all selected tokens
      canvas.tokens.controlled.forEach(function(token){
        //get the health for this token
        let curValue = token.actor.system.health.value;
        //calculate difference
        let lowerBy = 1 - curValue;
        //run the function on this token
        token.actor.modifyActor('system.health.value',lowerBy,null,true);
      });
    }
}