const n = Number(prompt('Zadajte číslo rulety: 0-36.')); 

if ( n > 36 ) {
  document.body.innerHTML += '<p>Číslo nie je zadané správne.</p>'; 
}

else if (n  === 0) {
  document.body.innerHTML += '<p>Číslo nie je ani liché ani sudé a zároveň ani červené ani čierne.</p>'; 

} else if (n % 2 === 0) { 
  document.body.innerHTML += '<p>Zadané číslo je sudé.</p>';
  if (n >=1 && n <=10 || n >=19 && n <=28 ) {
    document.body.innerHTML += '<p>Zadané číslo je černé.</p>';
  } else {
    document.body.innerHTML += '<p>Zadané číslo je červené.</p>';
  }

} else {
  document.body.innerHTML += '<p>Zadané číslo je liché.</p>'; 
  if (n > 10 && n <19 || n >28 ) {
    document.body.innerHTML += '<p>Zadané číslo je černé.</p>';
  } else {
    document.body.innerHTML += '<p>Zadané číslo je červené.</p>';
  }
}