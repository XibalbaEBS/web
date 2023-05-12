let images = ["mastroste.jpg","counterspell.jpg","reanimate.jpg","fire-elemental.jpg","llanowar.jpg"];
let textboxes=["w","u","b","r","g"];
let carta=["wt","ut","bt","rt","gt"];
function changeBackground(value) {
    document.getElementById("pepe").style.backgroundImage = `url(media/${images[value]})`;
 }

function showTextbox(value) {
    var textbox = document.getElementById(textboxes[value]);
    textbox.style.display = "block";
}


function hideTextbox(id) {
    let containers=document.getElementsByClassName("textbox");
    for (let i = 0; i < containers.length; i++) {
        if (containers[i].id!=id) {
            containers[i].style.display="none";
        }
    }
}

function showCard(id){
    let containers = document.getElementsByClassName("cartita");
    for (let i = 0; i < containers.length; i++) {
        if (containers[i].id==id) {
            containers[i].style.display="block";
        }
    }
}

function hideCard(id) {
    let containers=document.getElementsByClassName("cartita");
    for (let i = 0; i < containers.length; i++) {
        if (containers[i].id!=id) {
            containers[i].style.display="none";
        }
    }
}

window.onload=function(){
    let images2 = ["Gideon-Amonkhet-2.jpg"]
    const myLi = document.getElementById("gi");
    const description = document.getElementById("caracteristicas");


  myLi.addEventListener("mouseover", () => {
    // Do something when the mouse is over the list item
    value = 0;
    description.style.backgroundImage = (`url(media/${images2[value]})`);
  });

  myLi.addEventListener("mouseout", () => {
    // Do something when the mouse leaves the list item
    description.style.backgroundImage = ("url(media/undercover_operative.jpg)");
  });
}

  
