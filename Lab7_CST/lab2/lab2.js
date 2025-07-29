const allTables = document.getElementsByTagName("table");
const secondTbl = allTables[1];
const link = secondTbl.querySelector("a");

link.href = "https://learnhub.com";
link.textContent = "LearnHub";

const imgs = document.getElementsByTagName("img");
const lastImg = imgs[imgs.length - 1];
lastImg.style.border = "2px dotted purple";

function alertCheckedCheckboxes() {
  const formElement = document.getElementById("userData");
  const selected = formElement.querySelectorAll('input[type="checkbox"]:checked');
  const selectedValues = Array.from(selected).map((el) => el.value);
  alert("Selected Options: " + selectedValues.join(" | "));
}

const box = document.getElementById("example");
if (box) {
  box.style.backgroundColor = "#f0c0ff";
}
