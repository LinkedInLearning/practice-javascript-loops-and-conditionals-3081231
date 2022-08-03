/*
 * Append a new <div> element to the <p> with id "output"
 */

function display(str) {
  let div = document.createElement("div");
  div.innerText = str;
  document.getElementById("output").append(div);
}