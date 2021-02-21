// Get the hour
const today = new Date();
const hour = today.getHours();

// Here you can change your name
const name = '  David Ticona';

// Here you can change your greetings
const gree1 = 'Anda a dormir  ';
const gree2 = 'Buenos días, como vas  ';
const gree3 = 'Buenos tardes  ';
const gree4 = 'Ya se hace de noche ,  ';
const gree5 = 'Debes desacanzar,  ';
const gree6 = 'Quiza y me voy de viaje,  ';

// Define the hours of the greetings
if (hour >= 23 && hour < 5) {
  document.getElementById('greetings').innerText = gree1 + name;
} else if (hour >= 6 && hour < 12) {
  document.getElementById('greetings').innerText = gree2 + name;
} else if (hour >= 12 && hour < 17) {
  document.getElementById('greetings').innerText = gree3 + name;
} else {
  document.getElementById('greetings').innerText = gree4 + name;
}
