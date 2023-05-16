function q2(arr) {
  let answer = "";

  const type = {
    BOOL: "#",
    SHORT: "##",
    FLOAT: "####",
    INT: "########",
    LONG: "################",
  };

  console.log(type.BOOL);
  for (let i = 0; i < arr.length; i++) {
  }
}

//최대 128byte, type은 1~100개
//BOOL 이후 BOOL은 answer += #
//BOOL 이후 SHORT answer += .
//BOOL 이후 FLOAT answer += ...
//BOOL이후 INT, LONG answer += .......

q2(["BOOL", "BOOL"]);
// q2(["INT", "INT", "BOOL", "SHORT", "LONG"]);
