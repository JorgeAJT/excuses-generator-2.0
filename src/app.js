/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  console.log("Hello, I'm an excuses generator");
};

let who = [
  "Your mother",
  "Spiderman",
  "My grandma",
  "Peter Griffin",
  "Their brother",
  "The dog"
];
let action = ["ate", "peed", "crushed", "broke", "kissed"];
let what = ["my homework", "my computer", "the car", "a sandwich", "an axe"];
let when = [
  "before the class",
  "right now",
  "while I was working out",
  "during my lunch",
  "before going to sleep"
];
let where = ["in the park", "in the bathroom", "in my room", "in the church"];

function getRandomExcuse() {
  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];
  let randomWhere = where[Math.floor(Math.random() * where.length)];
  return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen} ${randomWhere}`;
}

document.getElementById("excuse").innerHTML = getRandomExcuse();
