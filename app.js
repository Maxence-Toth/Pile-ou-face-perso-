// set up text to print, each item in array is new line
    var aText = new Array(
    "Il y a longtemps, dans une galaxie lointaine, très lointaine...",  "Avant même la création des sabres lasers.." , "Les guerres et donc par extension le destin de l'univers étaient décidé sur une partie de ...","", "", "","PILE OU FACE !")
    
    var iSpeed = 100; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
     
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typedtext");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 1000);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    
    
    typewriter();

setTimeout(function(){document.getElementById('hidden').style.visibility="visible"}, 28000)


const choix = document.getElementById('choix')

function displaydiv(){
    document.getElementById("choix").style.visibility="visible"

}

let pileouface = Math.floor(Math.random()*2)


function pile() {
    if (pileouface == 0) {
        let pilegagne = document.createElement("div")
        pilegagne.id = "pilegagne"
        pilegagne.text = "Ainsi donc, grâce à vous l'univers peut enfin dormir sur ses deux oreilles."
        resultat.appendChild(pilegagne).innerHTML = pilegagne.text

        let gifwin1 = document.createElement("img")
        gifwin1.src = "media/win1.gif"
        gifwin1.classList.add('gifwin')
        resultat.appendChild(gifwin1)

        let gifwin2 = document.createElement("img")
        gifwin2.src = "media/win2.gif"
        gifwin2.classList.add('gifwin')
        resultat.appendChild(gifwin2)

    } else {
        let pileperd = document.createElement("div")
        pileperd.id = "pileperd"
        pileperd.text = "Ils étaients des milliards à compté sur vous, en perdant cette guerre vous les avez perdus eux..."
        resultat.appendChild(pileperd).innerHTML = pileperd.text

        let giflost1 = document.createElement("img")
        giflost1.src = "media/lost2.gif"
        giflost1.classList.add('giflost')
        resultat.appendChild(giflost1)

        let giflost2 = document.createElement("img")
        giflost2.src = "media/lost1.gif"
        giflost1.classList.add('giflost',)
        resultat.appendChild(giflost2)

    }
} 

function face() {
    if (pileouface == 1) {
        let facegagne = document.createElement("div")
        facegagne.id = "facegagne"
        facegagne.text = "Ainsi donc, grâce à vous l'univers peut enfin dormir sur ses deux oreilles."
        resultat.appendChild(facegagne).innerHTML = facegagne.text

        let gifwin1 = document.createElement("img")
        gifwin1.src = "media/win1.gif"
        gifwin1.classList.add('gifwin')
        resultat.appendChild(gifwin1)

        let gifwin2 = document.createElement("img")
        gifwin2.src = "media/win2.gif"
        gifwin2.classList.add('gifwin')
        resultat.appendChild(gifwin2)

    } else {
        let faceperd = document.createElement("div")
        faceperd.id = "faceperd"
        faceperd.text = "Ils étaients des milliards à compté sur vous, en perdant cette guerre vous les avez perdus eux..."
        resultat.appendChild(faceperd).innerHTML = faceperd.text

        let giflost1 = document.createElement("img")
        giflost1.src = "media/lost2.gif"
        giflost1.classList.add('giflost')
        resultat.appendChild(giflost1)

        let giflost2 = document.createElement("img")
        giflost2.src = "media/lost1.gif"
        giflost1.classList.add('giflost',)
        resultat.appendChild(giflost2)
    }
} 

function pageScroll() {
    window.scrollBy(0,1);
    scrolldelay = setTimeout(pageScroll,10);
}

pageScroll()