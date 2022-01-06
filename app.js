
//HAMBURGER MENU JS 
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}));

//Home RESET
document.getElementById('homeReset').addEventListener("click",()=>{
  document.getElementById('about').style.display = "none";
  document.getElementById('jsProjects').style.display = "none";
  document.getElementById('frontEndProjects').style.display = "none";
  document.getElementById('reflection').style.display="none";
  document.getElementById('hero').style.display="flex";
  document.getElementById('media').style.display="flex";
  document.getElementById('contact').style.display="none";

});

//TOGGLE CODE
//Declaring an array filled with the names of each specific div to be show
let divs = ['about','jsProjects', 'frontEndProjects', 'reflection', 'hero', 'media', 'contact'];
//Setting the variable 'visible' to null
let visible = null;

//function to show the div. Takes in the div id, and compares it to the visibile variable.
//If the visible variable does not match the 'id' parameter the 'visible' variable is set to the parameter.
// Then a function to hide the divs is called
function show(id){
  if(visible !== id){
    visible = id;
  }
  hide();
}

//Hide function
function hide(){
  //declaring variables.
  //div is used to store whatever we grab wih getElementById.
  //i is used for the for-loop to run through the array of div names/id's
  //id is used to store each element in the array
  let div, i, id;

  
  for(i=0; i < divs.length; i++){
    id = divs[i];
    div = document.getElementById(id);
    if(visible === id){
      div.style.display = "flex";

    } else{
      div.style.display = "none";
    }
  }
}

