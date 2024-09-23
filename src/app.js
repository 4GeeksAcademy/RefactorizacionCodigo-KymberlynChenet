/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  //write your code here
  let who = ["The cat", "My sister", "The zombie", "My bird"];
  let action = ["ate", "hid", "crushed", "broke", "stole"];
  let what = ["my computer", "my phone", "the key", "the car"];
  let when = [
    "after the class",
    "when I was eating",
    "while I was sleeping",
    "during my dinner",
    "while I was laughing"
  ];

  const getRandomExcuse = arr => arr[Math.floor(Math.random() * arr.length)];
  const generatorExcuse = () =>
    `${getRandomExcuse(who)} ${getRandomExcuse(action)} ${getRandomExcuse(
      what
    )} ${getRandomExcuse(when)}`;

  document.querySelector("#the_excuse").innerHTML = generatorExcuse();
};
