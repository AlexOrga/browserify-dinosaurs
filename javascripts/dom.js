const outputDiv = document.getElementById('dinos');

const domString = (dinos) => {
  let stringg = '';
  dinos.forEach((dino) => {
    stringg += `<h2>${dino.type}</h2>`;
  });
  return stringg;
};

const printToDom = (dinoArray) => {
  outputDiv.innerHTML = domString(dinoArray);
};

module.exports = printToDom;
