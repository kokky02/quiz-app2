
document.addEventListener("DOMContentLoaded", function() {

     const container = document.getElementById("container-footprint");
 
     let lastX = 0;
 
     let lastY = 0;
 
     const interval = 80; // Nastavte interval podle potřeby (v pixelech)
 
  
 
     function createFootprint(x, y) {
 
       const footprint = document.createElement("img");
 
       footprint.src = "footprint.png";
 
       footprint.alt = "Footprint";
 
       footprint.classList.add("footprint");
 
       container.appendChild(footprint);
 
  
 
       const angle = calculateAngle(x, y);
 
       footprint.style.transform = `translate(${x}px, ${y}px) rotate(${angle}deg)`;
 
       footprint.style.display = "block";
 
  
 
       setTimeout(() => {
 
         footprint.remove();
 
       }, 2000); // 2 sekundy
 
     }
 
  
 
     function calculateAngle(x, y) {
 
       const deltaX = x - lastX;
 
       const deltaY = y - lastY;
 
       const angleInDegrees = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
 
       return angleInDegrees + 90;
 
     }
 
  
 
     document.addEventListener("mousemove", function(e) {
 
       const x = e.clientX;
 
       const y = e.clientY;
 
      
 
       // Spočítejte vzdálenost mezi aktuální a předchozí pozicí
 
       const distance = Math.sqrt((x - lastX) ** 2 + (y - lastY) ** 2);
 
  
 
       // Zobrazte stopu boty pouze pokud je vzdálenost větší než určený interval
 
       if (distance > interval) {
 
         createFootprint(x, y);
 
         lastX = x;
 
         lastY = y;
 
       }
 
     });
 
   });