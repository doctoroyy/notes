var total = 5;
var a = 3;
var result = [];

function foo(a) {
  var i;
  for (i = 0; i < 3; i++) {
    result[i] = function() {
      total += i * a;
    }
  }
}

foo(1);
result[0](); // i=? a=? total=?
console.log(total)
result[1](); // i=? a=? total=?
console.log(total)
result[2](); // i=? a=? total=?
console.log(total)

