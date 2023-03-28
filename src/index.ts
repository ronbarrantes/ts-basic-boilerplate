import "./style.css";
import { btnListStuff } from "./btn-list-stuff";

const head = document.createElement("h1");

head.textContent = "The btn list";

document.body.appendChild(head);
document.body.appendChild(btnListStuff(head));
