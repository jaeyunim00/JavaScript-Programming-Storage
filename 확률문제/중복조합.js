const list = [1, 2, 3, 4];
const pick = 2;
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
