document.querySelector('.mts').addEventListener('click', () => {
    sessionStorage.setItem('operatorName', 'МТС');
    window.location.href = 'data.html'; 
  });
  
document.querySelector('.biline').addEventListener('click', () => {
    sessionStorage.setItem('operatorName', 'Билайн');
    window.location.href = 'data.html'; 
  });

document.querySelector('.megafon').addEventListener('click', () => {
    sessionStorage.setItem('operatorName', 'Мегафон');
    window.location.href = 'data.html'; 
  });

  