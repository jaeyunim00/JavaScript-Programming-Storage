const list = ["a", "b", "c", "d", "e"];
const pick = 3;
const result = [];

function pwr(items) {
  if (items.length == pick) {
    result.push(items);
    return;
  }

  for (let i = 0; i < list.length; i++) {
    pwr(`${items}${list[i]}`);
  }
}

pwr("");

console.log(result);
