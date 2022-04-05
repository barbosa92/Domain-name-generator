/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adjetive = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let ending = [".es", ".net", ".org"];

  let firstElement = pronoun[Math.floor(Math.random() * pronoun.length)];
  let secondElement = adjetive[Math.floor(Math.random() * adjetive.length)];
  let thirdElement = noun[Math.floor(Math.random() * noun.length)];
  let fourthElement = ending[Math.floor(Math.random() * ending.length)];

  let dominio = `${firstElement}${secondElement}${thirdElement}${fourthElement}`;
  document.querySelector("#domain").innerHTML = dominio;
};
