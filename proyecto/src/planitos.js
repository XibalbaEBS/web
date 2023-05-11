
let slideIndex = 1;
let textboxes=["w","u","b","r","g"];

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

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  showTextbox(n-1);
  hideTextbox(n-1);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
	slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
	dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}