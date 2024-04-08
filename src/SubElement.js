import _ from "lodash";
import "./style.css";

function SubElement() {
  const element = document.createElement("div");
  element.textContent = "i am sub component";
  return element;
}

export default SubElement;
