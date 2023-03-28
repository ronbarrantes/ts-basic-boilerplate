const btnList = document.createElement("div");
btnList.style.border = "1px solid red";
btnList.style.display = "flex";
btnList.style.gap = "12px";

const buttonsNames = ["Button 1", "Button 2", "Button 3"];

const handleClick = (head: HTMLHeadingElement, btnName: string) => {
  head.textContent = btnName;
};

export const btnListStuff = (headTarget: HTMLHeadingElement) => {
  const list = document.createElement("div");

  buttonsNames.forEach((btnName) => {
    const btn = document.createElement("button");
    btn.textContent = btnName;

    btn.addEventListener("click", () => handleClick(headTarget, btnName));
    btnList.appendChild(btn);
  });

  list.appendChild(btnList);

  return list;
};
