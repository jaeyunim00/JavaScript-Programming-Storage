const list = ["a", "b", "c", "d", "e"];
const pick = 3;
const result = [];

function pwc(items, index) {
  if (items.length === pick) {
    result.push(items);
    return;
  }

  for (let i = index; i < list.length; i++) {
    pwc(`${items}${list[i]}`, i);
  }
}

pwc("", 0);

console.log(result);
