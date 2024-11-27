const array = [5, 91, 20, 15, 90];

let aux = 0;
let aux2 = 0;
const verifyNumber = array.forEach((value, index) => {
  if (value > aux) {
    aux = value;
  }
});

const arrayMap = array.map((value) => {
  if (value > aux2) {
    aux2 = value;
  }

  return aux2;
});

console.log("meu numero maior=>", aux2);
