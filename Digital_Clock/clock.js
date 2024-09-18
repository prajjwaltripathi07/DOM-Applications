//  const clock = document.getElementById('clock')
//  const d= document.getElementById('da')
//   let dau=new Date();
//   d.innerHTML=dau.toLocaleDateString();
//  setInterval(function()
//  {
//     let date=new Date();
//     clock.innerHTML=date.toLocaleTimeString();
//  }, 1000);
 
const clock = document.getElementById('clock');
const d = document.getElementById('da');

// Display the current date
let dau = new Date();
d.innerHTML = dau.toLocaleDateString();

// Function to update the clock
function updateClock() {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}

// Start the clock update interval
let clockInterval = setInterval(updateClock, 1000);

// Set a timeout to display "Game Over" after 5 seconds and stop the clock
setTimeout(function() {
    clearInterval(clockInterval); // Stop the clock
    clock.innerHTML = "Game Over"; // Display "Game Over"
}, 6000);
