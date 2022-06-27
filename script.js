//------- onclick layout buttons active and remove previous functionalitites ---------
let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    buttons.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
  });
});

//------------ myFunction1 for Layout1 functionalities-------------
function myFunction1() {
  // remove all previous clicked styled classes
  document.getElementById("container").classList.remove("container2");
  document.getElementById("container").classList.remove("container3");
  document.getElementById("card1").classList.remove("card2");
  document.getElementById("card2").classList.remove("card2");
  document.getElementById("card3").classList.remove("card2");
  document.getElementById("card4").classList.remove("card2");
  document.getElementById("card5").classList.remove("card2");

  document.getElementById("card1").classList.remove("c1");
  document.getElementById("card2").classList.remove("c2");
  document.getElementById("card3").classList.remove("c3");
  document.getElementById("card4").classList.remove("c4");
  document.getElementById("card5").classList.remove("c5");

  //add new style classes for Layout 1

  document.getElementById("card1").classList.add("card");
  document.getElementById("card2").classList.add("card");
  document.getElementById("card3").classList.add("card");
  document.getElementById("card4").classList.add("card");
  document.getElementById("card5").classList.add("card");
}

//------------ myFunction2 for Layout2 functionalities-------------
function myFunction2() {
  // remove all previous clicked styled classes
  document.getElementById("container").classList.remove("container3");
  document.getElementById("container").classList.add("container2");
  document.getElementById("card5").classList.remove("card");
  document.getElementById("card1").classList.remove("card");
  document.getElementById("card2").classList.remove("card");
  document.getElementById("card3").classList.remove("card");
  document.getElementById("card4").classList.remove("card");
  document.getElementById("card5").classList.remove("card");
  
  document.getElementById("card1").classList.remove("c1");
  document.getElementById("card2").classList.remove("c2");
  document.getElementById("card3").classList.remove("c3");
  document.getElementById("card4").classList.remove("c4");
  document.getElementById("card5").classList.remove("c5");

  //add new style classes for Layout 2
  document.getElementById("card1").classList.add("card2");
  document.getElementById("card2").classList.add("card2");
  document.getElementById("card3").classList.add("card2");
  document.getElementById("card4").classList.add("card2");
  document.getElementById("card5").classList.add("card2");
}

// myFunction3 for Layout3 functionalities
function myFunction3() {
  document.getElementById("container").classList.remove("container2");
  // remove all previous clicked styled classes

  document.getElementById("card1").classList.remove("card2");
  document.getElementById("card2").classList.remove("card2");
  document.getElementById("card3").classList.remove("card2");
  document.getElementById("card4").classList.remove("card2");
  document.getElementById("card5").classList.remove("card2");

  document.getElementById("card5").classList.remove("card");
  document.getElementById("card1").classList.remove("card");
  document.getElementById("card2").classList.remove("card");
  document.getElementById("card3").classList.remove("card");
  document.getElementById("card4").classList.remove("card");
  document.getElementById("card5").classList.remove("card");

  //add new style classes for Layout 3
  document.getElementById("container").classList.add("container3");
  document.getElementById("card1").classList.add("c1");
  document.getElementById("card2").classList.add("c2");
  document.getElementById("card3").classList.add("c3");
  document.getElementById("card4").classList.add("c4");
  document.getElementById("card5").classList.add("c5");
}
