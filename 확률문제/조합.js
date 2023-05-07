const list = ["a", "b", "c", "d", "e"];
const pick = 3;
const result = [];

const combination = (items, index) => {
  if (items.length == pick) {
    result.push(items);
    return;
  }
  for (let i = index; i < list.length; i++) {
    combination(`${items}${list[i]}`, i + 1);
  }
};

combination("", 0);

console.log(result);
