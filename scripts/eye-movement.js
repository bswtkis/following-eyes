document.addEventListener("mousemove", (e) => {
   const mouseX = e.clientX;
   const mouseY = e.clientY;

   const anchor = document.getElementById('anchor');
   const rekt = anchor.getBoundingClientRect();
   const anchorX = rekt.left + rekt.width/2;
   const anchorY = rekt.top + rekt.height/2;

   const angleDegree = angle(mouseX, mouseY, anchorX, anchorY);
   const eyes = document.querySelectorAll('.eye');
   eyes.forEach(eye => {
      eye.style.transform = `rotate(${-90 + angleDegree}deg)`
   })
});

function angle(cx,cy,ex,ey) {
   const dx = ex - cx;
   const dy = ey - cy;
   const radians = Math.atan2(dy, dx);
   const degrees = radians * 180 / Math.PI;
   return degrees;
}