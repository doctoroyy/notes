const canvas = document.getElementById('painter');

canvas.height = canvas.width = 400;
var context = canvas.getContext("2d");

//开始路径
context.beginPath();
context.arc(200, 200, 105, 0, 2 * Math.PI, false);

//可以想像有一支画笔，如果不手动移动画笔位置的话，这支画笔会一笔画完所有图形
context.moveTo(300, 200)

context.arc(200, 200, 100, 0, 2 * Math.PI, false);

let x = 200, y = 100, r = 100;
// for (let i = 0; i < 60; i++) {
let weight = 1;

context.moveTo(x, y);
context.lineTo(200, 200);

x += r - r * weight * Math.cos(Math.PI / 180 * 6);
y += r * weight * Math.sin(Math.PI / 180 * 6);


context.moveTo(x, y);
context.lineTo(200, 200);
// }


context.stroke();

// console.log(Math.cos(Math.PI / 30))
