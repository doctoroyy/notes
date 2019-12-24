const box = document.getElementById('box');

document.addEventListener('mousedown', function(event) {
  console.log('xx')
  box.style.left = event.clientX + 'px';
  box.style.top = event.clientY + 'px';
})

