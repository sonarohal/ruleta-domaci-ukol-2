const n = Number(prompt('Zadajte číslo rulety: 0-36.')); 
if (n  === 0) {
  document.body.innerHTML += '<p>Číslo nie je ani liché ani sudé.</p>'; 
} else if (n % 2 === 0) { 
  document.body.innerHTML += '<p>Číslo je sudé.</p>';
} else {
  document.body.innerHTML += '<p>Číslo je liché.</p>'; 
}

