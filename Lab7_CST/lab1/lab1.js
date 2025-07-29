const allImages = document.images;
console.log("All images in the document:");
for (let i = 0; i < allImages.length; i++) {
  console.log(allImages[i]);
}

const selectedImages = document.querySelectorAll("img.img2");
console.log("Images with class 'img2':");
selectedImages.forEach((item) => {
  console.log(item);
});

const selectMenu = document.getElementById("cityDropdown");
const optionsList = selectMenu ? selectMenu.options : [];
console.log("Available cities:");
for (let i = 0; i < optionsList.length; i++) {
  console.log(`${optionsList[i].text} - ${optionsList[i].value}`);
}

const tableList = document.getElementsByTagName("table");
const targetTable = tableList[1];
console.log("Rows in second table:");
for (let i = 0; i < targetTable.rows.length; i++) {
  console.log(targetTable.rows[i]);
}

const blueItems = document.getElementsByClassName("fontBlue");
console.log("Items with blue font:");
for (let i = 0; i < blueItems.length; i++) {
  console.log(blueItems[i]);
}
