const data = ['1', '1', '3', '4', '5', '6', '7'];

const container = document.querySelector('#dataContainer');

for (let i = 0; i < data.length; i++) {
    let para = document.createElement('p');
    para.innerText = `Data is: ${data[i]}`;
    if (i % 2 !== 0) {
        para.classList.add('odd');
    } else {
        para.classList.add('even');
    }
    container.appendChild(para);
}
