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

function loadListeners(){
    let images2 = ["Gideon-Amonkhet-2.jpg","jace.jpg","veil.jpg","chandrita.jpg","Nissa-Vital-Force-Kaladesh-MtG-Art.jpg"]
    let characterID = ["gi","ja","li","ch","ni"];
    const myLi = document.getElementById("gi");
    const carac = document.getElementById("caracteristicas");
    var myArray = [
        document.getElementById("gi"),
        document.getElementById("ja"),
        document.getElementById("li"),
        document.getElementById("ch"),
        document.getElementById("ni")
    ];

    function changeBackground(x){
        carac.style.backgroundImage= (`url(media/${images2[x]})`);
    }

    for(let i = 0; i < myArray.length; i++){
        myArray[i].addEventListener("mouseover", function(){changeBackground(i);});
        myArray[i].addEventListener("mouseout", function(){carac.style.backgroundImage = ("url(media/undercover_operative.jpg)");});
    }

    /*
    function addListeners(){
        let tmp;
        let li_item;
        
        for(let i=0 < characterID.length;i++;){
            tmp=characterID[i];
            li_item = document.getElementById(characterID[i]);
            li_item.addEventListener("mouseover",agregarFunIn(i));
            li_item.addEventListener("mouseout",agregarFunOut());
        }
    }
    */
    /*
    myLi.addEventListener("mouseover", () => {
        // Do something when the mouse is over the list item
        value = 0;
        description.style.backgroundImage = (`url(media/${images2[value]})`);
    });

    myLi.addEventListener("mouseout", () => {
        // Do something when the mouse leaves the list item
        description.style.backgroundImage = ("url(media/undercover_operative.jpg)");
    });
    
    addListeners();
    function agregarFunIn(value){
        description.style.background= (`url(media/${images2[value]})`);
    }

    function agregarFunOut(value){
        description.style.backgroundImage = ("url(media/undercover_operative.jpg)");
    }

    function changeBackground(value) {
        document.getElementById("pepe").style.backgroundImage = `url(media/${images[value]})`;
    }
    */
}

  
