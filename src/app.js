/* eslint-disable */
// import "bootstrap";
// import "./style.css";

window.onload = function() {
  //write your code here
  let who = [
    "Your mother",
    "Spiderman",
    "My grandma",
    "Peter Griffin",
    "Their brother",
    "The dog",
  ];
  let action = ["ate", "peed", "crushed", "broke", "kissed"];
  let what = ["my homework", "my computer", "the car", "a sandwich", "an axe"];
  let when = [
    "before the class",
    "right now",
    "while I was working out",
    "during my lunch",
    "before going to sleep",
  ];
  let where = ["in the park", "in the bathroom", "in my room", "in the church"];
  // FUNCTION TO GET A RANDOM VALUE IN EVERY ARRAY
  function getRandomPosition(excuseArray) {
    return excuseArray[Math.floor(Math.random() * excuseArray.length)];
  }

  let randomWho = getRandomPosition(who);
  let randomAction = getRandomPosition(action);
  let randomWhat = getRandomPosition(what);
  let randomWhen = getRandomPosition(when);
  let randomWhere = getRandomPosition(where);
  // FUNCTION TO BUILD THE EXCUSE
  function getRandomExcuse() {
    return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen} ${randomWhere}`;
  }

  document.getElementById("excuse").innerHTML = getRandomExcuse();
};
