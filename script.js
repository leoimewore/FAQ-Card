"use strict";
const answer = document.querySelectorAll(".answer");
const arrow = document.querySelectorAll(".arr");
const question = document.getElementsByTagName("h2");
//Initial Click
for (let i = 0; i < question.length; i++)
  question[i].addEventListener("click", function () {
    question[i].classList.toggle('colour')
    answer[i].classList.toggle("hidden");
    arrow[i].classList.toggle("rotate");
  });

  //Closing Click

question.addEventListener("click", function () {
  arrow[i].classList.toggle("rotate");
  answer[i].classList.toggle("hidden");
 
});
