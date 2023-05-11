let images = ["mastroste.jpg","counterspell.jpg","reanimate.jpg","fire-elemental.jpg","llanowar.jpg"];
let textboxes=["w","u","b","r","g"];
function changeBackground(value) {
    document.getElementById("pepe").style.backgroundImage = `url(media/${images[value]})`;
 }

function showTextbox(value) {
    var textbox = document.getElementById(textboxes[value]);
    textbox.style.display = "block";
}


function hideTextbox(v1,v2,v3,v4) {
    var textbox
    textbox = document.getElementById(textboxes[v1]);
    textbox.style.display = "none";

    var textbox1
    textbox1 = document.getElementById(textboxes[v2]);
    textbox1.style.display = "none";

    var textbox2
    textbox2 = document.getElementById(textboxes[v3]);
    textbox2.style.display = "none";

    var textbox3
    textbox3 = document.getElementById(textboxes[v4]);
    textbox3.style.display = "none";
}
  
