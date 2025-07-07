let btnLight = document.getElementById("btnLight")
btnLight.addEventListener("click",()=>{

    let body = document.querySelector("body")
    body.style.backgroundColor="white";
    body.style.color="black";
    btnLight.style.color="white";
    nightMode.style.color = "black"
});

let nightMode = document.getElementById("nightMode");

nightMode.addEventListener("click",()=>{
    let body = document.querySelector("body");
    body.style.backgroundColor ="black";
    body.style.color = "white"
    nightMode.style.color="white";
    btnLight.style.color="black"
})


  // <!-- Mobile Menu JavaScript -->

      document.addEventListener("DOMContentLoaded", function () {
        const mobileMenuButton = document.getElementById("mobile-menu-button");
        const closeMenuButton = document.getElementById("close-menu-button");
        const mobileMenu = document.getElementById("mobile-menu");

        mobileMenuButton.addEventListener("click", function () {
          mobileMenu.classList.remove("hidden");
          mobileMenu.classList.add("flex");
          document.body.style.overflow = "hidden"; // Prevent scrolling when menu is open
        });

        closeMenuButton.addEventListener("click", function () {
          mobileMenu.classList.remove("flex");
          mobileMenu.classList.add("hidden");
          document.body.style.overflow = ""; // Re-enable scrolling
        });
      });




      
// //project clicked

// let h1project = document.getElementById("h1project");
// let project = document.getElementById("project");


// h1project.addEventListener("click", (even)=>{
//     let target= even.target;
//   switch(target.id){
//     case "h1project":
//         project.innerHTML ="project";
//         break;
        

//   }
// })

// let h1asignment = document.getElementById("h1asignment");
// let asignment = document.getElementById("asignment");

// h1asignment.addEventListener("click", (even)=>{
//     let target= even.target;
//   switch(target.id){
//     case "h1asignment":
//         asignment.innerHTML ="asignment";
//         break;
        

//   }
// })
// let h1quiz = document.getElementById("h1quiz");
// let quiz = document.getElementById("quiz");

// h1quiz.addEventListener("click", (even)=>{
//     let target= even.target;
//   switch(target.id){
//     case "h1quiz":
//         quiz.innerHTML ="Quizzes";
//         break;
        

//   }
// })
// let h1exrsis = document.getElementById("h1exrsis");
// let exrsis = document.getElementById("exrsis");

// h1exrsis.addEventListener("click", (even)=>{
//     let target= even.target;
//   switch(target.id){
//     case "h1exrsis":
//         exrsis.innerHTML ="Exercises";
//         break;
        

//   }
// })

// let h1help = document.getElementById("h1help");
// let helpmen = document.getElementById("helpmen");

// h1help.addEventListener("click", (even)=>{
//     let target= even.target;
//   switch(target.id){
//     case "h1help":
//         helpmen.innerHTML ="Helpmen";
//         break;
        

//   }
// })

