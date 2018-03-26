const  Discord  =  cer ( ' discord.js ' );
const  client  =  nou  Discord.Client ();

client . pe ( ' gata ' , () => {
    consola . log ( " Sunt gata! " );
});

client . pe ( ' mesaj ' , mesaj  => {
    dacă ( mesaj . Conținutul  ===  ' ping ' ) {
    	mesaj . răspuns ( " pong " );
  	}
});

// ACEASTA TREBUIE SĂ FACEȚI ACEST MOD
client . autentificare ( proces . env . BOT_TOKEN );
