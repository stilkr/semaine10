/* code simplon */

$bouton = document.getElementById("bouton");
$multiplicateur = document.getElementById("multiplicateur");
$score = document.getElementById("score");
score = 0;
nbMultiplicateur = 1;

function afficherScore() {
    $score.innerHTML = "Score : " + score;
}

function afficherNbMultiplicateur() {
    $multiplicateur.innerHTML = "x" + nbMultiplicateur + " (prix du prochain : " + prix() + ")";
}

function clic() {
    score = score + nbMultiplicateur;
    afficherScore();
}

function prix() {
    return 20 * nbMultiplicateur * nbMultiplicateur;
}

function acheterMultiplicateur() {
    if (score >= prix()) {
        score = score - prix();
        nbMultiplicateur = nbMultiplicateur + 1;
        afficherNbMultiplicateur();
        afficherScore();
    } else {
        alert("Votre score est insuffisant !");
    }
}

$bouton.onclick = clic;
$multiplicateur.onclick = acheterMultiplicateur;
afficherScore();
afficherNbMultiplicateur();

/* fin du code simplon */


/* déclaration des id */							

$clicauto = document.getElementById("clicauto");								// les boutons
$salle = document.getElementById("salle");
	
$cornet = document.getElementById("cornet");									// les images
$glou = document.getElementById("glou");
$popcorn = document.getElementById("popcorn");
$glasses = document.getElementById("glasses");
$billet = document.getElementById("billet");

$affichage = document.getElementById("affichage").style.visibility="hidden";	// la div globale

$consignes = document.getElementById("consignes").defaultValue =""; 			// les textes
$consignes2 = document.getElementById("consignes2").defaultValue ="";

/* fin de la déclaration des id */


/* début autoclick */

		
		function autoClicker()			{
		$stop = setInterval(clic,1000);
		}

		function acheterAutoclick()		{
		if (score >= 200){
		score = score - 200;
		autoClicker();
		}else 							{
        alert("Votre score est insuffisant.");
		}
		}			
	
clicauto.onclick = acheterAutoclick;
	
$clicauto.innerHTML = "Mode autoclick pour 200 clicks";

				
/* fin autoclick */


/* début souris & clicks */

		function mouseDown() 			{
		salle.style.height = "19em";											// clicks sur la salle
		}

		function mouseUp() 				{
		salle.style.height = "20em";
		}

/* fin souris & clicks */

/* début consignes*/

		function afficherConsignes()	{
		$consignes.innerHTML = consignes;
		$consignes2.innerHTML = consignes2;
		}
		
afficherConsignes();
		
/* fin consignes*/		

/* bonus par points */

		function auCinema() 				{

		if (score >= 800) 						{
			consignes.innerHTML = "Ouf! Vous avez finalement eu le temps. La séance est sur le point de commencer.";
			consignes2.innerHTML = "Vous allez enfin pouvoir vous faire une toile! Bravo !";
			consignes.style.color = "#ecf0f1";		
			consignes2.style.color = "#ecf0f1";	
		
			affichage.style.display = "visible";
			}
		
		else if (score < 50)						{
			consignes.innerHTML = "Il y a un sacré monde dans ce foyer. Et tous n'ont pas découvert le déo.";
			consignes2.innerHTML = "Pour récompenser votre patience, dans 50 clicks, vous aurez droit à une friandise.";				
			}	
					
		else if (score >= 50 && score < 99)			{
			consignes.innerHTML = "Il fait trop chaud ici, agglutinés les uns aux autres. Vous méritez bien une petite glace.";
			consignes2.innerHTML = "Avec tout ça, vous allez finir pas avoir soif.";
					
			cornet.style.visibility = "visible";			
			}				

		else if (score >= 100 && score < 199)		{
			consignes.innerHTML = "Cela fait du bien de se désaltérer un peu.";
			consignes2.innerHTML = "Mais que vois-je ? Il y a la queue devant le stand à popcorn. Tsss.";	
					
			cornet.style.visibility = "visible";
			glou.style.visibility = "visible";						
			}					
					
		else if (score >= 200 && score < 399)		{
			consignes.innerHTML = "C'est bon. Vous avez votre seau de pop corn.";
			consignes2.innerHTML = "Vous ressemblerez à Mickey une fois vos lunettes 3D sur le nez.";
					
			cornet.style.visibility = "visible";
			glou.style.visibility = "visible";
			popcorn.style.visibility = "visible";				
			}
					
		else if (score >= 400 && score < 599)		{
			consignes.innerHTML = "Voilà. Vous avez vos lunettes. Vous êtes de toute beauté.";
			consignes2.innerHTML = "Mais sans ticket de cinéma, vous n'irez pas bien loin.";	
					
			cornet.style.visibility = "visible";
			glou.style.visibility = "visible";
			popcorn.style.visibility = "visible";
			glasses.style.visibility = "visible";				
			}
					
		else if (score >= 600 && score < 799)		{					
			consignes.innerHTML = "Youhou, vous avez votre billet !";
			consignes2.innerHTML = "Il ne reste plus qu'à faire la queue devant la salle avant d'entrer";
					
			cornet.style.visibility = "visible";
			glou.style.visibility = "visible";
			popcorn.style.visibility = "visible";
			glasses.style.visibility = "visible";
			billet.style.visibility = "visible";
			}		
		}
		

$salle.onclick = auCinema;
/*fin des bonus */