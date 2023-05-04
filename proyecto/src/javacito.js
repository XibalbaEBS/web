let images = ["mastroste.jpg","counterspell.jpg","reanimate.jpg","fire-elemental.jpg","llanowar.jpg"];
function changeBackground(value) {
    document.getElementById("pepe").style.backgroundImage = `url(media/${images[value]})`;
 }