/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adjetive = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let ending = [".es", ".net", ".org"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adjetive.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < ending.length; l++) {
          let dominio = pronoun[i] + adjetive[j] + noun[k] + ending[l];
          let h6 = document.createElement("h6");
          h6.innerHTML = dominio;
          document.body.appendChild(h6);
        }
      }
    }
  }
};
