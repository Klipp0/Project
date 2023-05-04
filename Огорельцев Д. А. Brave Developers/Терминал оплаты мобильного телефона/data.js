const operatorName = sessionStorage.getItem('operatorName'); document.querySelector('h2').textContent = operatorName;

const paymentAmountInput = document.querySelector('.payment_amount');
const telephoneInput = document.querySelector('.telephone');
const confirmButton = document.querySelector('.confirm');

confirmButton.addEventListener('click', () => {
    let paymentAmount = Number(paymentAmountInput.value);
    let telephoneValue = telephoneInput.value.replace(/\s/g,'');
    
    if (isNaN(paymentAmount) || paymentAmount < 1 || paymentAmount > 1000) {
      alert("Некорректная сумма оплаты. Введите значение от 1 до 1000 рублей.");
      return;
    }
  
    if (!/^(\+7)[0-9]{10}$/.test(telephoneValue)) {
      alert("Некорректный номер телефона. Он должен содержать +7 и 10 символов после.");
      return;
    }
  
    if (!paymentAmount || !telephoneValue) {
      alert("Заполните все поля.");
      return;
    }
  
    setTimeout(() => {
      const success = Boolean(Math.round(Math.random()));
      const result = success ? "Успешно" : "Не успешно";
  
      if (success) {
        alert(`Оплата ${paymentAmount} рублей на номер ${telephoneValue} прошла ${result}.`);
        location.href = "index.html";
      } else {
        alert(`Произошла ошибка при оплате ${paymentAmount} рублей на номер ${telephoneValue}. Попробуйте позже.`);
      }
    }, 2000);
  });