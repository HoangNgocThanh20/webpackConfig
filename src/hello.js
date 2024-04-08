import _ from "lodash";
import "./style.css";
import SubElement from "./SubElement";

function component() {
  const mainDiv = document.createElement("div");

  const element = document.createElement("div");
  element.innerHTML = _.join(["Hello", "webpack 2"], " ");
  element.classList.add("hello");

  const subElement = SubElement();
  mainDiv.appendChild(element);
  mainDiv.appendChild(subElement);

  return mainDiv;
}

document.body.appendChild(component());
